import './Title.css'
import error from './assets/images/icon-error.svg'
import retry from './assets/images/icon-retry.svg'

export function Title({apiError}){
  function reload(){
    window.location.reload();
  }

  return(
    <div className='title'>
      {apiError ? <div className='errorMessage'>
      <img src={error}/>
      <p>Something went wrong</p> 
      <p className='message'>we coudn't connect to the server(API error).please try aagin in a few moments. </p>
      <button onClick={reload}>
        <img src={retry}/>
        Retry
      </button>
      </div>:
         <h1>How's the sky looking today?</h1>}
    </div>
  )
}