import dayjs from 'dayjs'

export function Hour({weather , time , temperature, temp , isLoading}) {
  return(
    <div className="hour">
      {isLoading ? <></>
      
      :
      <>
        <div className='time-weather'>
          <img className="hour-weather"  src={weather}/>
          <p className="time">{dayjs(time).format('h A')}</p>
        </div>
        <p className='temp'>{temperature === 'celsius' ? (((temp - 32) * 5/9).toFixed(1)) : temp.toFixed(1)}°</p>
      </>}
    </div>
  )
}