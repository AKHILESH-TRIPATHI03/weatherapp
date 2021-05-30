import React, { useEffect, useState } from "react";

function App() {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("varanasi");
  const [loading, setloading] = useState(true);
  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=88fb926817cfb7b68abbfe463ab29ca8`;
    fetch(url)
      .then((data) => {
        return data.json();
      })
      .then((maindata) => {
        setCity(maindata);
        setloading(false);
      });
  }, [search]);
  if (loading) return <h1>loading...</h1>;
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="type-cityname"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
          {!city ? (
            <p>no data found</p>
          ) : (
            <div>
              <div className="location-box">
                <div className="location">{search}</div>
                {/* <div className="date"></div> */}
              </div>
              <div className="weather-box">
                <div className="temp">{city.main.temp}°c</div>
                <div className="weather">{city.weather[0].main}rainy</div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
