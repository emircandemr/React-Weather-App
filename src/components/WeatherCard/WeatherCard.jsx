import React from 'react'
import { useWeatherContext } from '../../context/Context'
import "./WeatherCard.css";
import moment from 'moment-timezone';
function WeatherCard({weather}) {

  return (
    <div className='weatherCard-container'>
        <div className='date'>{moment.unix(weather.dt).format("dddd")} <br/>
        <span>{moment.unix(weather.dt).format("MMMM Do YYYY")}</span></div>
        <div className='temperature'>
            {weather.temp.day+"°C"}
        </div>
        <div className='occasion'>
            <span>{(weather.weather[0].main)}</span>
            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
        </div>
        <div className='descr-container' >
            <div className='descr'>
                <span>Humidity</span>
                <span>{weather.humidity} <i className="fa-solid fa-droplet sideImg"></i></span>
                
            </div>
            <div className='descr'>
                <span>Min Temp</span>
                <span>{weather.temp.min+"°"} <i className="fa-solid fa-temperature-low"></i> </span>
                
            </div> 
            <div className='descr'>
                <span>Max Temp</span>
                <span>{weather.temp.max+"°"} <i className="fa-solid fa-temperature-high"></i></span>
                
            </div>
        </div>
    </div>
  )
}

export default WeatherCard