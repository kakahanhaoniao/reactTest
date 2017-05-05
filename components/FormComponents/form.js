'use strict';

import React, { Component } from 'react';

class Checkboxes extends Component {
  render(){
      return <span>
          A
          <input onChange={this.props.handleCheck}  name="goodCheckbox" type="checkbox" value="A"/>
          B
          <input onChange={this.props.handleCheck} name="goodCheckbox" type="checkbox" value="B" />
          C
          <input onChange={this.props.handleCheck} name="goodCheckbox" type="checkbox" value="C" />
      </span>
  }
}

class RadioButtons extends Component {
  render(){
      return (<span>
          A
          <input onChange={this.props.handleRadio} name="goodRadio" type="radio" value="A"/>
          B
          <input onChange={this.props.handleRadio} name="goodRadio" type="radio" defaultChecked value="B"/>
          C
          <input onChange={this.props.handleRadio} name="goodRadio" type="radio" value="C"/>
      </span>)
  }
}

class FormApp extends Component {
    constructor(){
        super();
        this.state = {
            inputValue: '请输入...',
            selectValue: 'A',
            radioValue:'B',
            checkValues:[],
            textareaValue:'请输入...'
        };
    }
    handleSubmit(e) {
        e.preventDefault();

        let formData = {
            input: this.refs.goodInput.value,
            select: this.refs.goodSelect.value,
            textarea: this.refs.goodTextarea.value,
            radio: this.state.radioValue,
            check: this.state.checkValues
        }

        alert('您即将提交表单')
        console.log('你提交的数据是:')
        console.log(formData);

    }

    checkSelect(e) {
        this.setState({
            selectValue: this.refs.goodSelect.value
        })
    }

    handleRadio(e) {
        this.setState({
            radioValue: e.target.value,
        })
    }

    handleCheck(e) {
        let checkValues = this.state.checkValues;
        let newVal = e.target.value;
        let index = checkValues.indexOf(newVal);

        if( index == -1 ){
            checkValues.push( newVal )
        }else{
            checkValues.splice(index,1);
        }

        this.setState({
            checkValues: checkValues,
        })
    }

    render(){
        return <form onSubmit={this.handleSubmit.bind(this)}>
            <h3> 请输入内容 </h3>
            <input ref="goodInput" type="text" defaultValue={this.state.inputValue }/>
            <br/>

            <h3> 请选择 </h3>
            <select defaultValue={ this.state.selectValue } ref="goodSelect" onChange={this.checkSelect.bind(this)}>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="E">E</option>
            </select>
            <br/>

            <h3> 单项选择 </h3>
            <RadioButtons ref="goodRadio" handleRadio={this.handleRadio.bind(this)} />
            <br/>

            <h3> 多选按钮 </h3>
            <Checkboxes handleCheck={this.handleCheck.bind(this)} />
            <br/>

            <h3> 反馈建议 </h3>
            <textarea defaultValue={this.state.textareaValue} ref="goodTextarea"></textarea>
            <br/>

            <button type="submit">确认提交</button>
        </form>
    }
}

export default FormApp;
