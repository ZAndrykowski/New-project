import React from 'react'; //importowanie REACT'a
import styles from './Table.module.css';
// import imgTable from '../../../assets/images/table (1).jpg';
import { Row, Col, Button, Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import ThemeContext from '../../../context/themeContext';

const propTypes = { //Sprawdzanie właściwości Props
    id: PropTypes.number.isRequired,
    seats: PropTypes.number.isRequired,
    reserve: PropTypes.bool.isRequired,
    place: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    missing: PropTypes.string,
};

const defaultProps = { //Nadpisanie standardowej wartości dla danego props'a
    missing: 'To jest zagubiona wartość'
}

function Table(props) {
    return (
        <ThemeContext.Consumer>
            {value=>
            <Col className={styles.flexcol}>

                <Container fluid="md" className={styles.table}>
                    <Row>
                        <Col xs={8} md={14}>
                            {props.image}
                            {props.missing}
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
                            <Button variant={value} size="lg" className={styles.button}>WYBIERZ</Button>{'  '}
                        </div>
                    </Row>
                </Container>
            </Col>
            }
        </ThemeContext.Consumer>
    );


}
Table.propTypes = propTypes;
Table.defaultProps = defaultProps;

export default Table;