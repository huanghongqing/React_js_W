//useReducer 配合 useContext 达到redux效果
import React, { useReducer } from 'react';

function ReducerD(){
    const [count,dispatch]=useReducer(
        (state,action)=>{
            switch(action){
                case 'add':
                    return state+1
                case 'sub':
                    return state-1
                default:
                    return state
            }
        },
        0
    )

    return(
        <div>
            <h2>现在的风速是{count}</h2>
            <button onClick={
                ()=>{
                    dispatch("add")
                }
            }>
                increment
            </button>
            <button onClick={
                ()=>{
                    dispatch("sub")
                }
            }
            >
                decrement
            </button>
        </div>
    )
}

export default ReducerD