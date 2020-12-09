import {useState,useMemo} from 'react'

const useNumber=(initalValue=0)=>{
    let [value,setValue]=useState(initalValue)
    let api=useMemo(
        ()=>(
            inc:()=>setValue(value=>value+1),
            dec:()=>setValue(value=>value-1)
        )
        ,
        [setValue]
    )
}