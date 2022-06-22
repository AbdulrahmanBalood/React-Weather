import { useState, useEffect } from "react";
import "./App.css";
import { ButtonsComponent } from "./components/ButtonsComponent";
import { DataComponent } from "./components/DataComponent";
function App() {
  const [country, setCountry] = useState("");
  const [countryName, setCountryName] = useState("");
  const [temperature, setTemperature] = useState("");
  const [wind, setWind] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(true);

  const onClick = async () => {
    setLoading(true);
    const request = await fetch(
      "https://goweather.herokuapp.com/weather/" + country
    );
    const data = await request.json();
    console.log(data);
    setCountryName(country);
    setTemperature(data.temperature);
    setWind(data.wind);
    setDescription(data.description);
    setLoading(false);
  };
  useEffect(() => {
    const initialDate = async () => {
      setLoading(true);
      const request = await fetch(
        "https://goweather.herokuapp.com/weather/saudi"
      );
      const data = await request.json();
      console.log(data);
      setCountryName("Saudi");
      setTemperature(data.temperature);
      setWind(data.wind);
      setDescription(data.description);
      setLoading(false);
    };
    initialDate();
  }, []);
  return (
    <div className="App">
      {loading ? (
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      ) : (
        <>
          <DataComponent
            countryName={countryName}
            temperature={temperature}
            wind={wind}
            description={description}
          />
          <input
            onChange={(e) => {
              setCountry(e.target.value);
            }}
            className="form-control mt-1"
            type="text"
            placeholder="Enter a country"
            aria-label="default input example"
          />
          <ButtonsComponent buttonName={"Search"} onClick={onClick} />
        </>
      )}
    </div>
  );
}

export default App;
