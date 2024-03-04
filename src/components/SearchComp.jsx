import React from 'react';
import classes from './SearchComp.module.css'

const SearchComp = () => {
    return (
        <div>
            <input className={classes.search_inp}type="search" placeholder='Search for a city'/>
            <button className={classes.search_sub}>submit</button>
        </div>
    );
};

export default SearchComp;