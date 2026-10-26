

export function Day({day , weather , highTemp , lowTemp, isLoading , temperature}){

  return(
    <div className="daily-fore-sec">


      {isLoading ? <div className="dayloading">
      
      </div>
      
      :
      <>
      <p className="fore-day">{day}</p>
      <img className="daily-weather" src={weather} />
      <div className="high-low-temp">
        <p className="high-temp">{temperature === 'celsius' ? (((highTemp - 32) * 5/9).toFixed(0)) : highTemp.toFixed(0)}°</p>
        <p className="low-temp">{temperature === 'celsius' ? (((lowTemp - 32) * 5/9).toFixed(0)) : lowTemp.toFixed(0)}°</p>    
      </div>
      </>
      }
    </div>
     
  )
}