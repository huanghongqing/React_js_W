import React from 'react'
import {Avatar,Divider} from 'antd'
import '../styles/Author.css'
import {GithubOutlined,QqOutlined,WechatOutlined} from '@ant-design/icons'


const Author=(props)=>{
    return (
        <div className="author-div">
            <div>
                <Avatar size="100" src="/avator.jpg" />
            </div>
            <div className="author_introduction">
                {props.children}
                <Divider>Social Media Link</Divider>
                <Avatar size="28" icon={<GithubOutlined />} className="account" />
                <Avatar size="28" icon={<QqOutlined />} className="account" />
                <Avatar size="28" icon={<WechatOutlined />} className="account" />
            </div>
        </div>
    )
}
export default Author