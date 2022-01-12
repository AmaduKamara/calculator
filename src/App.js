import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import Home from './pages/Home';

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component {
  render() {
    return (
      <>
        <Home />
        <Outlet />
      </>
    );
  }
}
