import { useEffect, useState } from 'react';
import './App.css';
import SearchBox from './SearchBox';
import SearchResult from './SearchResult';

function App() {
  const [cityData,setCityData] = useState([]);

  useEffect(() => {
    fetch('https://openweathermap.org/data/2.5/find?q=delhi&appid=439d4b804bc8187953eb36d2a8c26a02&units=metric')
    .then(res => res.json())
    .then(data => {      
      setCityData(data.list);
    })
  },[]);

  const searchHandler = (searchWord) => {
    let url = `https://openweathermap.org/data/2.5/find?q=${searchWord}&appid=439d4b804bc8187953eb36d2a8c26a02&units=metric`;
    console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => {      
      setCityData(data.list);
    })
  }

   

  return (
    <div>
      <header>        
        <h1>Search app</h1>
      </header>
      <SearchBox onSearch={searchHandler}/>
      <SearchResult result={cityData}/>
    </div>
  );
}

export default App;
