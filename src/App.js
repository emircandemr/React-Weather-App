import './App.css';
import Content from './components/Content/Content';
import Home from './components/Home/home';
import { Route ,Routes  } from 'react-router-dom';
import { useContext, useState } from 'react';
import { useWeatherContext } from './context/Context';

function App() {

  const { noData ,
    setNoData,
    weatherCurrent , 
    setWeatherCurrent,
    city,
    setCity,
    weatherIcon ,
    setWeatherIcon,
    weatherDaily , 
    setWeatherDaily} = useWeatherContext()

  return (
    <div className=' w-full h-screen flex justify-center items-center bg-gray-200 '>

      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/weather' element={<Content/>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
