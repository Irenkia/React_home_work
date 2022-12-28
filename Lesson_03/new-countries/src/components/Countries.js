import React, { useEffect, useState } from "react";
import Country from "./Country";
import { Table, FormControl } from "react-bootstrap";

function Countries() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchValue, setSearchValue] = useState("");
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
          }))
        );
      });
  }, []);

  function searchByCountryName(searchName) {
    setSearchValue(searchName);
    const result = countries.filter((country) =>
      country.name.toLowerCase().includes(searchName)
    );
    console.log(result);
    setFilteredCountries(result);
  }

  return (
    <>
      <FormControl
        className="mb-3"
        placeholder="Search"
        aria-label="Search"
        onKeyUp={(e) =>
          searchByCountryName(e.currentTarget.value.toLowerCase().trim())
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
          {searchValue.length
            ? filteredCountries.map((country) => (
                <Country
                  key={country.alpha3Code}
                  country={country}
                  countryTitle={country.name}
                />
              ))
            : countries.map((country) => (
                <Country
                  key={country.alpha3Code}
                  country={country}
                  countryTitle={country.name}
                />
              ))}
          {/* {(searchValue.length ? filteredCountries : countries).map(
            (country) => (
              <Country
                key={country.alpha3Code}
                country={country}
                countryTitle={country.name}
              />
            )
          )} */}
        </tbody>
      </Table>
    </>
  );
}

export default Countries;
