import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';



class ParentComponent extends Component {
    constructor(){
        super();
        this.state = {
          red: 0,
          green: 0,
          pink: 0
        }
    }

    componentWillUpdate(nextProps,nextState){
        console.log(nextProps);
        console.log(nextState);
    }

    componentDidUpdate(prevProps,prevState) {
        console.log(prevProps);
        console.log(prevState);
    }

    update(e) {
        this.setState({
            red: findDOMNode(this.refs.red).value,
            green: findDOMNode(this.refs.green).value,
            pink: findDOMNode(this.refs.pink).value
        })
    }
    render(){
        return (
            <div>
                <Slider ref="red" update={this.update.bind(this)} />
                {this.state.red}
                <br />
                <Slider ref="green" update={this.update.bind(this)} />
                {this.state.green}
                <br />
                <Slider ref="pink" update={this.update.bind(this)} />
                {this.state.pink}
            </div>
        )
    }
}

class Slider extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <input type="range"
              min="0"
              max="255"
              defaultValue="0"
              onChange={this.props.update} />
        )
    }

}

export default ParentComponent;
