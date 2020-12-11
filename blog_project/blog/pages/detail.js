import React from 'react'
import Head from 'next/head'
import '../styles/detail.css'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import {Row,Col,Breadcrumb} from 'antd'
import {CalendarOutlined,FolderOutlined,FireFilled} from '@ant-design/icons'

const Detailed=()=>{
  return (
    <div className="cotainer">
      <Head>
        <title>Akin BLOG-BLOG Detail</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <Row  className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
            <div>
                  <div className="bread-div">
                    <Breadcrumb>
                      <Breadcrumb.Item><a href="/">Home</a></Breadcrumb.Item>
                      <Breadcrumb.Item><a href="/Code">Code</a></Breadcrumb.Item>
                      <Breadcrumb.Item>BLOG Detail</Breadcrumb.Item>
                    </Breadcrumb>
                  </div>
                  <div className="detailed-title">
                    React Hook 自定义useMethods代码解析(一)
                  </div>
                  <div className="list-icon center">
                        <span><CalendarOutlined />2020-12-10  </span>
                        <span><FolderOutlined />类别  </span>
                        <span><FireFilled />1000人  </span>
                  </div>
                  <div className="detailed-content">
                      自定义的react hook的一些典型写法的解析。
                  </div>
            </div>

        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
            右侧
        </Col>        
      </Row>
      <Footer />
    </div>
  )
}
export default Detailed
