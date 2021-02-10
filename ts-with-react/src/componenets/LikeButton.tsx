import React,{ Fragment, useState,useEffect,useRef,useContext  } from 'react'
import {ThemeContext} from '../App'

const LikeButton:React.FC = ()=>{
    const [like,setLike]=useState(0)
    const [on,setOn]=useState(true)
    const likeRef=useRef(0) //所有的
    const didMountRef=useRef(false)
    const domRef=useRef<HTMLInputElement>(null) //用来访问Dom节点，获取节点的最新值
    const theme=useContext(ThemeContext) 
    console.log(theme)
    const style={
        color:theme.color,
        background:theme.background,
    }
    useEffect(
        ()=>{
            // if(didMountRef.current){
            //     console.log("components updated.")
            // }else{
            //     didMountRef.current=true;
            // }
            if(domRef && domRef.current){
                domRef.current.focus()
                domRef.current.value='link hi'
            }
        }
    )
    useEffect(
        ()=>{
            console.log('effect executed.')
            document.title=`click ${like} times` 
        },
        [like,on]
    )
    function handleAlertClick(){
        setTimeout(()=>{//这里形成了一个闭包
            alert('you clicked.'+likeRef.current) //用useRef的likeRef.current，每次都能取到最新的值，不是闭包时封装进去的值,修改ref值不会引发重新渲染
        },3000)
    }
    return (
        <Fragment>
            <button style={style} onClick={()=>{setLike(like+1);likeRef.current=like;}}>
                {like} 👍️
            </button>
            <button onClick={handleAlertClick}>Alert.</button>
            <input type='text' ref={domRef} />
        </Fragment>
    )
}
export default LikeButton