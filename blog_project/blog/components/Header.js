//antdesign 栅格化系统，横向24栏，相当于屏幕分成了24列
//参考info :https://ant.design/components/grid-cn/
import React from 'react'
import styles from '../styles/Header.module.css'
import {Row,Col,Menu} from 'antd'
import {HomeOutlined,VideoCameraAddOutlined,CoffeeOutlined} from '@ant-design/icons'

const Header = ()=>(
    <div className="header">
        <Row type="flex" justify="center">
            <Col xs={24} sm={24} md={10} lg={10} xl={10}>
                <span className="header-logo">Akin </span>
                <span className="header-txt">代码人生,江湖沉浮,一望无际，来去如风.</span>
            </Col>
            <Col xs={0} sm={0} md={14} lg={8} xl={6}>
                {/* xs,sm,md,lg,xl 表示占的列数 */}
                <Menu mode="horizontal">
                    <Menu.Item key="home">
                        <HomeOutlined />Home
                    </Menu.Item>
                    <Menu.Item key="Video">
                        <VideoCameraAddOutlined />video
                    </Menu.Item>
                    <Menu.Item key="life">
                        <CoffeeOutlined />Life
                    </Menu.Item>                                        
                </Menu>
            </Col>
        </Row>
    </div>
)

export default Header