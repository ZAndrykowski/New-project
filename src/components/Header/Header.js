import React from 'react'; //importowanie REACT'a
import Searchbar from './Searchbar/Searchbar'; // Importowanie wydzielonego paska wyszukiwania
import styles from './Header.module.css'; //import CSS dla Header


function Header()
{
    console.log(styles)
    return (
        <header className={styles.header}>
        <div>
            <h4 className={styles.text}>Pod Kasztanem albo innym Ogórkiem</h4>
        </div>
        <Searchbar />
        </header>
    );
}

 export default Header;