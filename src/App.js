import logo from './logo.svg';
import './App.css';
import Add from './component/Add/Add';
import Sub from './component/Sub/Sub';
function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Add a='2' b='3'></Add>
      <Sub a='4' b='3'/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1>hellow achal kharabe</h1>
          <h2>these is my 3rd commit</h2>
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
