import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const propTypes = { //Sprawdzanie właściwości Props
    onSearch: PropTypes.func.isRequired
};

function Searchbar(props)
{

    const [stateSearch, setStateSearch] = useState('');


    const search = () => {
        console.log('Szukaj!', stateSearch);
        props.onSearch(stateSearch);
    }

    // Czy został wciśniety Enter?
    const onKeyDownHandler = e =>{
        if (e.key === 'Enter'){
            search();
        }
    }
    
    return(    
    <div className='from-control'>
    <input
        value={stateSearch}
        onKeyDown={onKeyDownHandler}
        onChange={e => setStateSearch(e.target.value)} //zmiany w stanie
        style={{
            width: 'Calc(100%-20px)',
            backgroundColor: 'white'
            }}
        className='input-text'
        type="text" 
        placeholder='Szukajcie, a znajdziecie..'/>
        <Button variant={props.theme} size="sm" onClick={search}>Click</Button>
    </div>
    );
}
Searchbar.propTypes = propTypes;

export default Searchbar;