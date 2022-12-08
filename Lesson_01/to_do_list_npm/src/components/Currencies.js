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
        setCurrencies(
          data.map((currency) => ({
            id: currency.r030,
            name: currency.txt,
            cc: currency.cc,
            rate: currency.rate,
          }))
        );
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
            <Currency currency={currency} key={currency.id} />
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Currencies;
