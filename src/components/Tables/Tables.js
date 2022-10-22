import React, { Component } from 'react'; //importowanie REACT'a
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Table from './Table/Table';
import styles from './Tables.module.css';


class Tables extends Component{

    render() {
        return (
            <Container fluid="xl" className={styles.container}>
                <Row>
                    <Col xs={3}><h2 className={styles.table}>Dostępne stoliki: </h2></Col>
                    <Col xs={7}><Button as="input" type="reset" value="Odśwież" /></Col>
                    {this.props.tables.map(table => <Table {...table}/>)}
                </Row>
                <Row>
                    <Col><Table /></Col>
                    <Col><Table /></Col>
                    <Col><Table /></Col>
                    <Col><Table /></Col>
                    <Col><Table /></Col>
                    <Col><Table /></Col>

                    
                </Row>
                <Row>
                    <Col><Table /></Col>
                    <Col><Table /></Col>
                    <Col><Table /></Col>
                    <Col><Table /></Col>
                    <Col><Table /></Col>
                    <Col><Table /></Col>

                </Row>
                <Row>
                    <Col><Table /></Col>
                    <Col><Table /></Col>
                    <Col><Table /></Col>
                    <Col><Table /></Col>
                    <Col><Table /></Col>
                    <Col><Table /></Col>

                </Row>
                <Row>
                    <Col><Table /></Col>
                    <Col><Table /></Col>
                    <Col><Table /></Col>
                    <Col><Table /></Col>
                    <Col><Table /></Col>
                    <Col><Table /></Col>

                </Row>
                <Row>
                    <Col><Table /></Col>
                    <Col><Table /></Col>
                    <Col><Table /></Col>
                    <Col><Table /></Col>
                    <Col><Table /></Col>
                    <Col><Table /></Col>

                </Row>
                <Row>
                    <Col><Table /></Col>
                    <Col><Table /></Col>
                    <Col><Table /></Col>
                    <Col><Table /></Col>
                    <Col><Table /></Col>
                    <Col><Table /></Col>

                </Row>
                <Row>
                    <Col><Table /></Col>
                    <Col><Table /></Col>
                    <Col><Table /></Col>
                    <Col><Table /></Col>
                    <Col><Table /></Col>
                    <Col><Table /></Col>
                </Row>
            </Container>
        );
    }
}
export default Tables;
