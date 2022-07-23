import React, {  useState } from 'react'
import "./home.css"
import { Link } from "react-router-dom";
import { useWeatherContext } from '../../context/Context';
import { REACT_APP_URL,REACT_APP_API_KEY,REACT_APP_URL_LAT } from '../../API';

function Home() {
    const [searchTerm ,setSearchTerm] = useState("");

    const { setWeatherCurrent,
        setCity,
        setWeatherDaily} = useWeatherContext()

    const handleSubmit = () => {
        getWeather(searchTerm);
        
    }

    const handleChange = (e) => {
        const {value} = e.target;
        setSearchTerm(value)

    }

    const getWeather = async (location) => {
            
        try{
            let getlatLon = await fetch(`${REACT_APP_URL_LAT+location}&appid=${REACT_APP_API_KEY}`)
            let LatLon = await getlatLon.json()
            let lat=LatLon[0].lat;
            let lon=LatLon[0].lon;
            let getData = await fetch(`${REACT_APP_URL}lat=${lat}&lon=${lon}&appid=${REACT_APP_API_KEY}&units=metric&cnt=4&exclude=minutely`)
            let data = await getData.json()
            setCity(`${LatLon[0].name} , ${LatLon[0].country}` )
            setWeatherCurrent(data.current)
            console.log(LatLon[0].name)
            setWeatherDaily(data.daily)
        }
        catch(err){
            console.log(err);
        }
    }
    return (
    
    <div className='home-container'>
        <div className='header-container'>
            <div className='logo'>
                Weather 
            </div>  
            <div className='location-text'>
                {(searchTerm).toUpperCase()}
            </div>
        </div>

        <div className='input-container'>
            <div className='title-container'>
                <h2 className='title'> The Only Weather Forecast You Need !</h2>
            </div>
            <div className='input'>
                    
                <input className='input-location' value={searchTerm} autoFocus type="text" required onChange={(e) =>{
                    handleChange(e)
                }}  />
               
                <Link to="/weather"><button className='button w-16' onClick={() => {
                    if(searchTerm.trim()!==""){
                        handleSubmit()
                    }
                }}>GO</button></Link>

            </div>
        </div>

    </div>
  )
}

export default Home