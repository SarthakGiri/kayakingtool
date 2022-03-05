import axios from "axios";
import react, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  const [city, setCity] = useState("");
  const [data, setData] = useState();
  const api_key = "12aea8671946f441e82d472e661fbec0";
  const base_url = "http://api.openweathermap.org/data/2.5/weather?";
  const handleSubmit = () => {
    axios
      .get(`${base_url}appid=${api_key}&q=${city}&units=metric`)
      .then((res) => {
        if (res.data.cod === 404) {
          alert("Invalid City Name");
        } else {
          console.log(res.data);
          setData(res.data);
        }
      });
  };

  return (
    <div className="App" style={{ height: "100vh" }}>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100%" }}
      >
        <div className="d-flex flex-column">
          <div className="mb-3">
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              style={{ width: "70%" }}
            ></input>
            <input
              type="submit"
              value="Search"
              onClick={handleSubmit}
              style={{ width: "30%" }}
            ></input>
          </div>
          <table
            className="table table-dark"
            style={{ width: "100%", margin: "0 auto" }}
          >
            <tbody>
              <tr>
                <th>Temperature (in Celsius Units)</th>
                <td>{data?.main.temp}</td>
              </tr>
              <tr>
                <th>Atmospheric pressure (in hPa unit)</th>
                <td>{data?.main.pressure}</td>
              </tr>{" "}
              <tr>
                <th>Humidity (in percentage)</th>
                <td>{data?.main.humidity}</td>
              </tr>{" "}
              <tr>
                <th>Wind speed (in meter/sec)</th>
                <td>{data?.wind.speed}</td>
              </tr>{" "}
              <tr>
                <th>Wind direction (in degrees)</th>
                <td>{data?.wind.deg}</td>
              </tr>{" "}
              <tr>
                <th>Wind gust (in meter/sec)</th>
                <td>{data?.wind.gust}</td>
              </tr>
              <tr>
                <th>Description</th>
                <td>{data?.weather[0].description}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default App;
