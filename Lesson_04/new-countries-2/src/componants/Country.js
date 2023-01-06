import React from "react";

function Country({ country, countryTitle, updateCountryState }) {
  return (
    <tr
      title={countryTitle}
      onClick={() => updateCountryState(country.name, !country.active)}
      className={country.active ? "bg-warning" : ""}
    >
      <td>{country.name}</td>
      <td>{country.capital}</td>
      <td>{country.population}</td>
      <td>{country.area}</td>
      <td>{country.region}</td>
    </tr>
  );
}
export default Country;
