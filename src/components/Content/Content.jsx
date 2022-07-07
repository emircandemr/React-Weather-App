import React from 'react'
import "./Content.css"
import WeatherCardList from '../WeatherCardList/WeatherCardList'
import { Link } from "react-router-dom";
import { useWeatherContext } from '../../context/Context';

function Content() {

  const {
    weatherCurrent , 
    city,
    } = useWeatherContext()

  return (
    <div className='content-container'>
        <div className='image-side flex justify-center items-center '>
          <div className="location">
            <div className='mb-5'>{city}</div>
            <div className='mt-5'>TODAY</div>
            <div className='mt-10'>{weatherCurrent.temp  ? weatherCurrent.temp +"°C"  : ""}</div>
            <div className='flex justify-center items-center'>
              <div>{weatherCurrent.temp  ? weatherCurrent.weather[0].main : ""}</div>
              <div><img src={weatherCurrent.temp  ? `https://openweathermap.org/img/wn/${weatherCurrent.weather[0].icon}@2x.png` : "#"} /></div>
            </div>
          </div>
          <div className='arrow-back'>
            <Link to="/" ><i className="fa-solid fa-arrow-left-long"></i></Link>
          </div>
        </div>
        <div className='weather-side'>
            <WeatherCardList/>
        </div>
    </div>
  )
}

export default Content