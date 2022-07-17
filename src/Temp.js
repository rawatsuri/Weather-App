import React, {useEffect,useState} from "react"
import Article from "./Article"
import "./style.css"

const Temp = () => {
const [searchValue,setSearchValue] = useState("kotdwara");
const [tempInfo,setTempInfo] = useState({});

const getWeatherInfo = async () => {
  
  try {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=d7a5a27f3798ceb05bf57d2abf59dea1`;
    let res = await fetch(url);
    let data = await res.json();

    const {temp,humidity,pressure} = data.main;
    const {main : weatherMood} = data.weather[0];
    const {name} = data;
    const {speed} = data.wind;
    const {country,sunset} = data.sys;
    const myNewWeatherInfo = {
      temp,humidity,pressure,weatherMood,name,speed,country,sunset,
    };
    console.log(myNewWeatherInfo);
    setTempInfo(myNewWeatherInfo);
  }
  
  catch (e) {
    console.log(e);
    alert("Enter a Valid Location");
  }
}

  useEffect(() => {
        getWeatherInfo();
  }, []);

return (
    <>
       <div className="wrap">
        <div className="search">
            <input 
            className='searchTerm'
            type="search" 
            placeholder='search...' 
            autoFocus
            id='search'
            value={searchValue}
            onChange = {(e)=>setSearchValue(e.target.value)}
            onKeyPress = {(e)=>{ if(e.key==='Enter') getWeatherInfo()}}
            />
            <button className='searchButton' type='button' onClick={getWeatherInfo}>Search</button>
        </div>
       </div>
       <Article {...tempInfo} />
    </>
  );
}

export default Temp;