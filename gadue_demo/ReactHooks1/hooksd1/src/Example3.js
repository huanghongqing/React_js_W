import React, { Component } from 'react';

class Example3 extends Component {
    constructor(props) {
        super(props);
        this.state = { count:0 }
        this.addCount=this.addCount.bind(this)
    }
    componentDidMount(){
        console.log(`you click ${this.state.count}`)
    }
    componentDidUpdate(){
        console.log(`update you click ${this.state.count}`)
    }
    render() { 
        return ( 
            <div>
                <p>click here {this.state.count} times.</p>
                <button onClick={this.addCount}>click me.</button>
            </div>
         );
    }
    addCount(){
        this.setState({
            count:this.state.count+1
        })
    }
}
 
export default Example3;