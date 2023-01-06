import React from "react";

function Country({ country, countryTitle }) {
  return (
    <tr title={countryTitle}>
      <td>{country.name}</td>
      <td>{country.capital}</td>
      <td>{country.population}</td>
      <td>{country.area}</td>
      <td>{country.region}</td>
    </tr>
  );
}

export default Country;
