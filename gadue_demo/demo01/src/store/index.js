import {createStore,applyMiddleware,compose} from 'redux'
import reducer from './reducer'
import createSagaMiddleware from 'redux-saga'
import mySagas from './sagas'

const sagaMiddleware =createSagaMiddleware();
//浏览器如果有redux开发插件，就调用这个插件方法,用增强函数,增强函数注意下划线的数量要对  https://github.com/zalmoxisus/redux-devtools-extension#usage
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose
//相当于链式调用，因为createStore只能接受两个参数，现在这样可以调用第一个函数后再调用第二个函数
const enhancer=composeEnhancers(applyMiddleware(sagaMiddleware))
const store= createStore(
    reducer,
    enhancer
)
sagaMiddleware.run(mySagas)

export default store