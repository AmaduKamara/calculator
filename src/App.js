import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import Home from './pages/Home';
// import Calculator from './components/Calculator';
// import NavBar from './components/NavBar';

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
