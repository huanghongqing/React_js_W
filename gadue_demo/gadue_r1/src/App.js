//禁止了常量条件的eslint检查
/* eslint-disable no-constant-condition */

import React,{Component} from 'react'  
// 相当于 
// import React from 'react'
// const Component = React.Component
class App extends Component{
    render(){
        return(
            //jsx
            <ul className="my-list">
                <li>heli</li>
                <li>Recon</li>
                <li>Gau-8</li>
                <li>{true?'go':'ES6'}</li>
            </ul>
        )
    }
}

export default App;