import React, { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((country) => setCountries(country))
      .catch((e)=> console.log(e));
  }, [search]);

  const filteredCountries = countries.filter((country) =>
  country.name.common.toLowerCase().includes(search.toLowerCase())
);

  return (

    <>
    <div className="searchbar">
        <input placeholder="Search for Countries..." type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
    </div>
    <div className="App">
      { filteredCountries.map((country) => (
      <div className="countryCard" key={country.cca3}>
        <img src={country.flags.png} alt={country.flags.alt} />
        <h2>{country.name.common}</h2>
      </div>
      ))
      }
    </div>

    </>
     );
}