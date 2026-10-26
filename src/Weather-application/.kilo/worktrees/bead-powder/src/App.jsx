import "./App.css";
import { Header } from "./Header";
import { Title } from "./Title";
import { Search } from "./Search";
import { Body } from "./Body";
import { useState } from "react";

function App() {
  const [searchText, setSearchInput] = useState([]);
  const [temperature, setTemperature] = useState("celsius");
  const [windSpeed, setWindSpeed] = useState("km\h");
  const [precipitaions, setPrecipitations] = useState("mm");
  const [notFound , setNotFound] = useState(false)
  const [apiError , setApiError] = useState(false)
  const [isLoading , setIsLoading] = useState (true);
  return (
    <div className="App">
      <Header
        temperature={temperature}
        setTemperature={setTemperature}
        windSpeed={windSpeed}
        setWindSpeed={setWindSpeed}
        precipitaions={precipitaions}
        setPrecipitations={setPrecipitations}
      />
      <Title 
        apiError={apiError}
      />
      
      { apiError ? <></> :
      <>
      <Search 
      searchText={searchText} 
      setSearchInput={setSearchInput} 
      notFound ={notFound}
      setNotFound={setNotFound}
      setApiError={setApiError}
      setIsLoading={setIsLoading}
      />
      <Body 
        temperature={temperature}
        windSpeed={windSpeed}
        precipitaions={precipitaions}
        notFound ={notFound}
        setNotFound ={setNotFound}
        searchText={searchText} 
        setSearchInput={setSearchInput} 
        apiError={apiError}
        setApiError={setApiError}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
      </>}
    </div>
  );
}

export default App;
