import logo from './logo.svg';
import './App.css';
import Add from './component/Add/Add';
import Sub from './component/Sub/Sub';
import { useState } from 'react';
function App() {
  const[inputValue,setinputValue]=useState(0)
  const[inputValue1,setinputValue1]=useState(0);
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
         <div>
      <input 
       value={inputValue1}
       onChange={(e)=> {
         setinputValue1(e.target.value)
       //console.logo('inputvalue',inputValue)
           }
    }
     type="number"
       placeholder='enter number' >

       </input>
       
         </div>
        <p>test p tag  {inputValue} {inputValue1}</p>

        <button onClick={printvalue}>print</button>
        {inputValue1 && inputValue? <Add a={inputValue1} b="4"></Add> :''}
      <Sub a={inputValue} b='1'/>

      
       
      
    </div>
  );
}

export default App;
