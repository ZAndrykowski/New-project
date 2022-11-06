import './App.css';
import React, { Component } from 'react';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Tables from './components/Tables/Tables';
import LoadingIcon from './components/UI/LoadingIcon/LoadingIcon';
import Searchbar from './components/UI/Searchbar/Searchbar'; // Importowanie wydzielonego paska wyszukiwania
import Layout from './components/Layout/Layout';
import Footer from './components/Footer/Footer';
import ThemeContext from './context/themeContext';
import ThemeButton from './components/UI/ThemeButton/ThemeButton';
//import imgTable from './assets/images/table (1).jpg'
//import Login from './components/Login/Login';
//import Reserve from './components/Reserve/Reserve';
// import logo from './logo.svg';



class App extends Component {
  static contextType = ThemeContext;

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

  state = { //STAN
    tables: [],
    loading: true,
    theme: 'success',
    themeHeader: 'primary'
  }

  searchHandler(stateSearch) {
    console.log("Szukaj z app.js", stateSearch);
    const tables = [...this.state.tables]
      .filter(x => x.place.toLowerCase()
        .includes(stateSearch.toLowerCase()))
    this.setState({ tables });
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ tables: this.tables, loading: false });
    }, 1000);
    console.log('Component zamontowany')
  }

  componentDidUpdate() {
    console.log('Component zaktaulizowany')
  }

  changeTheme = () => { //zmienianie szablonu kolorów
    const newTheme = this.state.theme === 'primary' ? 'danger' : 'primary';
    const newThemeHeader = this.state.themeHeader === 'primary' ? 'success' : 'primary';
    this.setState({ theme: newTheme });
    this.setState({ themeHeader: newThemeHeader });
  }

  render() {
    console.log('Component wyrenderowany')
    const header = (
      <Header>
        <Searchbar
          onSearch={stateSearch => this.searchHandler(stateSearch)} />
        <ThemeButton />

      </Header>
    );

    const menu = (
      <Menu />
    )

    const content = (
      this.state.loading ? (
        <LoadingIcon />) : (
        <Tables tables={this.state.tables} />
      )
    )

    const footer = (
      <Footer />
    )

    ///////////////////////////////////////////////////////////////////////////

    return (
      <ThemeContext.Provider value={{
        theme: this.state.theme,
        themeHeader: this.state.themeHeader,
        changeTheme: this.changeTheme
      }}>
        <div className="App">
          <Layout
            header={header}
            menu={menu}
            content={content}
            footer={footer}
          />
        </div>
      </ThemeContext.Provider>
    );
  }
}
export default App;

//Do poprawy ponowne wczytywanie całej tablicy stolików po wczytaniu wyszukiwania... 