import React from 'react';
import './App.css';

import { Route } from 'react-router-dom';

import NavBar from './components/navbar/NavBar';
import CountriesList from './components/countrieslist/CountriesList';
import CountryDetails from './components/countrydetails/CountryDetails';

function App() {
  return (
    <div className="container">
      <NavBar />
      <div className="row">
        <Route path="/" component={CountriesList} />
        <Route path="/:countryId" component={CountryDetails} />
      </div>
    </div>
  );
}

export default App;
