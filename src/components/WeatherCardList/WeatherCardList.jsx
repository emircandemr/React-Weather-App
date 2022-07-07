import React from 'react'
import "./WeatherCardList.css"
import WeatherCard from '../WeatherCard/WeatherCard'
import { useWeatherContext } from '../../context/Context'

function WeatherCardList() {

  const {weatherDaily} = useWeatherContext()

    let weatherDays = weatherDaily.slice(1,7)

  return (


    <div className='weatherList-container'>
       {weatherDays.length > 0 ? weatherDays.map( (weather,i) => {
        return (
          <WeatherCard key={i} weather={weather}/>
        )
       }) : <div className='text-4xl text-green-700 font-semibold '>Not Found Location</div>}
    </div>
  )
}

export default WeatherCardList