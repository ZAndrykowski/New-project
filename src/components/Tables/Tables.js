
import { Component, React } from 'react'; //importowanie REACT'a
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Table from './Table/Table';
import styles from './Tables.module.css';
import PropTypes from 'prop-types';
import ThemeContext from '../../context/themeContext';

const propTypes = { //Sprawdzanie właściwości Props
    tables: PropTypes.array.isRequired
}

class Tables extends Component {
    componentWillUnmount() {
        console.log('Component odmontowany - Tables')
    }

    render() {
        return (
            <ThemeContext.Consumer>
                {value =>
                    <Container fluid="xl" className={styles.container}>
                        <Row className={styles.flexrow}>
                            <Col xs={3}><h2 className={styles.table}>Dostępne stoliki: </h2></Col>
                            <Col xs={7}><Button variant={value} as="input" type="reset" value="Odśwież" /></Col>

                        </Row>
                        <Row className={styles.flexrow}>
                            {this.props.tables.map(table =>
                                <Table
                                    key={table.id} {...table}
                                    theme={this.props.theme} />
                            )}
                        </Row>


                    </Container>
                }
            </ThemeContext.Consumer>
        );
    }
}
Tables.propTypes = propTypes;

export default Tables;
