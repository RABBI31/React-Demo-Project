
import { Search } from './components/Search';
import Dropdown from './components/Dropdown';
import { useState } from 'react';


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
     {/* <Search /> */}
     <button onClick={()=> setShowDrop(!showDrop)}>
         Open/ Close Dropdown
     </button>
     { showDrop ?
     <Dropdown
      options={options}
      selected ={selected}
      onSelectChange = {setSelected}
     /> : null
     }
    </div>
  );
}

export default App;
