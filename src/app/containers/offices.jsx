import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { getLocationOffices } from '../actions-generators/getLocationOffices';

class Offices extends React.Component{
  render(){
    return(
      <div>
        <Link to="/offices/region" onClick={() => {this.props.getLocationOffices()}}>KHARKOV</Link><br/><br/>
      </div>
    )
  }
}

function officesState(state) {
  return{
    offices: state.officeReducer
  }
}

function MapDispatchToProps(dispatch) {
  return bindActionCreators({
    getLocationOffices,
  },dispatch)
}

export default connect(officesState,MapDispatchToProps)(Offices)
