import { createContext , useContext, useState } from "react";
export const GlobalContext = createContext();

const WeatherContext = ({children}) => {

    const [noData,setNoData] = useState("No Data Yet");
    const [weatherCurrent , setWeatherCurrent] = useState([]);
    const [weatherDaily , setWeatherDaily] = useState([]);
    const [city,setCity] = useState("Unknown Location");


    const values = {
        noData ,
        setNoData,
        weatherCurrent , 
        setWeatherCurrent,
        city,
        setCity,
        weatherDaily , 
        setWeatherDaily
    }

    return (
    <GlobalContext.Provider value={values}>
        {children}
    </GlobalContext.Provider>

    )

}

export const useWeatherContext = () => useContext(GlobalContext)

export default WeatherContext