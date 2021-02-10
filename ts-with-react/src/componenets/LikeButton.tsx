import React,{ Fragment, useState,useEffect } from 'react'

const LikeButton:React.FC = ()=>{
    const [like,setLike]=useState(0)
    const [on,setOn]=useState(true)
    useEffect(
        ()=>{
            console.log('effect executed.')
            document.title=`click ${like} times` 
        },
        [like,on]
    )
    return (
        <Fragment>
            <button onClick={()=>{setLike(like+1)}}>
                {like} 👍️
            </button>
            <button onClick={()=>{setOn(!on)}}>
                {on?'ON':'OFF'}
            </button>
        </Fragment>
    )
}
export default LikeButton