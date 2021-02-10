import React,{ useState } from 'react';
import logo from './logo.svg';
import './App.css';
import useURLoader from './componenets/useURLoader'
import LikeButton from './componenets/LikeButton';
interface IShowResult{
  message:string,
  status:string,
}
interface IThemeProps {
  [key:string]:{color:string;background:string}  //[key:string]=>索引签名， 可以用IThemeProps[key]={...}这样的格式
}
const themes:IThemeProps ={
  'light':{color:'#000',background:'#eee'},
  'dark':{color:'#fff',background:'#222'},
}

export const ThemeContext=React.createContext(themes.light) //记得导出一下
function App() {
  const [ show,setShow]=useState(true)
  const [data,loading] =useURLoader('https://dog.ceo/api/breeds/image/random',[show])
  const dogResult=data as IShowResult
  return (
  <div className="App">
    <ThemeContext.Provider value={themes.dark}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <button onClick={()=>{setShow(!show)}}>Toggle Tracker </button>
        </p>
        <LikeButton />
        {/* <div>
        { loading ? <p>loading dog image.</p> : <img src={dogResult && dogResult.message}></img>}
        </div> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </ThemeContext.Provider>
  </div>
  );
}

export default App;
