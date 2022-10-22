import React from 'react'; //importowanie REACT'a
import styles from './Table.module.css';
import imgTable from '../../../assets/images/table (1).jpg';
import { Container } from 'react-bootstrap';

function voidTable()
{
    return (
        <Container fluid="md" className={styles.table}>
        <div>
            <div className="col-4">
                <img src={imgTable} 
                alt="img"
                className="img-fluid"/>
            </div>
            <div className="col-8 text-left">
                X
            </div>
        </div>
        </Container>
    );


}

 export default voidTable;