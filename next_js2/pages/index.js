import React from 'react';
import Link from 'next/link'
import Router from 'next/router'
const Home=()=>{

    // Router.events.on('routeChangeStart',(...args)=>{
    //     console.log("routhe change start.",...args)
    // })
    // Router.events.on('routeChangeComplete',(...args)=>{
    //     console.log("routhe change complete.",...args)
    // })

    // Router.events.on('beforeHistoryChange',(...args)=>{
    //     console.log("before History Change.",...args)
    // })

    // Router.events.on('hashChangeStart',(...args)=>{
    //     console.log("hash Change Start.",...args)  //hash 连接<Link href="#tag"><a>tag</a></Link>  ，scroll to某个标签
    //     // #的含义，hash连接，例如 http://example.com/index.html#user;
    //     // 就代表网页index.html的print位置。浏览器读取这个URL后，会自动将print位置滚动至可视区域。
    //     // 为网页位置指定标识符，有两个方法。一是使用锚点，比如，二是使用id属性，html里针对#值得变化，增加了onhashchange事件
    // })
    function goB(){
        //Router.push("/Bpage")
        //Router.push("/Device?name='T-80U'")
        Router.push({
            pathname:'/Device',
            query:{name:'T-80U',numbers:'2'}
        })
    }
    return (
        <>
            <div>Home page.</div>
            <div><Link href="/Device?name=T-72B3"><a>Device .</a></Link></div>
            <div><Link href="/Apage"><a>A page .</a></Link></div>
            <div><Link href="/Bpage"><a>B page .</a></Link></div>
            <div>
                <button 
                    onClick={
                        ()=>{
                            Router.push("/Apage")
                        }
                    }
                
                >
                    go A
                </button>
            </div>
            <div>
                <button onClick={goB}>
                    device
                </button>
            </div>

        </>
    )
}

export default Home