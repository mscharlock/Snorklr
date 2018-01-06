import React from 'react';
import Navbar from '../navbar';
import {connect} from 'react-redux';
import * as utils from '../../lib/utils';
//import components tbd here//
//import actions tbd here//
import {BrowserRouter, Route, Redirect} from 'react-router-dom';

class App extends React.Component {
  componentDidMount() {
    //token things to go here once I've defined the action for it (or saved it in utils?)
  }

  render() {
    return (
      <div className="application">
        <BrowserRouter>
          <div>
          //our routes and possibly Nav and Footer to go here//
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

let mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile,
});

let mapDispatchToProps = dispatch => ({
  //fill this in once methods are set//
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
