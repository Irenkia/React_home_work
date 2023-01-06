import React, { useEffect, useState } from "react";
import { Table, FormControl } from "react-bootstrap";
import Country from "./Country";

function Countries() {
  const [countries, setCountries] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCountries(
          data.map((country) => ({
            alpha3Code: country.alpha3Code,
            name: country.name,
            capital: country.capital || "---",
            population: country.population || 0,
            area: country.area || 0,
            region: country.region,
            active: false,
          }))
        );
      });
  }, []);

  function searchByCountryName(value) {
    setSearchValue(value);
    const result = countries.filter((country) =>
      country.name.toLowerCase().trim().includes(value)
    );
    setFilteredCountries(result);
  }

  function updateCountryState(countryName, activeState) {
    let result = [];
    for (let country of countries) {
      if (country.name === countryName) {
        country.active = activeState;
      }
      result.push(country);
    }
    setCountries(result);
  }

  return (
    <>
      <FormControl
        className="mb-3"
        placeholder="Search"
        aria-label="Search"
        onKeyUp={(e) =>
          searchByCountryName(e.currentTarget.value.toLocaleLowerCase().trim())
        }
      />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Capital</th>
            <th>Population</th>
            <th>Area</th>
            <th>Region</th>
          </tr>
        </thead>
        <tbody>
          {(searchValue.length ? filteredCountries : countries).map(
            (country) => (
              <Country
                key={country.alpha3Code}
                country={country}
                countryTitle={country.name}
                updateCountryState={updateCountryStateP}
              />
            )
          )}
        </tbody>
      </Table>
    </>
  );
}

export default Countries;
