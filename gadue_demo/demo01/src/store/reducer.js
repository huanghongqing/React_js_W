/* eslint-disable import/no-anonymous-default-export */
/*reducer 必须是纯函数--相同输入总是会返回相同的输出。不产生副作用。不依赖于外部状态。
这样就不能调用类似当前日期时间之类的调用，否则就会与环境关联，也不能调用类似ajax请求之类的，依赖到后台。
纯函数不产生副作用，就是说它不能改变任何外部状态，例如购物车之类的，所以引用类型传递进来，要先copy一份再修改，
因此购物车如果被传递进来，应该new一个const购物车来从copy它。
*/
import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM,GET_LIST} from './actionType'

const defaultState={
    inputValue:'T-72AV',
    list:[]
}
export default (state=defaultState,action)=>{
    //reducer里只能接受state，不能改变state
    if(action.type===CHANGE_INPUT){
        let newState= JSON.parse(JSON.stringify(state))
        newState.inputValue=action.value
        return newState
    }
    if(action.type===ADD_ITEM){
        let newState=JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue=''
        return newState
    }
    if(action.type===DELETE_ITEM){
        let newState=JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index,1)
        return newState
    }
    if(action.type===GET_LIST){
        let newState=JSON.parse(JSON.stringify(state))     
        newState.list=action.data.list
        return newState   
    }
    return state
}