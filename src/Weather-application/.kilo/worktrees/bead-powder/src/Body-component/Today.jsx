import dayjs from 'dayjs'
import sunny from '../assets/images/icon-sunny.webp'
import storm from '../assets/images/icon-storm.webp'
import snow from '../assets/images/icon-snow.webp'
import rain from '../assets/images/icon-rain.webp'
import partlyCloud from '../assets/images/icon-partly-cloudy.webp'
import overcast from '../assets/images/icon-overcast.webp'
import fog from '../assets/images/icon-fog.webp'
import drizzle from '../assets/images/icon-drizzle.webp'
import './Today.css'
import { useState ,useEffect } from 'react'


export function Today({
  current ,
  searchText ,
  temperature, 
  windSpeed, 
  precipitaions,
  isLoading,
  setIsLoading}){

  const name = searchText.name || 'Lagos';
  const country = searchText.country || 'Nigeria';
  const [time , setTime] = useState('');
  const [weatherCode , setWeatherCode] = useState();
  const [temp , setTemp] = useState('');
  const [feelsLike , setFeelsLike] = useState('');
  const [humidity , setHumidity] = useState();
  const [wind , setWind] = useState(0);
  const [precipitaion , setPrecipitaion] = useState();


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
    if(current){
        setIsLoading(false);
        setTime(current.time);
        setWeatherCode(current.weatherCode);
        setTemp(current.temp);
        setFeelsLike(current.feelsLike);
        setHumidity(current.humidity);
        setWind(current.wind);
        setPrecipitaion(current.precipitaions);
     
    }
    
    

  }






  useEffect(() => {
    currentdata();
  }, [current]);


  return (
    <div className="today">
      <div className={`today-board  ${isLoading ? 'board-loading' : '' }`}>
        { isLoading? <div className='itIsLoading'>
          <div className='animation'>
            <div className='loader1 b'>.</div>  
            <div className='loader2 b'>.</div>
            <div className='loader3 b'>.</div>
          </div>
          <p className='loading-text'>Loading...</p>
        
        </div> :
        <>
        <div className='location-date'>
          <h2 className='location'>{name}, {country}</h2>
          <h3>{dayjs().format('dddd, MMM D, YYYY')}</h3>
        </div>
        

        <div className='today-forecast'>
          <img 
            className='weather-img'
            src={`${wmmoDecoder(weatherCode)}`} alt="" 
          />        
          <p className='today-temp'>{temperature === 'celsius' ? (((temp - 32) * 5/9).toFixed(1)) : temp}°{temperature === 'celsius' ? 'c' : 'f'}</p>
        </div>
        </>}
         
      </div>

      <div className='forecast'>
        <div className='forecast-section forecast-temperature'>
          <p className='forecast-heading'>Feels like </p>
          {isLoading ? 
          <>
          _____
          </>:
            
          <p className='value'>{temperature === 'celsius' ?  (((feelsLike - 32) * 5/9).toFixed(1) ) : feelsLike} °{temperature === 'celsius' ? 'c' : 'F'}</p>}
        </div>
        <div className='forecast-section forecast-humidity'>
          <p className='forecast-heading'>Humidity</p>
          {
          isLoading ? 
          <>
          _____
          </>:
            
          <p className='value'>{humidity} %</p>}
        </div>
        <div className='forecast-section forecast-wind'>
          <p className='forecast-heading'>Wind</p>
          {
          isLoading ? 
          <>
          _____
          </>:
            
          <p className='value'>{windSpeed === 'mph' ? wind : ((wind * 1.60934).toFixed(1) ) } {windSpeed === 'mph' ? 'mph' : "km\h"}</p>}
        </div>
        <div className='forecast-section forecast-precipitation'>
          <p className='forecast-heading'>Precipitation </p>
          {
          isLoading ? 
          <>
          _____
          </>:
            
          <p className='value'>{precipitaions === 'mm' ? ((precipitaion * 2.54).toFixed(1)) : precipitaion} {precipitaions === 'mm' ? 'mm' : 'in'}</p>}
        </div>
      </div>
    </div>
  )
}