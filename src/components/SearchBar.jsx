// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';


const SearchBar = ({ username, setUsername, handleSearch }) => {
    return (
        <div className='searchbar'>
            <input
                id="search-input"
                type="text"
                placeholder="Enter a Github Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
        </div>
    );
}

SearchBar.propTypes = {
    username: PropTypes.string,
    setUsername: PropTypes.func,
    handleSearch: PropTypes.func,
};


export default SearchBar;