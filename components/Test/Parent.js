import React, {Component, PropTypes} from 'react';
import ComponentDemo from './test';
class ParentCom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1,
            destroyed: false
        }
    }
    increase() {
        this.setState({
          value: this.state.value + 1
        });
    }

    destroy() {
        this.setState({
            destroyed: true
        });
    }

    render() {
        if(this.state.destroyed){
            return null;
        }

        return <div>
          <p>
            <button onClick={this.increase.bind(this)}>每次加1</button>
            <button onClick={this.destroy.bind(this)}>干掉这两个按钮</button>
          </p>
          <ComponentDemo value={this.state.value}/>
        </div>;
    }

}

export default ParentCom;
