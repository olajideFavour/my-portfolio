import rain from '../assets/images/icon-rain.webp'
import dayjs from 'dayjs'
import sunny from '../assets/images/icon-sunny.webp'
import storm from '../assets/images/icon-storm.webp'
import snow from '../assets/images/icon-snow.webp'
import partlyCloud from '../assets/images/icon-partly-cloudy.webp'
import overcast from '../assets/images/icon-overcast.webp'
import fog from '../assets/images/icon-fog.webp'
import drizzle from '../assets/images/icon-drizzle.webp'
import { Day } from './Daily-component/Day'
import './Daily.css'
import { useState, useEffect } from 'react'


export function Daily({daily , temperature, windSpeed, precipitaions, isLoading}){
   const [dailyTime , setDailyTime] = useState([]);
   const [dailyWeatherCode , setDailyWeatherCode] = useState([]);
   const [dailyMaxTemp , setDailyMaxTemp] = useState([]);
   const [dailyMinTemp , setDailyMinTemp] = useState([]);


  function wmmoDecoder(code){
    if(code === 0){
      return sunny
    }
    else if(code === 95 || code === 96 || code === 99){
      return storm
    }
    else if(code === 71 || code === 73 || code === 75  || code === 77 || code === 85 || code === 86){
      return snow
    }
    else if (code === 61 || code === 63 || code === 65 || code === 80 || code === 81 || code === 82 || code === 69 || code === 67){
      return rain
    }
    else if (code === 1 || code === 2){
      return partlyCloud
    }
    else if(code === 3){
      return overcast
    }
    else if(code === 45 || code === 48){
      return fog
    }
    else if(code === 51 || code === 53 || code === 55 || code === 56 || code === 57){
      return drizzle
    }
  }
 

  function currentdata(){
    if(daily){
        setDailyTime(daily.time);
        setDailyWeatherCode(daily.weatherCode);
        setDailyMinTemp(daily.lowTemp);
        setDailyMaxTemp(daily.highTemp);
     
    }
    
    

  }

  useEffect(() => {
    currentdata();
  }, [daily]);
 
 
 
 
 
 
  return(
    <div className="daily">
      <p className="daily-header">Daily forecast</p>


      {isLoading ? 
      <div className="daily-forecast">
        <Day day='Tue' weather={wmmoDecoder(0)} highTemp={20} lowTemp={13} isLoading={isLoading}/>
        <Day day='Tue' weather={overcast} highTemp={20} lowTemp={13} isLoading={isLoading}/>
        <Day day='Tue' weather={storm} highTemp={20} lowTemp={13} isLoading={isLoading}/>
        <Day day='Tue' weather={snow} highTemp={20} lowTemp={13} isLoading={isLoading}/>
        <Day day='Tue' weather={sunny} highTemp={20} lowTemp={13} isLoading={isLoading}/>
        <Day day='Tue' weather={partlyCloud} highTemp={20} lowTemp={13} isLoading={isLoading}/>
        <Day day='Tue' weather={fog} highTemp={20} lowTemp={13} isLoading={isLoading}/>
      </div>:
        <div className="daily-forecast">
         {dailyTime.map((time ,index) => {
          return (
            <Day
              key={index}
              day={dayjs(dailyTime[index]).format('ddd')}
              weather={wmmoDecoder(dailyWeatherCode[index])}
              highTemp={dailyMaxTemp[index]}
              lowTemp={dailyMinTemp[index]}  
              temperature={temperature}
            />
          )
         })
          
         }  
        </div>
    
    }

    </div>
  )
}