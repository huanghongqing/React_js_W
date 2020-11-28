import React,{createContext,useReducer} from 'react'

export const ColorContext = createContext({})
export const UPDATE_COLOR="UPDATE_COLOR"
const reducer=(state,action)=>{
    switch(action.type){
        case UPDATE_COLOR:
            return action.color
        default:
            return state
    }
}
export const Color= props=>{
    const [color,dispatch]=useReducer(reducer,'blue')
    //把数据传给children子组件。数据是一个js对象（用花括号包起来），外面是jsx的字面量，也是花括号包起来，因此是双花括号。
    return (
            <ColorContext.Provider value={{color,dispatch}}>
                {props.children}
            </ColorContext.Provider>

    )
}