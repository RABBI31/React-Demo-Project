import React , {useState, useEffect} from 'react'
import axios from 'axios'
import { node } from 'prop-types'

export const Search = () => {
    const [term , setTerm] = useState('')
    const [results,setResults] = useState([])

    console.log(results)

    useEffect(()=>{
        // rule no. 1 for calling a data in useeffect
        const search = async ()=>{
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php' ,{
                params : {
                    action: 'query' ,
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term, 
                }
                
            });
            setResults(data.query.search) 
        }
        if(term && !results.length){
            search()
        }else {
        const timeoutid = setTimeout (() => {
            if(term){
                search();
            }
            
        }, 1000)

        return () =>{
            clearTimeout(timeoutid)
        }

    }
        
        // rule no. 2 for calling a data in useeffect
        // (async ()=>{
        //        await axios.get('gifgibfowsi');
        //     })();
        // rule no. 3 for calling a data in useeffect
        // axios.get('hjksbflsn')
        //   .then((response)=>{
        //       console.log(response.data);
        //   })

    },[term])
    const renderResult = results.map((result)=>{
        return(
            <div key={result.pageid} className='item'>
                <div className='right floated content'>
                    <a 
                    className='ui button'
                    href={`https://en.wikipedia.org?curid=${result.pageid}`}
                    >
                        Go
                    </a>
                </div>
                 <div className='content'>
                     <div className='header'>
                         {result.title}
                     </div>
                    <span dangerouslySetInnerHTML={{ __html:result.snippet}}></span>
                 </div>
            </div>
        );
    });
    return (
        <div>
           <div className='ui form'>
               <div className='field'>
                   <label>Enter Search Term</label>
                   <input 
                   value ={term}
                   onChange={e => setTerm(e.target.value)}
                   className='input' />
               </div>
           </div>
           <div className='ui celled list'>
               {renderResult}
           </div>
        </div>
    )
}
