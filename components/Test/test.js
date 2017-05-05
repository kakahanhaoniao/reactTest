import React, {Component, PropTypes} from 'react';
// 1. 组件命名遵循驼峰命名，首字母大写
class ComponentDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            secondsElapsed: 0,
            value: '',
            MyComponentStyles: {
                color: 'blue',
                fontSize: '28px'
            }
        }
    }
    componentWillReceiveProps(nextProps){
        console.log('componentWillReceiveProps');
        this.setState({
            value: nextProps.value
        });
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log('shouldComponentUpdate');
        return true;
    }

    componentWillUpdate(nextProps,nextState){
        console.log('componentWillUpdate');
    }

    componentWillMount(){
        console.log('componentWillMount');
    }
    componentDidMount() {
        console.log('componentDidMount');
    }

    componentDidUpdate(prevProps,prevState) {
        console.log('componentDidUpdate');
    }

    componentWillUnmount(prevProps,prevState) {
        console.log('componentWillUnmount');
    }
    render() {
        console.log(this.props);
        return (
            <div style = {this.state.MyComponentStyles} >
                hello, {this.props.name}
                <span>目前已经计时：{this.state.secondsElapsed}秒</span>
                <br/>
                <span>{this.props.value}</span>
            </div>
        );
    }
}

ComponentDemo.propTypes = {
  name: PropTypes.array.isRequired,
  value: PropTypes.string
};
ComponentDemo.defaultProps = {
  name: '这是默认设置',
  value: 'start'
};

export default ComponentDemo;
