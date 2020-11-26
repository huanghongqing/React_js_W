import {put, takeEvery} from 'redux-saga/effects'
import { GET_MY_LIST } from './actionType'
import axios from 'axios'
import { act } from '@testing-library/react'
import {getListAction} from './actionCreator'

//generator函数 generator 函数是 ES6 提供的一种异步编程解决方案,yield类似暂停，generator实际上上包含多个状态的状态机
function* mySagas(){
    yield takeEvery(GET_MY_LIST,getlist)
}

function* getlist(){
    // axios.get('https://www.easy-mock.com/mock/5d25ef5ac61e164478f7d905/device/list')
    // .then(
    //     (res)=>{
    //         const data=res.data
    //         const action=getListAction(data)
    //         dispatch(action)
    //     }
    // )    
    const res=yield axios.get('https://www.easy-mock.com/mock/5d25ef5ac61e164478f7d905/device/list')
    const action=getListAction(res.data)
    yield put(action)
}
export default mySagas