import React from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/app.css";

function App() {
  return (
    <div className="container bg-white p-3">
      <Header />
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
