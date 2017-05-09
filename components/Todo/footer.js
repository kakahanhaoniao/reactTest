import React, {Component, PropTypes} from 'react';
import FilterLink from '../../container/FilterLink';
class Footer extends Component {
  render () {
    return (
      <p>
        show
        {' '}
        <FilterLink  filter='SHOW_ALL'>
          all
        </FilterLink>
        {' , '}
        <FilterLink filter='SHOW_COMPLETE' >
          completed
        </FilterLink>
        {' , '}
        <FilterLink filter='SHOW_ACTIVE'>
          active
        </FilterLink>
      </p>
    )
  }
}
export default Footer;
