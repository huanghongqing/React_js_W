import React from 'react'
import Head from 'next/head'
import '../styles/detail.css'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import {Row,Col,Breadcrumb,Affix} from 'antd'
import {CalendarOutlined,FolderOutlined,FireFilled} from '@ant-design/icons'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import MarkNav from 'markdown-navbar'
import 'markdown-navbar/dist/navbar.css'

const Detailed=()=>{
  
let markdown=`
# 1
## 1.1 aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
这篇快速上手指南会教你如何将TypeScript与React结合起来使用。 在最后，你将学到：

使用TypeScript和React创建工程
使用TSLint进行代码检查
使用Jest和Enzyme进行测试，以及
使用Redux管理状态
我们会使用create-react-app工具快速搭建工程环境。

这里假设你已经在使用Node.js和npm。 并且已经了解了React的基础知识。

这个命令会运行Jest，一个非常好用的测试工具，它会运行所有扩展名是.test.ts或.spec.ts的文件。 好比是npm run start命令，当检测到有改动的时候Jest会自动地运行。 如果喜欢的话，你还可以同时运行npm run start和npm run test，这样你就可以在预览的同时进行测试。

生成生产环境的构建版本
在使用npm run start运行工程的时候，我们并没有生成一个优化过的版本。 通常我们想给用户一个运行的尽可能快并在体积上尽可能小的代码。 像压缩这样的优化方法可以做到这一点，但是总是要耗费更多的时间。 我们把这样的构建版本称做“生产环境”版本（与开发版本相对）。

要执行生产环境的构建，可以运行如下命令：

npm run build







# 2
## 2.2 bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
// src/components/Hello.tsx

import * as React from 'react';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

function Hello({ name, enthusiasmLevel = 1 }: Props) {
  if (enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic. :D');
  }

  return (
    <div className="hello">
      <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </div>
    </div>
  );
}

export default Hello;

// helpers

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}

class Hello extends React.Component<Props, object> {
  render() {
    const { name, enthusiasmLevel = 1 } = this.props;

    if (enthusiasmLevel <= 0) {
      throw new Error('You could be a little more enthusiastic. :D');
    }

    return (
      <div className="hello">
        <div className="greeting">
          Hello {name + getExclamationMarks(enthusiasmLevel)}
        </div>
      </div>
    );
  }
}

# 3
## 3.3 cccccccccccccccccccccccccccccc
// src/components/Hello.test.tsx

import * as React from 'react';
import * as enzyme from 'enzyme';
import Hello from './Hello';

it('renders the correct text when no enthusiasm level is given', () => {
  const hello = enzyme.shallow(<Hello name='Daniel' />);
  expect(hello.find(".greeting").text()).toEqual('Hello Daniel!')
});

it('renders the correct text with an explicit enthusiasm of 1', () => {
  const hello = enzyme.shallow(<Hello name='Daniel' enthusiasmLevel={1}/>);
  expect(hello.find(".greeting").text()).toEqual('Hello Daniel!')
});

it('renders the correct text with an explicit enthusiasm level of 5', () => {
  const hello = enzyme.shallow(<Hello name='Daniel' enthusiasmLevel={5} />);
  expect(hello.find(".greeting").text()).toEqual('Hello Daniel!!!!!');
});

it('throws when the enthusiasm level is 0', () => {
  expect(() => {
    enzyme.shallow(<Hello name='Daniel' enthusiasmLevel={0} />);
  }).toThrow();
});

it('throws when the enthusiasm level is negative', () => {
  expect(() => {
    enzyme.shallow(<Hello name='Daniel' enthusiasmLevel={-1} />);
  }).toThrow();
});


`
// '#  \n'+
// '# P01:课程介绍和环境搭建\n' +
// '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
// '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
//  '**这是加粗的文字**\n\n' +
// '*这是倾斜的文字*`\n\n' +
// '***这是斜体加粗的文字***\n\n' +
// '~~这是删除线~~ \n\n'+
// '\`console.log(111)\` \n\n'+
// '# p02:来个Hello World 初始Vue3.0\n' +
// '> aaaaaaaaa\n' +
// '>> bbbbbbbbb\n' +
// '>>> cccccccccc\n'+
// '<blockquote>This blockquote will change based on the HTML settings above.</blockquote>\n'+
// '***\n\n\n' +
// '# p03:Vue3.0基础知识讲解\n' +
// '> aaaaaaaaa\n' +
// '>> bbbbbbbbb\n' +
// '>>> cccccccccc\n\n'+
// '# p04:Vue3.0基础知识讲解\n' +
// '> aaaaaaaaa\n' +
// '>> bbbbbbbbb\n' +
// '>>> cccccccccc\n\n'+
// '#5 p05:Vue3.0基础知识讲解\n' +
// '> aaaaaaaaa\n' +
// '>> bbbbbbbbb\n' +
// '>>> cccccccccc\n\n'+
// '# p06:Vue3.0基础知识讲解\n' +
// '> aaaaaaaaa\n' +
// '>> bbbbbbbbb\n' +
// '>>> cccccccccc\n\n'+
// '# p07:Vue3.0基础知识讲解\n' +
// '> aaaaaaaaa\n' +
// '>> bbbbbbbbb\n' +
// '>>> cccccccccc\n\n'+
// '``` var a=11; ```'


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
                     <ReactMarkdown 
                        children={markdown}                      
                        // 没有gfm这个插件，不能支持，删除线，表格，和任务列表
                        plugins={[gfm]} 
                     />
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
                    source={markdown}
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
export default Detailed
