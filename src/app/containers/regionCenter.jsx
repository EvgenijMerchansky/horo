import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { getLocationOffices } from '../actions-generators/getLocationOffices';

class RegionCenter extends React.Component{
  render(){
    console.log(this);
    const offices = this.props.RegionCenterReducer.offices;
    return(
      <div>
        <ul>{offices}</ul>
        <Link to="/offices">[X]</Link>
      </div>
    )
  }
}

function officesState(state) {
  return{
    RegionCenterReducer: state.officeReducer
  }
}

export default connect(officesState)(RegionCenter)
