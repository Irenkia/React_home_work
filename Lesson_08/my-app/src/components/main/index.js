import React, { Component } from "react";
import Section from "../section";
//import Button from "../button";
import { Routes, Route } from 'react-router-dom';
// import {
//   BrowserRouter as Routes,
//   // Switch,
//   Route,
//   // Link
// } from "react-router-dom";
import NavBar from "../nav-bar";
import "./main.css";

export default class Main extends Component {
  render() {
    //     1 version
    // let promis = fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json');
    // console.log(promis);
    // promis.then((data)=>{return data.json()}).then((data1)=>{return console.log(data1)});
    //     2 version
    // const data = async (url) => {
    //   const data1 = await fetch(url);
    //   return data1.json();
    // };
    // let result = null;
    // console.log(
    //   data(
    //     "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json"
    //   ).then((data1) => {
    //     result = data1;
    //   })
    // );
    // console.log(result);
    return (
      <>
      <NavBar />
      <Routes>
      {/* <header>
            <Button value={1}/>
            <Button value={2}/>
            <Button value={3}/>
        </header> */}
        <Route path="/" element={<Section url='https://bank.gov.ua/NBUStatService/v1/statdirectory/fdis?json'/>}>

        </Route>
        <Route path="/currency"  element={<Section url='https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'/>}>

        </Route>
        <Route path="/bank-info"  element={<Section url='https://bank.gov.ua/NBUStatService/v1/statdirectory/basindbank?date=20160101&period=m&json'/>}>

        </Route>
      </Routes>
      </>
    );
  }
}
//https://bank.gov.ua/