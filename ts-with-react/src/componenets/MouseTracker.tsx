import React, { useEffect,useState } from 'react'

const MouseTracker:React.FC=()=>{
     const [positions,setPositions]=useState({x:0,y:0})
     useEffect(
         ()=>{
             const updateMouse=(e:MouseEvent)=>{
                 console.log('inner')
                 setPositions({x:e.clientX,y:e.clientY})
             }
             document.addEventListener('click',updateMouse)
             return ()=>{document.removeEventListener('click',updateMouse)}//返回一个用于清理的函数，react执行当前effect 对上一次effect进行清除,是在本次effect执行前执行这个清除。
         }
     )
     return (
         <p>
             X:{positions.x},Y:{positions.y}
         </p>
     )
} 
export default MouseTracker 