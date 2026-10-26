import searchIcon from "./assets/images/icon-search.svg";
import { useState , useRef} from "react";
import "./Search.css";
import { Button, SearchLoading} from "./Search-component/Button";


export function Search({searchText, setSearchInput, setApiError, setNotFound, setIsLoading}) {
  const [inputText, setInputText] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);
  const resultRef = useRef(null);


 

  function search() {
    setNotFound(false)
    if(!inputText) return;
    setInputText("");    
    searchResult.forEach(value => {
      if(value.status === 'notfound'){
        setNotFound(true);
      }
    })
    setSearchInput(
      {
        name:  searchResult[0].name,
        country: searchResult[0].country
      }
    )    
    resultRef.current.style.display ='none';
    setIsLoading(true)
  }
  
  function enterSearch(event){
    if(event.key === 'Enter'){
      search()
    }
  }

  function saveInputText(event) {
    setInputText(event.target.value);
    if(event.target.value === ''){
      resultRef.current.style.display = 'none'
      setSearchResult([])
    }else{
      resultRef.current.style.display ='block'
    }
    loadSearch(event.target.value)
  }

  async function loadSearch(value) {
    if (!value.trim()) return;

    setSearchLoading(true)
    setSearchResult([{status: "loading"}]); 
    
    
    try{
      const response = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${value}&count=4`
      );
      const data = await response.json();

      if (data.results){
        const newarray = data.results.map((items) => ({
          name : items.name,
          country: items.country, 
          id : crypto.randomUUID()
        })) 
        setSearchResult(newarray)
      }
      else {
        setSearchResult([{status :  'notfound'}])
        return;
      }
    } catch (error){
      console.error('Error fetch', error);
      setApiError(true)
    }


  }



  return (
    <div className="search">
      <div className="search-section">
        <img className="search-icon" src={searchIcon} />
        <input
          placeholder="Send a message to Chatbot"
          size="30"
          onKeyDown={enterSearch}
          onChange={saveInputText}
          value={inputText}
          className="search-input"
        ></input>
        <div className="search-result" ref={resultRef}>
        
          {searchResult.map((item ,index) => (
            <div key={index} className='result'>
            {<Button name ={item.name}
             country ={item.country}
              status={item.status} 
              setSearchResult={setSearchResult}
              setInputText={setInputText}  
              setSearchInput= {setSearchInput}
              setIsLoading={setIsLoading}
              setNotFound={setNotFound}
            />}
            </div>
          ))}


        </div>
      </div>

      <button className="search-btn" onClick={search}>
        Search
      </button>
    </div>
  );
}
