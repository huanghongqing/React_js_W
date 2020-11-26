import React, { Component } from 'react';
import {Link,Redirect} from 'react-router-dom'

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            list:[
                {cid:123,title:"T-80U"},
                {cid:456,title:"T-80B"},
                {cid:789,title:"T-72B3"},
            ]
        }
        //this.props.history.push("/home/")
    }
    render() { 
        return ( 
            <div>
                <h2>device list</h2>
                {/* <Redirect to="/home" /> */}
                <ul>
                    {
                        this.state.list.map((item,index)=>{
                            return (
                                    <li key={index}>
                                        <Link  to={'/list/'+item.cid}>{item.title}</Link>
                                    </li>

                            )
                        })
                    }
                </ul>
            </div>
         );
    }
}
 
export default Index;