import React, { useContext } from 'react'; //importowanie REACT'a
import styles from './Menu.module.css';
import AuthContext from '../../context/authContext';

function Menu() {
    const auth = useContext(AuthContext);

    const login = (e) => {
        e.preventDefault();
        auth.login();
    }
    const logout = (e) => {
        e.preventDefault();
        auth.logout();
    }

    return (
        <div className={`${styles.menuContainer} breadcrumb`}>
            <ul className={styles.menu}>
                <li className={styles.menuItem}>
                    <a href="#" className={styles.menuText}>START</a>
                </li>

                {
                    auth.isAuthenticaded
                        ? (
                            <li className={styles.menuItem}>
                                <a href="#" onClick={logout} className={styles.menuText}>Wyloguj</a>
                            </li>
                        )
                        :
                        (
                            <li className={styles.menuItem}>
                                <a href="#" onClick={login} className={styles.menuText}>Zaloguj</a>
                            </li>
                        )
                }
                <li className={styles.menuItem}><a href="#" className={styles.menuText}>Rezerwuj</a></li>
                <li className={styles.menuItem}><a href="#" className={styles.menuText}>Dania</a></li>
            </ul>
        </div>
    );
}

export default Menu;