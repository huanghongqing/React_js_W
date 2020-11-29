import React, { useRef,useState ,useEffect} from 'react';
// React 是 mvvm 架构，数据（model）变了，视图（view）也会自动刷新，无需操作 Dom。
// 但是有些功能不得不操作 DOM，比较常见的有：设置 input 焦点问题，必须先获取 input 的 dom 对象，然后调用 focus() 方法获取焦点。
// React 为开发者提供获取 dom 的对应方法。类组件中使用 React.createRef() 获取 dom 对象  
// 在函数式组件中无法使用 React.createRef() 特性，取而代之的是 React.useRef() 钩子：
//类组件中使用 React.createRef() 获取 dom 对象：
//只有类组件才拥有实例对象，函数式组件没有实例对象。
//在父组件中需要调用子组件的方法，首先想到的就是在父组件中需要拿到子组件实例对象，进而调用方法,也必须用useRef,但是子组件必须要是类组件

function Example8(){
    const inputEl=useRef(null)
    const onButtonClick=()=>{
        inputEl.current.value="Move forward."
        console.log(inputEl)
    }

    const[text,setText]=useState("Keep moving!")
    const textRef=useRef()
    useEffect(
        ()=>{
            textRef.current=text;
            console.log(textRef.current)
        }
    )
    return(
        <>
            <input ref={inputEl} type="text"></input>
            <button onClick={onButtonClick}>show text</button>
            <br></br>
            <br></br>
            <input value={text} onChange={
                (e)=>{
                    setText(e.target.value)
                }
            } />
        </>
    )
}
export default Example8