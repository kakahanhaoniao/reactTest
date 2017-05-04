'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import component from './component';
import Button from '../components/Button/button';
component();
// class HelloWorld extends Component {
//   render(){
//     return (
//       <h1>Hello world</h1>
//     )
//   }
// }
if (__DEV__) {
  console.warn('Extra logging');
}
// ...
if (__PRERELEASE__) {
  showSecretFeature();
}
ReactDOM.render(<Button />, document.getElementById('app'));
