import React,{ useState } from 'react';
import logo from './logo.svg';
import './App.css';
import useURLoader from './componenets/useURLoader'
interface IShowResult{
  message:string,
  status:string,
}
function App() {
  const [ show,setShow]=useState(true)
  const [data,loading] =useURLoader('https://dog.ceo/api/breeds/image/random',[show])
  const dogResult=data as IShowResult
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <button onClick={()=>{setShow(!show)}}>Toggle Tracker </button>
        </p>
        <div>
        { loading ? <p>loading dog image.</p> : <img src={dogResult && dogResult.message}></img>}
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
