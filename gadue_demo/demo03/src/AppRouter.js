import react from 'react'
import {BrowserRouter as Router,Route,Link } from 'react-router-dom'
import Index from './Pages/Index'
import Video from './Pages/Video'
import Workplace from './Pages/Workplace'
import './index.css'

function AppRouter(){
    let routeConfig=[
        {path:'/',title:'HomePage',exact:true,component:Index},
        {path:'/video',title:'Video',exact:false,component:Video},
        {path:'/workplace',title:'Workplace',exact:false,component:Workplace}
    ]
    return (
        <Router>
            <div className="mainDiv">
                <div    className="leftNav">
                    <h3>Level navgator</h3>
                    <ul>
                        {
                            routeConfig.map((item,index)=>{
                                return (
                                <li key={Index}><Link to={item.path}>{item.title}</Link></li>
                                )
                            })
                        }
                    </ul>
                </div>

                <div className="rightMain">
                    {
                        routeConfig.map((item,index)=>{
                            return (
                                <Route key={index} path={item.path} exact={item.exact} component={item.component}></Route>
                            )
                        })
                    }
                </div>
            </div>
        </Router>
    );
}
export default AppRouter