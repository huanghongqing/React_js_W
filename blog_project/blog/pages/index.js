import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import {Row,Col,List} from 'antd'
import React,{useState} from 'react'
import {CalendarOutlined,FolderOutlined,FireFilled} from '@ant-design/icons'
import axios from 'axios'


const Home=(list)=> {
  const [mylist,setMylist]=useState(list.data)
  // useState([
  //   {title:'T-72B3',context:'库存T-72B改进的延寿升级型，T-72B3的改进分mod.2011、mod.2014、mod.2016三个阶段。最初火炮、火控及装甲比照T-72BM升级，无线电和车内灭火、防爆系统亦得到升级。炮塔新增“松树”-U多通道瞄准仪，新型的Р-168-25У-2通讯系统。其2A46M-5滑膛炮新增3BM59"Svinets-1"(贫铀穿甲弹)和3BM60"Svinets-2"(钨合金穿甲弹)等两款新弹药。动力系统有配备V-92S2有的还是V-84，后期升级了“化石”反应装甲。俄罗斯将大约1000余辆旧型T-72B翻修至此规格。'},
  //   {title:'T-80B',context:'T-80B配备了与T-64B相同的K型复合装甲、125毫米2A46M-1滑膛炮等装备，并装备功率达1100匹的GTD-1000TF燃气轮机。[16]2A46M滑膛炮能发射9M112“眼镜蛇”反坦克导弹，能攻击4千米内的坦克或5千米内的直升机,换装新式125毫米2A46M-4滑膛炮与新的自动装弹机，可发射神秘的新式Svinets-1（3BM59）与Svinets-2（3BM60）翼稳脱壳穿甲弹；据称前者为碳化钨合金弹芯，而后者为衰变铀弹芯，能有效贯穿2千米外超过700-740毫米厚的均质钢板（RHA）'},
  //   {title:'T-80U',context:'T-80U使用新一代燃气轮机GTD-1250，不仅能提供1250匹的动力，还能使用航空煤油、柴油和低辛烷值的汽油或三者的混合物作燃料，具备优秀的动态稳定性和可靠性，使用寿命更高,得益于1A46火控系统，T-80U比过往型号火力都要强大。这套系统包括激光测距器、弹道计算机、1G46炮手瞄具和热成像瞄具。T-80U能发射9M119“反射”反坦克导弹，也能使用3BM46长杆尾翼稳定穿甲弹。另外，T-80U的火炮也升级为2A46M-1型125毫米滑膛炮。在先进的火控系统、火炮和弹药配合下，T-80U能精确打击并摧毁5千米内的目标'},
  //   {title:'BMP-2',context:'BMP-2步兵战斗车是BMP-1步兵战车的改良型，是为了针对BMP-1在火力和车长位置的不当，1982年首次在莫斯科红场的阅兵当中出场。BMP-2改用一个较大的双人炮塔去取代BMP-1的单人炮塔，武器改为主要武装是30毫米口径2A42机炮，2A42机炮的最高仰角为74度再加上BMP-2的炮塔为电动转动，转速最快为每秒60度，因此可射击高度在2000米以下的次音速空中目标（例如:敌方武装直升机），2A42机炮的弹药有曳光穿甲弹和曳光高爆燃烧弹，曳光穿甲弹可打穿在1000米外厚50毫米的钢板,另一主要武装是AT-5反坦克导弹，出口型号则最初安装AT-4反坦克导弹，后来苏联批准AT-5出口，故后来出口型都是AT-5，AT-5反坦克导弹是有线导引，BMP-2的车长祇要把十字瞄准目标，AT-5就会自动命中，每辆BMP-2最多有7发AT-5,根据阿富汗战争的经验，BMP-2可在前方加上除雷装置'},
  // ])
  return (
    <div className="container">
      <Head>
        <title>Akin BLOG</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <Row  className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
            <List 
              header={<div>最新日志</div>}
              itemLayout="vertical"
              dataSource={mylist}
              renderItem={
                (item)=>{
                  return (
                    <List.Item>
                      <div className="list-title">
                        <Link href={{pathname:'/detail',query:{id:item.id}}}>
                          <a>{item.title}</a>
                        </Link>
                      </div>
                      <div className="list-icon">
                        <span><CalendarOutlined />{item.addTime}  </span>
                        <span><FolderOutlined />{item.typeName}  </span>
                        <span><FireFilled />{item.view_count}  </span>
                      </div>
                      <div className="list-context">{item.content}</div>
                    </List.Item>
                  )
                }
              }
            />
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
            <Author>A coder and a tech fans...Tring lose weight.</Author>
            <Advert />
        </Col>        
      </Row>
      <Footer />
    </div>
  )
}
Home.getInitialProps = async ()=>{ //这里的console log会输出到node.js 的命令行窗体里，而不是浏览器里。
  //http://localhost:7001/default/getArticleList
    const promise =new Promise((resolve,reject)=>{
        axios('http://localhost:7001/default/getArticleList').then(//这里直接用axios的then成功方法替代了promise的成功回调
            (res)=>{
                console.log('远程数据结果：',res.data.data)
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

export default Home