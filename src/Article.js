
import React, {useState,useEffect} from 'react'

const Article = ({
    temp,humidity,pressure,weatherMood,name,speed,country,sunset,
}) => {
    const [weatherState,setWeatherState] = useState("");
    useEffect(() => {
      if(weatherMood){
        switch(weatherMood){
            case "Clouds":
                 setWeatherState("wi-day-cloudy");
                    break;
            case "Haze":
                setWeatherState("wi-fog");
                break;
            case "Rain":
                setWeatherState("wi-rain");
                break;
            case "Dust":
                setWeatherState("wi-dust");
                break;
            default:
                    setWeatherState("wi-day-sunny");
                    break;
        }
      }
    }, [weatherMood]);

     let sec = sunset;
    let date = new Date(sec*1000);
    let timeStr = `${date.getHours()} :${date.getMinutes()}`;
    let currDate = new Date();
    let currTime = `${currDate.getHours()} :${currDate.getMinutes()}`;

  return (
    <>
    <article className='widget'>
        <div className="weatherIcon">
          <i className={`wi ${weatherState}`}></i>
          <p className='extra-info-leftside'>{weatherMood}</p>
        </div>
        
        <div className="weatherInfo">
            <div className="temperature">
                <span>{temp}&deg;</span>
            </div>

        <div className="description">
            <div className="weatherCondition">
                <div className="place">
                    {name}, {country};
                </div>
            </div>
        </div>
        </div>
        <div className="date">{new Date().toLocaleDateString()} <br />  { parseInt(currTime) >12 ? `${currTime} PM`: `${currTime} AM`}</div>

        <div className="extra-temp">
            <div className="temp-info-minmax">
                <div className="two-sided-section">
                    <p>
                        <i className='wi wi-sunset'></i>
                    </p>
                    <p className="extra-info-leftside">
                        {timeStr} PM <br />
                        Sunset
                    </p>
                </div>

                <div className="two-sided-section">
                    <p><i className='wi wi-humidity'>
                        </i></p>
                        <p className="extra-info-leftside">
                            {humidity} <br />
                            Humidity
                        </p>
                </div>
            </div>

            <div className="weather-extra-info">
            <div className="two-sided-section">
                    <p>
                        <i className='wi wi-rain'></i>
                    </p>
                    <p className="extra-info-leftside">
                        {pressure} <br />
                        Pressure
                    </p>
                </div>

                <div className="two-sided-section">
                    <p><i className='wi wi-strong-wind'>
                        </i></p>
                        <p className="extra-info-leftside">
                            {speed} <br />
                            Speed
                        </p>
                </div>
            </div>
        </div>
       </article>
    </>
  )
}

export default Article