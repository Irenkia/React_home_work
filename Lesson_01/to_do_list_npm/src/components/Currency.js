import React from "react";

function Currency({ currency }) {
  return (
    <tr>
      <td>{currency.name}</td>
      <td>{currency.cc}</td>
      <td>{currency.rate}</td>
    </tr>
  );
}

export default Currency;
