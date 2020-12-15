import React from 'react'
import Head from 'next/head'
import '../styles/detail.css'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import {Row,Col,Breadcrumb,Affix} from 'antd'
import {CalendarOutlined,FolderOutlined,FireFilled} from '@ant-design/icons'
// import ReactMarkdown from 'react-markdown'
// import gfm from 'remark-gfm'
 import MarkNav from 'markdown-navbar'
 import 'markdown-navbar/dist/navbar.css'
import axios from 'axios'
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'

const Detailed=(props)=>{
  const renderer=new marked.Renderer()
  marked.setOptions({
    renderer:renderer,
    gfm:true, //github 风格？
    //容错
    pedantic: false,
    //是否忽略html标签
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    highlight: function(code){
      return hljs.highlightAuto(code).value
    }
  })
  let html=marked(props.content)
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
                  <div className="detailed-content"
                    dangerouslySetInnerHTML={{__html:html}}
                  >
                     {/* <ReactMarkdown 
                        children={markdown}                      
                        // 没有gfm这个插件，不能支持，删除线，表格，和任务列表
                        plugins={[gfm]} 
                     /> */}
                  </div>
            </div>

        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
            <Author />
            <Advert />
            <Affix 
              // 滚动到顶部以后固定在屏幕上的效果
              offsetTop={5}
            >
                <div className="nav-container comm-box">
                  <div className="nav-title">文章目录</div>
                  <MarkNav 
                    className="article-menu"
                    source={html}
                    ordered={false}
                  />
                </div>
            </Affix>
        </Col>        
      </Row>
      <Footer />
    </div>
  )
}
Detailed.getInitialProps = async (context)=>{ //这里的console log会输出到node.js 的命令行窗体里，而不是浏览器里。
    let id=context.query.id
    const promise =new Promise((resolve,reject)=>{
        axios('http://localhost:7001/default/getArticleById/'+id).then(//这里直接用axios的then成功方法替代了promise的成功回调
            (res)=>{
                console.log('detail远程数据结果：',res.data.data[0])
                resolve(res.data.data[0])  
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
        (data)=>{
            console.log("data="+data)
            return data;
        }
    ).catch(//promise的失败回调，这里也必须return一个值，不然会报undefined的错。
        (error)=>{
            console.log("error from promise ="+error)
            return ({error})
        }
    )
    return await promise
}

export default Detailed
