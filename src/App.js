import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const api = {
  key:'fdeb00cfbddd261925c75bd3c0bc3b0c',
  base:'https://api.openweathermap.org/data/2.5/',
} 
function App() {
    const[search, setSearch] = useState("");
    const[weather, setWeather] = useState({});
    let temp = 0;
    const searchClicked = () => {
      console.log("Search clicked");
      console.log(search);
      fetch(`${api.base}weather?q=${search}&unit=metric&APPID=${api.key}`)
      .then((res)=>res.json())
      .then((result)=>{        
        setWeather(result);
        console.log(result);
      })
      
    }
    
  return (
    <div className="App">
      <header className="App-header">
        <h1> My Weather App</h1>
        <div style={{paddingTop:'50px'}}> 
        <input type='text' placeholder='Enter city/town..' onChange={(e)=>setSearch(e.target.value)}></input>
        </div>
        <div style={{paddingTop:'40px'}}>
          <button class='btn btn-primary' onClick={searchClicked}>Search</button>
        </div>
       <p>Name: {weather.name}</p>
       
      </header>
     
    </div>
  );
}

export default App;
