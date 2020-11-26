import React from 'react';
import {Route,Link } from 'react-router-dom'
import Reactpage from './Video/reactpage'
import Flutter from './Video/flutter'
import Vue from './Video/vue'

function Video(){
    return(
        <div>
            <div className="topNav">
                <ul>
                    <li><Link to="/video/reactpage">React page</Link></li>
                    <li><Link to="/video/flutter">flutter page</Link></li>
                    <li><Link to="/video/vue">vue page</Link></li>
                </ul>
            </div>
            <div className="videoContent">
                <div>
                    <h3>视频教程</h3>
                    {/* 这里作为二级路由，记得路径必须是之前跳转到video组件的“/video”为开头 保持一个路由层次 */}
                    <Route path="/video/reactpage"  component={Reactpage}></Route>
                    <Route path="/video/flutter"  component={Flutter}></Route>
                    <Route path="/video/vue"  component={Vue}></Route>
                </div>
            </div>
        </div>
    )
}
export default Video