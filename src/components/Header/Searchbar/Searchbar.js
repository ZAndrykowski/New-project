import React, { useState } from 'react';

function Searchbar()
{
    const [stateSearch, setStateSearch] = useState('');

    const search = () =>{
        console.log('Szukaj!', stateSearch);
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
        <button
            onClick={search} 
            className='button'>
            Click
        </button>
    </div>
    );
}
export default Searchbar;