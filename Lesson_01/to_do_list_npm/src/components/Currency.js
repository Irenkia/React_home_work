import React from "react";

function Currency({ currency }) {
  return (
    <tr>
      <td>{currency.txt}</td>
      <td>{currency.cc}</td>
      <td>{currency.rate}</td>
    </tr>
  );
}

export default Currency;
