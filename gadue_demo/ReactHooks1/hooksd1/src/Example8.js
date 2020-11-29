import React, { useRef,useState ,useEffect} from 'react';

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