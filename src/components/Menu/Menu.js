import React from 'react'; //importowanie REACT'a
import styles from './Menu.module.css';

function Menu()
{
    return (
        <div className={styles.menuContainer}>
            <ul className={styles.menu}>
                <li className={styles.menuItem}>
                    <a href="#" className={styles.menuText}>START</a>
                </li>
                <li className={styles.menuItem}>
                    <a href="#" className={styles.menuText}>Loguj</a>
                </li>
                <li className={styles.menuItem}>
                    <a href="#" className={styles.menuText}>Rezerwuj</a>
                </li>
                <li className={styles.menuItem}>
                    <a href="#" className={styles.menuText}>Dania</a>
                </li>

            </ul>
        </div>
    );
}

 export default Menu;