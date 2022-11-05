import React from 'react'; //importowanie REACT'a
import styles from './Header.module.css'; //import CSS dla Header


function Header(props)
{
    console.log(styles)
    return (
        <header className={styles.header}>
        <div>
            <h4 className={styles.text}>Pod Kasztanem albo innym Ogórkiem</h4>
        </div>
        {props.children}
        </header>
    );
}

 export default Header;