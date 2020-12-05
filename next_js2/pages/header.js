import React, { Fragment } from 'react'
import MyHeader from '../components/myheader'
import {Button} from 'antd'
function Header(){
    return(
        <>
            {/* <head>
                <title>Device list site</title>
                <meta charSet="utf-8"></meta>
            </head> */}
            {/* <MyHeader></MyHeader> */}
            <div className="header">Header.js</div>
            <Button >Use Button from AntDesign</Button>
        </>
    )
}

export default Header