import React, { Component,useState }from 'react';


function Example(){
    const [count,setCount]=useState(0)
    return (
            <div>
                <p>click here {count} times.</p>
                <button onClick={()=>{
                    setCount(count+1)
                }}>
                    click me.
                </button>
            </div>
         );       
    

}

// class Example extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { count:0 }
//         this.addCount=this.addCount.bind(this)
//     }
//     render() { 
//         return ( 
//             <div>
//                 <p>click here {this.state.count} times.</p>
//                 <button onClick={this.addCount}>click me.</button>
//             </div>
//          );
//     }
//     addCount(){
//         this.setState({
//             count:this.state.count+1
//         })
//     }
// }
 
export default Example;