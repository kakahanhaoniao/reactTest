'use strict';

import React, { Component } from 'react';
// import { Router, Route, hashHistory } from 'react-router';
import ReactDOM from 'react-dom';
import ParentCom from 'components/Test/Parent';
// import HandleDOMComponent from 'components/RefDom/Ref';
// import ParentComponent from 'components/ParentToChild/ParentToChild';
// import PropsChild from 'components/PropsChild/PropsChild';
// import FormApp from 'components/FormComponents/form';
ReactDOM.render(<ParentCom/>, document.getElementById('app2'));

// refdom oprate
// ReactDOM.render(<HandleDOMComponent/>, document.getElementById('app3'));

// parentComponent childComponent 通讯
// ReactDOM.render(<ParentComponent/>, document.getElementById('app3'));

// 自定义组件中可以通过 this.props.children 访问自定义组件的子节点
// ReactDOM.render(<PropsChild/>, document.getElementById('app3'));

// form表单
// ReactDOM.render(<FormApp/>, document.getElementById('app3'));


// react router
import Routes from '../Router';
debugger;
ReactDOM.render(<Routes />, document.getElementById('app3'));
