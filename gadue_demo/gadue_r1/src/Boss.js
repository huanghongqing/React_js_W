import React, { Component } from 'react';
import {CSSTransition } from 'react-transition-group'

class Boss extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            isShow:true,
        }
        this.toToggole=this.toToggole.bind(this)
    }
    render() { 
        return (
            <div>
                <CSSTransition
                    in={this.state.isShow}
                    timeout={2000}
                    classNames={"boss-text"}
                    unmountOnExit //退场时删除元素
                >
                    <div>Boss target</div>
                </CSSTransition>
                
                <div><button onClick={this.toToggole}>show/hide</button></div>
            </div>
        );
    }
    toToggole(){
        this.setState({
            isShow:this.state.isShow?false:true
        })
    }
}
 
export default Boss;