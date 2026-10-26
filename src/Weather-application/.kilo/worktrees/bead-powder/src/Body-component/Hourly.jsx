import rain from '../assets/images/icon-rain.webp'
import dayjs from 'dayjs'
import sunny from '../assets/images/icon-sunny.webp'
import storm from '../assets/images/icon-storm.webp'
import snow from '../assets/images/icon-snow.webp'
import partlyCloud from '../assets/images/icon-partly-cloudy.webp'
import overcast from '../assets/images/icon-overcast.webp'
import fog from '../assets/images/icon-fog.webp'
import drizzle from '../assets/images/icon-drizzle.webp'
import dropdown from "../assets/images/icon-dropdown.svg";
import './Hourly.css'
import { Hour } from "./Hourly.component/Hour"
import { useState ,useRef, useEffect } from 'react'

export function Hourly({hourly , isLoading ,temperature}){
  const [open, setOpen] = useState(false);
  const optionref = useRef(null);
  const [selectedDay , setSelectedDay] = useState(dayjs().format('dddd'));
  const [time , setTime] = useState([]);
  const [weatherCode , setWeatherCode] = useState([]);
  const [temp , setTemp] = useState([]);
  const [hourlyData , setHourlyData] = useState(null)

  useEffect(()=> {
    if(hourly){
      const newHourly = hourly.time.map((time , index) =>({
      day: dayjs(time).format('dddd'),
        time: time,
        temp: hourly.temperature[index],
        weather: hourly.weatherCode[index]
      }));

      const selectedHourly = newHourly.filter( item => item.day.toLowerCase() === selectedDay.toLowerCase())
      setHourlyData(selectedHourly)
    }
  } , [hourly ,selectedDay])
    


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

  function togleUnit() {
    if (open) {
      optionref.current.style.height = "0px";
      optionref.current.style.border = "none";
      setOpen(false);
    } else {
      optionref.current.style.height = "auto";
      optionref.current.style.border = "solid hsl(243, 23%, 30%) 1px";
      setOpen(true);
    }
  }
  
  function doNothing(){
    return;
  }

  function selectDay(event){
    setSelectedDay(event.target.textContent);
    togleUnit();
  }


  



  return(
    <div className="hourly">
      <div className="hourly-header">
        <p className='hour-head'>Hourly forecast</p>
        <div className='day-drop-down'>
          <div className='day-drop-down-header' onClick={isLoading ?   doNothing : togleUnit }>
            <p className='selected-day'>{isLoading ? '__' : selectedDay}</p>
            <img className='drop-down-icon'  src={dropdown}/>
          </div>
          <div className='day-options' ref={optionref}>
            <button onClick={selectDay}>Monday</button>
            <button onClick={selectDay}>Tuesday</button>
            <button onClick={selectDay}>Wednesday</button>
            <button onClick={selectDay}>Thursday</button>
            <button onClick={selectDay}>Friday</button>
            <button onClick={selectDay}>Saturday</button>
            <button onClick={selectDay}>Sunday</button>
          </div>
        </div>
      </div>
      <div className="hourly-forecast">
        {isLoading?
          <>  
            <Hour weather={fog} time={'2025-10-25T18:00'} temp={20} isLoading={isLoading}/> 
            <Hour weather={drizzle} time={'2025-10-25T18:00'} temp={20} isLoading={isLoading}/> 
            <Hour weather={rain} time={'2025-10-25T18:00'} temp={20} isLoading={isLoading}/> 
            <Hour weather={snow} time={'2025-10-25T18:00'} temp={20} isLoading={isLoading}/> 
            <Hour weather={storm} time={'2025-10-25T18:00'} temp={20} isLoading={isLoading}/> 
            <Hour weather={storm} time={'2025-10-25T18:00'} temp={20} isLoading={isLoading}/> 
            <Hour weather={storm} time={'2025-10-25T18:00'} temp={20} isLoading={isLoading}/> 
            <Hour weather={storm} time={'2025-10-25T18:00'} temp={20} isLoading={isLoading}/> 
            <Hour weather={storm} time={'2025-10-25T18:00'} temp={20} isLoading={isLoading}/>  
          </>
          :
          <>
          {hourlyData.map((item)=> {
            return(
              <Hour weather={wmmoDecoder(item.weather)} time={item.time} temperature={temperature} temp={item.temp} key={crypto.randomUUID()}/> 
            )
          })

          }

          </>        
        }
      </div>
    </div>
  )
}