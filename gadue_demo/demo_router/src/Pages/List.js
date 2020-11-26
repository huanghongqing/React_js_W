import React, { Component } from 'react';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
        return ( 
        <h2>List Page-- {this.state.id}</h2>
         );
    }
    componentDidMount(){
        let id=this.props.match.params.id
        this.setState({
            id:id
        })
    }
}
 
export default List;