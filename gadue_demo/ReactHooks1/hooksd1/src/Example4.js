import React, { Component,useState,createContext,useContext }from 'react';
import {BrowserRouter as Router ,Route,Link} from 'react-router-dom'

const CountContext=createContext()

function Example(){
    const [count,setCount]=useState(0)  //数据解构

    return (
            <div>
                <p>click here {count} times.</p>
                <button onClick={()=>{
                    setCount(count+1)
                }}>
                    click me.
                </button>
                {/* 父组件传值 */}
                <CountContext.Provider value={count}>  
                    <Counter></Counter>
                </CountContext.Provider>
            </div>
         );       
    

}

function Counter(){
    let count= useContext(CountContext)  //子组件接收到值。
    return (<h2>{count}</h2>)
}
 
export default Example;