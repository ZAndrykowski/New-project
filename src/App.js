// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Login from './components/Login/Login';
import Reserve from './components/Reserve/Reserve';
import Tables from './components/Tables/Tables';
import { Component } from 'react';
import LoadingIcon from './components/UI/LoadingIcon/LoadingIcon';
//import imgTable from './assets/images/table (1).jpg'



class App extends Component {
  tables = [{
    id: 1,
    seats: 4,
    image: '',
    reserve: true,
    place: "miejsce"
  },
  {
    id: 2,
    seats: 4,
    image: '',
    reserve: true,
    place: "przy oknie"
  },
  {
    id: 3,
    seats: 4,
    image: '',
    reserve: false,
    place: "na środku"
  },
  {
    id: 4,
    seats: 4,
    image: '',
    reserve: false,
    place: "VIP"
  },
  {
    id: 5,
    seats: 4,
    image: '',
    reserve: false,
    place: "miejsce"
  },
  {
    id: 6,
    seats: 4,
    image: '',
    reserve: false,
    place: "miejsce"
  },
  {
    id: 7,
    seats: 4,
    image: '',
    reserve: false,
    place: "miejsce"
  },
  {
    id: 8,
    seats: 4,
    image: '',
    reserve: true,
    place: "miejsce"
  },
  {
    id: 9,
    seats: 4,
    image: '',
    reserve: true,
    place: "miejsce"
  },
  {
    id: 10,
    seats: 7,
    image: '',
    reserve: false,
    place: "miejsce"
  },
  {
    id: 11,
    seats: 3,
    image: '',
    reserve: false,
    place: "na zewnątrz"
  },
  {
    id: 12,
    seats: 1,
    image: '',
    reserve: true,
    place: "przy barze"
  },
  {
    id: 13,
    seats: 2,
    image: '',
    reserve: false,
    place: "Romantycznie"
  },
  {
    id: 14,
    seats: 2,
    image: '',
    reserve: false,
    place: "Romantycznie"
  }];

  state = {
    tables: [],
    loading: true,
  }

  searchHandler(stateSearch){
    console.log("Szukaj z app.js", stateSearch);
    const tables = [...this.state.tables]
                      .filter(x => x.place.toLowerCase()
                      .includes(stateSearch.toLowerCase()))
    this.setState({ tables });
  };

  componentDidMount()
  {
    setTimeout(() => {
          this.setState({tables: this.tables, loading: false});
    }, 1000);
    console.log('Component zamontowany')
  }

  componentDidUpdate(){
    console.log('Component zaktaulizowany')
  }


  render() {
    console.log('Component wyrenderowany')
    return (
      <div className="App">
        <Header onSearch={(stateSearch) => this.searchHandler(stateSearch)}/>
        <Menu />
        <Login />
        <Reserve />
        {this.state.loading ? (
          LoadingIcon() ) : (
          <Tables tables={this.state.tables} />
        )}
      </div>
    );
  }
}
export default App;

//Do poprawy ponowne wczytywanie całej tablicy stolików po wczytaniu wyszukiwania... 
