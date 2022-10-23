
import {Component, React} from 'react'; //importowanie REACT'a
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Table from './Table/Table';
import styles from './Tables.module.css';
import PropTypes from 'prop-types';

const propTypes = { //Sprawdzanie właściwości Props
    tables: PropTypes.array.isRequired
}

class Tables extends Component{
    componentWillUnmount()
    {
        console.log('Component odmontowany - Tables')
    }
    
    render(){
        return (
            <Container fluid="xl" className={styles.container}>
                <Row className={styles.flexrow}>
                    <Col xs={3}><h2 className={styles.table}>Dostępne stoliki: </h2></Col>
                    <Col xs={7}><Button as="input" type="reset" value="Odśwież" /></Col>
                    
                </Row>
                <Row className={styles.flexrow}>
                    {this.props.tables.map(tables => <Table {...tables}/>)}
                </Row>
                

            </Container>
        );
    }
}
Tables.propTypes = propTypes;

export default Tables;
