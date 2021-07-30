import React,{useState,useRef} from 'react';
import './SearchBox.css';

const SearchBox = (props) => {    
    const searchInput = useRef();

    const searchHandler = (word) => {
        //setSearchTerm(searchInput.current.value);
        props.onSearch(word);
    }

    return <div className='search-box'>
        <div className='search-container'>
            <input type='text' className='search-input' ref={searchInput}/>
            <button onClick={() => searchHandler(searchInput.current.value)}>Search</button>
        </div>
    </div>
}

export default SearchBox;