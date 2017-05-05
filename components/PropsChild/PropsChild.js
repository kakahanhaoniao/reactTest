'use strict';

import React, { Component } from 'react';

// 定义一个组件，通过React.Children 拿到组件里面的子元素
class ListComponent extends Component {
  render(){
    return <ul>
      {
        React.Children.map( this.props.children, function(c){
          return <li>{c}</li>;
        })
      }
    </ul>
  }
}

class PropsChild extends Component {
  render(){
    return (
      <ListComponent>
        <a href="#" ref='Facebook'>Facebook</a>
        <a href="#" ref='Google'>Google</a>
        <a href="#" ref='SpaceX'>SpaceX</a>
      </ListComponent>
    )
  }
}

export default PropsChild;
