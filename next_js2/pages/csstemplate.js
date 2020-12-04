import React,{ useState } from "react"

function Csstemplate(){
    const [color,setColor]=useState("blue")
    const changeColor=()=>{
        setColor(color=="blue"?"red":"blue")
    }
    return(
        <>
            <div>csstemplate</div>
            <div className="nt">csstemplate</div>
            <button onClick={changeColor}>switch color</button>
            <style jsx>
                {`
                
                    div {color:${color};}
                    .nt {color:red;}
                `}
            </style>
        </>
    )
}

export default Csstemplate