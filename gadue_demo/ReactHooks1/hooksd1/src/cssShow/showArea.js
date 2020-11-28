import React,{useContext} from 'react';
import {ColorContext} from './color'

function ShowArea(){
    //css属性 放在jsx里作为字面量要用{}包起来作为一个js对象，加上字面量的{}就成了两层大括号 
    const {color}=useContext(ColorContext)  
    return (
        <div style={{color:color}}>
            Css effect change color.
        </div>
    )
}

export default ShowArea