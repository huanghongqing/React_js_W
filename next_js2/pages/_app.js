import '../styles/globals.css'
import '../styles/c1.css'
import React from 'react'
import 'antd/dist/antd.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp

// nextJS会把_app.js导出的组件作为page的父组件，也就是说这里的Container实际上是个超级wrapper，
// 每次路由跳转都会先用这个wrapper包裹page再渲染。

//全局的东西放在这里