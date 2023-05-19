import logo from './logo.svg';
import './App.css';
import Add from './component/Add/Add';
import Sub from './component/Sub/Sub';
import { useState } from 'react';
function App() {
  const[inputValue,setinputValue]=useState(0)
  
 const printvalue=()=>
 {
  console.log('inputvalue',inputValue)
 }
 
  return (
   
    <div className="App">

      <div>
      <input 
       value={inputValue}
       onChange={(e)=> {
         setinputValue(e.target.value)
       //console.logo('inputvalue',inputValue)
           }
    } type="number"
       placeholder='enter number'>

       </input>
       
        
      
          
        </div>
        <p>test p tag {inputValue}</p>
        <button onClick={printvalue}>print</button>
        <Add a={inputValue} b="4"></Add>
      <Sub a={inputValue} b='3'/>

      
       
      
    </div>
  );
}

export default App;
