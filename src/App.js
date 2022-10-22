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
        },
        {
          id: 4,
          seats: '4',
          image: '',
          reserve: false
        },
        {
          id: 5,
          seats: '4',
          image: '',
          reserve: false
        },
        {
          id: 6,
          seats: '4',
          image: '',
          reserve: false
        },
        {
          id: 7,
          seats: '4',
          image: '',
          reserve: false
        },
        {
          id: 8,
          seats: '4',
          image: '',
          reserve: true
        },
        {
          id: 9,
          seats: '4',
          image: '',
          reserve: true
        },
        {
          id: 10,
          seats: '7',
          image: '',
          reserve: false
        },
        {
          id: 11,
          seats: '3',
          image: '',
          reserve: false
        },
        {
          id: 12,
          seats: '0',
          image: '',
          reserve: false
        },
        {
          id: 13,
          seats: '4',
          image: '',
          reserve: false
        },
        {
          id: 14,
          seats: '2',
          image: '',
          reserve: false
        }
      ]
    };
  };

  searchHandler(stateSearch){
    console.log("Szukaj z app.js", stateSearch);
    // const tables = [...this.state.tables].filter(x => x.name.includes(stateSearch))
    // this.setState({ tables });
  };

  render() {
    return (
      <div className="App">
        <Header onSearch={(stateSearch) => this.searchHandler(stateSearch)}/>
        <Menu />
        <Login />
        <Reserve />
        <Tables tables={this.state.tables} />
      </div>
    );
  }
}

// onSearch={(stateSearch) => this.searchHandler(stateSearch)}
export default App;
