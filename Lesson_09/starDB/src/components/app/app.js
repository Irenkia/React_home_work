import React,{useState,useEffect} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import Service from '../../services/service';
//import { people } from '../../services/service';

import './app.css';

const App = () => {
  const[entity, setEntity] =useState(null);
  useEffect(()=>{
    new Service().getStarships()
    .then((data)=>{setEntity(data.results)})
    .catch((message)=>{console.error(message)})
  },[]);
  //  -- 1  version-------------------------------------------------------------------
  // useEffect(()=>{
  //   people('https://swapi.dev/api/people/').then((data)=>{setEntity(data.results)});
  // },[]); //в конце пустой массив, чтобы стр загружалась только один раз

  return (
<div>
      <Header />
      <RandomPlanet />

      <div className="row mb2">
        
      <div className="col-md-6">
          <ItemList entity={entity}/>
        </div>

        <div className="col-md-6">
          <PersonDetails />
        </div>
      </div>
</div>
  );
};

export default App;