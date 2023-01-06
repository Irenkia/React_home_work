import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Country from "./Country";

function Countries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCountries(
          data.map((country) => ({
            alpha3Code: country.alpha3Code,
            name: country.name,
            capital: country.capital,
            population: country.population,
            area: country.area,
            region: country.region,
          }))
        );
      });
  }, []);

  return (
    <>
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
          {countries.map((country) => (
            <Country
              key={country.alpha3Code}
              country={country}
              countryTitle={country.name}
            />
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default Countries;
