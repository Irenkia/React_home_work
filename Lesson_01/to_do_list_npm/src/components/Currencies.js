import React, { useEffect, useState } from "react";
import Currency from "./Currency";
import { Table } from "react-bootstrap";

function Currencies() {
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    fetch(
      "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=20221208&json"
    )
      .then((res) => res.json())
      .then((data) => {
        setCurrencies(data);
      });
  }, []);

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>CC</th>
            <th>Rater</th>
          </tr>
        </thead>
        <tbody>
          {currencies.map((currency) => (
            <Currency currency={currency} key={currency.r030} />
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Currencies;
