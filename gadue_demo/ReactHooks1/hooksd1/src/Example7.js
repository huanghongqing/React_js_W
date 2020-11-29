import React, { useState,useMemo } from 'react';

function Example7(){
    const [tank,setTank]=useState('T-72B3')
    const [apc,setApc]=useState('BMP-2')
    return (
        <>
            <button 
                onClick={
                   ()=>{
                       setTank(new Date().getTime())
                   } 
                }
            >
                tank
            </button>
            <button
                onClick={
                    ()=>{
                        setApc(new Date().getTime()+'....')
                    } 
                 }            
            >
                Apc
            </button>
                <ChildComponent name={tank}>{apc}</ChildComponent>
        </>
    )
}

function ChildComponent({name,children}){
    function changetank(name1){
        console.log('tank arrived.')
        return name1+'___';
    }
    const tank1=useMemo(
        ()=>changetank(name),[name] //在name状态发生变化时，再执行第一个参数传入的方法
    )    
    return (
        <>
            <div>{tank1}</div>
            <div>{children}</div>
        </>
    )
}

export default Example7