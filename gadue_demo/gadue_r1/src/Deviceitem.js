import React, {Component } from 'react';
import PropTypes from 'prop-types';


//react 类Elint貌似限制必须大写开头。因为在JSX中，小写标签名称被认为是HTML标签
//子组件不允许干涉父组件行动
class Deviceitem extends Component {
    constructor(props){
        super(props)
        this.handleClick=this.handleClick.bind(this)
    }


    // //组件第一次存在于DOM中，不会触发这个事件，再次修改props后，才会触发这个函数。
    // UNSAFE_componentWillReceiveProps(){
    //     console.log("prop received.")
    // }
    // //组件将要被删除时
    // componentWillUnmount(){
    //     console.log("component will unmount")
    // }
    
    //组件性能优化，对比是否需要优化
    shouldComponentUpdate(nextProps){ //还有一个参数nextState用于对比数据
        if(nextProps.content!==this.props.content){
            return true;
        }else{
            return false;
        }
        
    }
    render() { 
        console.log("child render")
        return ( 
        <li onClick={this.handleClick} >{this.props.army} get {this.props.content}</li>
         )
    }
    handleClick(){
        this.props.deleteItem(this.props.index)
    }
}
Deviceitem.defaultProps={
    content:'Nothing'
}
Deviceitem.propTypes={  //这里的propTypes 不能大写开头，虽然我们引入的时候是大写
    army:PropTypes.string.isRequired,
    content:PropTypes.string.isRequired,
    index:PropTypes.number.isRequired,
    deleteItem:PropTypes.func.isRequired
}

 
export default Deviceitem;