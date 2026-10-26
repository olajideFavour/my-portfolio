import logo from "./assets/images/logo.svg";
import unit from "./assets/images/icon-units.svg";
import dropdown from "./assets/images/icon-dropdown.svg";
import check from "./assets/images/icon-checkmark.svg";
import "./Header.css";
import { useRef, useState } from "react";

export function Header({
  temperature,
  setTemperature,
  windSpeed,
  setWindSpeed,
  precipitaions,
  setPrecipitations,
}) {
  const [open, setOpen] = useState(false);
  const optionref = useRef(null);
  const [measurement , setMeasurement] = useState('Imperial')

  function measurementSwitch(){
    if(measurement === 'Imperial'){
      preciIn() 
      tempFahrenheit()
      speedMp()
      setMeasurement('Metric (SI)')
    }
    else{
      speedKm()
      tempCelsius()
      preciMm()
      setMeasurement('Imperial')
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
  function tempCelsius() {
    setTemperature("celsius");
  }
  function tempFahrenheit() {
    setTemperature("fahrenheit");
  }
  function speedKm() {
    setWindSpeed("km\h");
  }
  function speedMp() {
    setWindSpeed("mph");
  }
  function preciMm() {
    setPrecipitations("mm");
  }
  function preciIn() {
    setPrecipitations("in");
  }

  return (
    <div className="header">
      <img src={logo} />
      <div className="unit-drop-down">
        <div className="unit-header" onClick={togleUnit}>
          <img src={unit} /> Units <img src={dropdown} />
        </div>

        <div className="unit-option" ref={optionref}>
          <h4
            onClick={measurementSwitch}
          >Switch to {measurement}</h4>

          <div className="option unit-temperature">
            <h5>Temperature</h5>
            <button
              className={temperature === "celsius" ? "check" : ""}
              onClick={tempCelsius}
            >
              <h6>Celsius(°C)</h6>
              {temperature === "celsius" ? <img src={check} /> : <></>}
            </button>

            <button
              className={temperature === "fahrenheit" ? "check" : ""}
              onClick={tempFahrenheit}
            >
              <h6>Fahrenheit(°F)</h6>
              {temperature === "fahrenheit" ? <img src={check} /> : <></>}
            </button>
          </div>

          <div className="option unit-wind-speed">
            <h5>Wind Speed</h5>
            <button
              className={windSpeed === "km\h" ? "check" : ""}
              onClick={speedKm}
            >
              <h6>km/h</h6>
              {windSpeed === "km\h" ? <img src={check} /> : <></>}
            </button>

            <button
              className={windSpeed === "mph" ? "check" : ""}
              onClick={speedMp}
            >
              <h6>mph</h6>
              {windSpeed === "mph" ? <img src={check} /> : <></>}
            </button>
          </div>

          <div className="option unit-precipitaions">
            <h5>Precipitations</h5>

            <button
              className={precipitaions === "mm" ? "check" : ""}
              onClick={preciMm}
            >
              <h6>Millimeters(mm) </h6>
              {precipitaions === "mm" ? <img src={check} /> : <></>}
            </button>

            <button
              className={precipitaions === "in" ? "check" : ""}
              onClick={preciIn}
            >
              <h6>Inches(in)</h6>
              {precipitaions === "in" ? <img src={check} /> : <></>}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
