import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
    return(
        <div className='pa3 grow'>
            <input 
                className='pa3 mb4 ba'
                type='search' 
                placeholder='SEARCH ROBOTS' 
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;