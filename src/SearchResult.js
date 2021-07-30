import React from 'react';
import './SearchResult.css';

const SearchResult = (props) => {
    return <div className='search-result-container'>
        {props?.result?.map((city,index) => {
    return <div key={index}>
            <label id='city-name'>
                City Name:
            </label>
            <div>{city.name}</div>
            <label id='city-temp'>
                City Temperature:
            </label>
            <div>{city.main.temp}</div>
            <label id='city-wind'>
                Wind:
            </label>
            <div>{city.main.temp}</div>
            <label id='city-pressure'>
                City Pressure:
            </label>
            <div>{city.main.temp}</div>
            <label id='city-'>
                City Cloud:
            </label>
            <div>{city.main.temp}</div>
        </div>             
})}        
    </div>
}

export default SearchResult;

// 