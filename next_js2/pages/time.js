import React,{useState} from 'react'
import dynamic from 'next/dynamic'

//import moment from 'moment'

//如果很多页面都引用moment，那么打包时会打包很多地方，很多页面,  打包就会很大，加载也慢，用按需lazy loading
//在运行期，有需要的时候才加载进来，这是一个很多网站都没有注意到的优化技巧。


//自定义组件的异步引入
const comp2=dynamic(import('../components/comp2'))
function Time(){
    const [nowTime,setTime]=useState(Date.now())
    const changeTime=async ()=>{
        const moment =await import('moment')
        setTime(moment.default(Date.now()).format())
    }
    return (
        <>
            <div>show time :{nowTime}</div>
            <comp></comp>
            <button onClick={changeTime}>change time</button>
        </>
    )
}

export default Time