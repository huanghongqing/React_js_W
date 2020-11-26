import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM,GET_LIST,GET_MY_LIST} from './actionType'
import axios from 'axios'


//x => ({ foo: x }) 箭头函数这样写，表示返回一个对象
export const changeInputAction=(value)=>({
    type:CHANGE_INPUT,
    value //ES6允许在对象之中，直接写变量。这时，属性名为变量名, 属性值为变量的值
})

export const addItemAction=()=>({
    type:ADD_ITEM
})

export const deleteItemAction=(index)=>({
    type:DELETE_ITEM,
    index
})
export const getListAction= (data)=>({
    type:GET_LIST,
    data
})
export const getTodoList=()=>{
    return (dispatch)=>{
        axios.get('https://www.easy-mock.com/mock/5d25ef5ac61e164478f7d905/device/list')
            .then(
                (res)=>{
                    const data=res.data
                    const action=getListAction(data)
                    dispatch(action)
                }
            )       
    }
}
export const getMyListAction=()=>({
    type:GET_MY_LIST
})