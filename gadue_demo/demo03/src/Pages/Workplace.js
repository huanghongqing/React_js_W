import React from 'react';
import {Route,Link } from 'react-router-dom'
import W1 from './workplace/W1'
import W2 from './workplace/W2'
import W3 from './workplace/W3'


function Workplace(){
    return(
        <div>
            <div className="topNav">
                <ul>
                    <li><Link to="/workplace/w1">W1</Link></li>
                    <li><Link to="/workplace/w2">W2</Link></li>
                    <li><Link to="/workplace/w3">W3</Link></li>
                </ul>
            </div>
            <div className="videoContent">
                <div>
                    <h3>职场技巧</h3>
                    <Route path="/workplace/w1"  component={W1}></Route>
                    <Route path="/workplace/w2"  component={W2}></Route>
                    <Route path="/workplace/w3"  component={W3}></Route>
                </div>
            </div>
        </div>
    )
}
export default Workplace