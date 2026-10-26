import { Today } from "./Body-component/Today";
import { Daily } from "./Body-component/Daily";
import { Hourly } from "./Body-component/Hourly";
import "./Body.css";
import { useEffect, useState } from "react";
import axios from "axios";

export function Body({
  temperature,
  windSpeed,
  precipitaions,
  notFound,
  setNotFound,
  searchText,
  apiError,
  setApiError,
  setIsLoading,
  isLoading,
}) {
  const [current, setCurrent] = useState();
  const [daily, setDaily] = useState();
  const [hourly, setHourly] = useState();

  const name = searchText.name || "Lagos";
  const country = searchText.country || "Nigeria";

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await axios.get(
          `https://geocoding-api.open-meteo.com/v1/search?name=${name}&country=${country}&count=1`
        );
        const data = response.data;
        const details = data.results.map((items) => ({
          longitude: items.longitude,
          latitude: items.latitude,
        }));

        const longitude = details[0].longitude;
        const latitude = details[0].latitude;

        const weatherData = await axios.get(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=temperature_2m,weather_code&current=temperature_2m,weather_code,relative_humidity_2m,wind_speed_10m,precipitation,apparent_temperature&timezone=auto&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch`
        );

        if (!weatherData.data) {
          setApiError(true);
        }

        const now = weatherData.data.current;
        setCurrent({
          time: now.time,
          weatherCode: now.weather_code,
          temp: now.temperature_2m,
          feelsLike: now.apparent_temperature,
          humidity: now.relative_humidity_2m,
          wind: now.wind_speed_10m,
          precipitaions: now.precipitation,
        });

        

        const day = weatherData.data.daily;

        setDaily({
          highTemp: day.temperature_2m_max,
          lowTemp: day.temperature_2m_min,
          time: day.time,
          weatherCode: day.weather_code,
        });


        const hour = weatherData.data.hourly;
        setHourly({
          temperature: hour.temperature_2m,
          time: hour.time,
          weatherCode: hour.weather_code,
        });


      } catch (error) {
        setApiError(true);
      }
    };

    loadData();
  }, [searchText]);


  return (
    <div className="Body">
      {notFound ? (
        <>
          <p className="notFoundMessage">No Search result Found</p>
        </>
      ) : (
        <>
          <div className="first-section">
            <Today
              current={current}
              temperature={temperature}
              windSpeed={windSpeed}
              precipitaions={precipitaions}
              searchText={searchText}
              apiError={apiError}
              setApiError={setApiError}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            />
            <Daily
              daily={daily}
              temperature={temperature}
              windSpeed={windSpeed}
              precipitaions={precipitaions}
              setApiError={setApiError}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            />
          </div>
          <Hourly
            hourly={hourly}
            setApiError={setApiError}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            temperature={temperature}
          />
        </>
      )}
    </div>
  );
}
