import React,{ useEffect,useState } from 'react'

const MouseTracker2:React.FC=()=>{
    const [positions,setPositions]=useState({x:0,y:0})
    useEffect(
        ()=>{
            console.log('Effect executed.')
            const updateMouse=(e:MouseEvent)=>{
                console.log('inner')
                setPositions({x:e.clientX,y:e.clientY})
            }
            document.addEventListener('click',updateMouse)
            //return ()=>{document.removeEventListener('click',updateMouse)}//返回一个用于清理的函数，react执行当前effect 对上一次effect进行清除,是在本次effect执行前执行这个清除。
        },
        [] //空数组，表示effect不依赖任意值,只执行一次

    )
    return (
        <p>
            
        </p>
    )
} 
export default MouseTracker2