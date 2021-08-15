
import { Search } from './components/Search';
import Dropdown from './components/Dropdown';
import { useState } from 'react';
import Translate from './components/Translate';
import Accordion from './components/Accordion';
import Route from './components/Route';
import Header from './components/Header';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework',
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library among engineers',
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components',
  },
];

const options = [
  {
    label : 'The Color Red',
    value : 'red'
  },
  {
    label : 'The Color Green',
    value : 'green'
  },
  {
    label : 'The Color Blue',
    value : 'blue'
  }
]
function App() {
  const [selected , setSelected] = useState(options[0])
  const [showDrop , setShowDrop] = useState(true)
  return (
    <div className="App">
      <Header />
     {/* <Search /> */}
     {/* <button onClick={()=> setShowDrop(!showDrop)}>
         Open/ Close Dropdown
     </button> */}
     {/* { showDrop ? */}
     {/* <Dropdown
      options={options}
      selected ={selected}
      onSelectChange = {setSelected}
     />  */}
     {/* : null
     } */}
     <Route path="/">
        <Accordion items={items} />
      </Route>
     <Route path='/translate'>
       <Translate />
     </Route>
     <Route path='/list'>
       <Search />
     </Route>
     <Route path='/dropdown'>
       <Dropdown
       options={options}
       selected ={selected}
       onSelectChange = {setSelected} />
     </Route>
     
     {/* <Accordion /> */}
    </div>
  );
}

export default App;
