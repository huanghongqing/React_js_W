/* eslint-disable react/prop-types */
import React from 'react'
import { withRouter} from 'next/router'
import Link from 'next/link'
import axios from 'axios'

const Device = ({router,list})=>{
    return (
        <>
            <div>{router.query.name},来为我们服务了 .<br/>{list}</div>
            <Link href="/"><a>返回首页</a></Link>
        </>
    )
}

Device.getInitialProps = async ()=>{
    const promise =new Promise((resolve,reject)=>{
            axios('https://www.easy-mock.com/mock/5d25ef5ac61e164478f7d905/device/list').then(//这里直接用axios的then成功方法替代了promise的成功回调
                (res)=>{
                    console.log('远程数据结果：',res)
                    resolve(res.data)  
                    //resolve表示promis 已经定型，成功就把res.data 赋值给promise对象。因此相当于成功后的返回值，
                    //而这个静态函数貌似是getInitialProps初始化props，因此就会让list获得这个值。失败用reject
                }
            ).catch(
                (error)=>{
                    console.log("error="+error)
                    reject(error)
                }
            )
    }).then(//resolve后传递过来的参数，在promise的成功回调里处理。
        (list)=>{
            console.log("list="+list)
            return list;
        }
    ).catch(//promise的失败回调，这里也必须return一个值，不然会报undefined的错。
        (error)=>{
            console.log("error from promise ="+error)
            return ({error})
        }
    )
    return await promise
}

export default withRouter(Device)