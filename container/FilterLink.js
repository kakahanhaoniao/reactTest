import {connect} from 'react-redux';
import {setVisibility} from '../action';
import React, {Component, PropTypes} from 'react';
class Link extends Component {
  render () {
    const {active, onclick, children} = this.props;
    if(active) {
      return (<span>{children}</span>);
    }
    return (
      <a onclick={e => {
        e.preventDefault();
        onclick();
      }}>
        {children}
      </a>
    )
  }
}
const mapStateToProps = (state, ownprops) => {
  return {
    active: state.filter == ownprops.filter
  }
}

const mapDispatchToProps = (dispatch, ownprops) => {
  return {
    onclick: () => {
      dispatch(setVisibility(ownprops.filter))
    }
  }
}

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);
export default FilterLink;
