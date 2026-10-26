import loading from '../assets/images/icon-loading.svg'



export function Button({name , country , status , setSearchResult, setIsLoading , setInputText , setSearchInput, setNotFound}){
  function mmm(e){
    setSearchInput(
      {
        name: e.target.dataset.name,
        country: e.target.dataset.country
      }
    )

    setNotFound(false)
    setSearchResult([])
    setInputText('')
    setIsLoading(true)    
  }

  return(
    <>
      {status==='loading' ? <SearchLoading />:
      status==='notfound' ? <></>:
      status==='error'? <></>:     
      <button 
      data-name={name}
      data-country={country}
      onClick={mmm}    
      >{name} ,{country}</button>}
  </>
)
}

export function SearchLoading(){
  return(
  <div className="searchLoading"> 
    <img className='searchLoadingImg' src ={loading} />
    Search in Progress
  </div>)
}

