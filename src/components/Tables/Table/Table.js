import React from 'react'; //importowanie REACT'a
import styles from './Table.module.css';
// import imgTable from '../../../assets/images/table (1).jpg';
import { Row, Col, Button, Container } from 'react-bootstrap';

function Table(props){
    return (
        <Container fluid="md" className={styles.table}>
        <Row>
            <Col xs={8} md={14}>
                {props.image}
                {/* <img src={imgTable} 
                alt="img" 
                className="img-fluid img-thumbnail"/> */}
            </Col> 
        </Row>
        <Row>
                <p className={styles.tableText}>STOLIK NR.:{props.id}</p>
        </Row>
        <Row>
                <p className={styles.tableText}>LICZBA MIEJSC:{props.seats}</p>
        </Row>
        <Row>
            <div className="d-grid gap-2">
                <p>DOSTĘPNY</p>
                <p>{props.reserve}</p>
                <Button variant="primary" size="lg" className={styles.button}>WYBIERZ</Button>{'  '}
            </div>
        </Row>
        </Container>
    );


}

 export default Table;