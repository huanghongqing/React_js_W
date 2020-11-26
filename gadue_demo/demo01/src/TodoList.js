import React, { Component } from 'react';
import store from './store'
import {changeInputAction,addItemAction,deleteItemAction,getMyListAction} from './store/actionCreator'
import TodoListUI from './TodoListUI'



class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState()
        /*bind() 方法创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind()
        的第一个参数，而其余参数将作为新函数的参数，供调用时使用*/
        this.changeInputValue=this.changeInputValue.bind(this)
        this.storeChange=this.storeChange.bind(this)
        this.clickBtn=this.clickBtn.bind(this)
        this.deleteItem=this.deleteItem.bind(this)
        //订阅数据变化后回调函数,订阅模式
        store.subscribe(this.storeChange)
    }
    render() { 
        return ( 
            <TodoListUI
              inputValue={this.state.inputValue}
              changeInputValue={this.changeInputValue}
              clickBtn={this.clickBtn}
              list={this.state.list}
              deleteItem={this.deleteItem}
            />
         );
    }
    //生命周期函数,在组件将要加入虚拟DOM时
    componentDidMount(){
        const action=getMyListAction()
        store.dispatch(action)
        //console.log(action)
        // axios.get('https://www.easy-mock.com/mock/5d25ef5ac61e164478f7d905/device/list')
        //     .then(
        //         (res)=>{
        //             const data=res.data
        //             const action=getListAction(data)
        //             store.dispatch(action)
        //         }
        //     )
    }

    changeInputValue(e){
        // const action ={
        //   type:CHANGE_INPUT,
        //   value:e.target.value
        // }
        //console.log(e.target.value)
        const action=changeInputAction(e.target.value)
        store.dispatch(action)
    }
    storeChange(){
      //redux的store的state变化后更新当前页面
      this.setState(store.getState())
    }
    clickBtn(){
        // const action={
        //   type:ADD_ITEM
        // }
        const action=addItemAction()
        store.dispatch(action)
    }
    deleteItem(index){
        // const action={
        //   type:DELETE_ITEM,
        //   index:index
        // }
        console.log(index)
        const action=deleteItemAction(index)
        store.dispatch(action)
    }
}
 
export default TodoList;