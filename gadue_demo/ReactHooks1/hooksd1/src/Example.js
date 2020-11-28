import React, { Component,useState,useEffect }from 'react';
import {BrowserRouter as Router ,Route,Link} from 'react-router-dom'

function Example(){
    const [count,setCount]=useState(0)  //数据解构
    useEffect(
        //主要解决这个函数式组件没有生命周期函数
        //一个函数代表了didmount 和didupdate ，他是一个异步函数，不会阻断视图更新，
        //此时如果要实时计算页面大小并更新css效果，就不能用它
        ()=>{
            console.log(`user effect ${count}`)
            return ()=>{//解绑函数 
                console.log("======")
            }
        },[count]
    )
    return (
            <div>
                <p>click here {count} times.</p>
                <button onClick={()=>{
                    setCount(count+1)
                }}>
                    click me.
                </button>
                <Router>
                    <ul>
                        <li><Link  to="/">Home</Link></li>
                        <li><Link to="/list">list</Link></li>
                    </ul>
                    <Route path="/" exact component={Index}></Route>
                    <Route path="/list" component={List}></Route>
                </Router>
            </div>
         );       
    

}

function Index(){
    useEffect(
        ()=>{
            console.log('userEffect now ...Index') //加载时执行
            return ()=>{//解绑时执行
                console.log("Bye now ,index")
            }
        },[] //userEffect传入的第二个参数是数组，使用一个数组指定副效应函数的依赖项，只有依赖项发生变化，才会重新渲染，目前为空表示销毁时才会执行 return绑定的函数
    )
    return (<h2>Home page</h2>)
}

function List(){
    useEffect(
        ()=>{
            console.log('userEffect now ...list')
        }
    )
    return (<h2>List Page</h2>)
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