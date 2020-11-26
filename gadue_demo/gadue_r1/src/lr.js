/*eslint-disable no-unused-vars*/ 
import React, { Component, Fragment } from 'react'
import './style.css'
import Deviceitem from './Deviceitem'
import axios from 'axios';
import Boss from './Boss'
import {CSSTransition, TransitionGroup} from 'react-transition-group'

class Lr extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: []
        };
        //在构造函数里给成员函数显式绑定this
        this.inputChange=this.inputChange.bind(this)
        this.addList=this.addList.bind(this)
        this.deleteItem=this.deleteItem.bind(this)
    }
    // UNSAFE_componentWillMount(){
    //     console.log("will mount")
    // }
    componentDidMount(){
        //组件已经被dom 加载，此时是远程访问数据的时机
        //不要再render里写，这样保证远程数据访问频率不会过高
        axios.post('https://www.easy-mock.com/mock/5d25ef5ac61e164478f7d905/device/list').then(res=>{
            console.log('axios 获取数据成功')
            console.log(JSON.stringify(res))
            this.setState({
                list:res.data.data
            })
        }).catch((error)=>{
            console.log('axios 获取信息失败:'+JSON.stringify(error))
        })
    }
    // shouldComponentUpdate(){
    //     console.log("update component")
    //     return true
    // }
    // UNSAFE_componentWillUpdate(){
    //     console.log("will update")
    // }
    // componentDidUpdate(){
    //     console.log("updated")
    // }
    // UNSAFE_componentWillReceiveProps(){
    // }
    // componentWillUnmount(){

    // }
    render() {
        // console.log("render")
        return (
            <Fragment>
                <div>
                    {/* jsx注释格式 for 在jsx被改成htmlFor，class被改为className*/}
                    <label htmlFor="devicename">装备名称:</label>
                    <input id="devicename"className='input' value={this.state.inputValue} onChange={this.inputChange} ref={(input)=>{this.input=input}} />
                    <button onClick={this.addList}>Add Unit</button>
                </div>
                <ul ref={(ul)=>{this.ul=ul}}>
                    <TransitionGroup>
                        {
                            this.state.list.map((item,index)=>{
                                // 记得使用bind绑定传递参数同时记得,使用dangerouslySetInnerHTML来使得加入的内容可以解析为html
                                return (        //如果有key属性，必须加在最外层。。。如果有div，则key应该在div上。react 是单向数据流，父组件的数据不能被子组件改，除非传递函数过去
                                            <CSSTransition
                                                timeout={2000}
                                                classNames="boss-text"
                                                unmountOnExit
                                                key={index+item}
                                                appear={true}
                                            >
                                                    <Deviceitem key={index+item} content={item}  index={index} deleteItem={this.deleteItem} army='Red army'/>
                                            </CSSTransition>
                                        )
                            })
                        }
                    </TransitionGroup>
                </ul>
                <Boss/>
            </Fragment>
        );
    }
    inputChange(){
        //决定this的指向，是需要看它被调用的位置，而不是它被写入的位置,
        //为了防止出错，前面在jsx里用bind显式绑定了这个函数的this
        this.setState({
            inputValue:this.input.value//e.target.value
        });

    }
    addList(){
        this.setState({
            //“...”为扩展运算符
            list:[...this.state.list,this.state.inputValue],
            inputValue:''
        },()=>{//setState 是异步方法，这是完成后的回调函数
            //console.log(this.ul.querySelectorAll('li').length)
        })
        
    }
    deleteItem(index){
        //用临时变量，不允许直接修改state里的数据，这是一个需要严重注意的点
        let templist=this.state.list;
        templist.splice(index,1)
        this.setState({
            list:templist
        })
    }
}

export default Lr;


// npm install Axios  //安装到项目下，但是不写入任何依赖,尽量不要用
// npm install -g axios //安装到全局，看npmconfig 的prefix目录里。
// npm install -save axios //安装到项目下的node_modules ,添加依赖到package.json里的生产环境依赖dependencies。
// npm install -save-dev axios //安装到项目下的node_modules,添加依赖到package.json里的dev 开发依赖中。