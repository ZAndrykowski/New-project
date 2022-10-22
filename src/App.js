// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Login from './components/Login/Login';
import Reserve from './components/Reserve/Reserve';
import Tables from './components/Tables/Tables';
import { Component } from 'react'



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tables: [
        {
          id: 1,
          seats: '4',
          image: '',
          reserve: true
        },
        {
          id: 2,
          seats: '4',
          image: '',
          reserve: true
        },
        {
          id: 3,
          seats: '4',
          image: '',
          reserve: false
        }
      ]
    };
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Menu />
        <Login />
        <Reserve />
        <Tables tables={this.state.tables} />
      </div>
    );
  }
}

export default App;
