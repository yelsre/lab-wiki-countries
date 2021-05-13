import React from 'react';
import {Link} from 'react-router-dom';

import countriesList from "../../countries.json";

function CountriesList() {
    return (
          <div className="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>
            <div className="list-group">
            {countriesList.map((country) => {
                return  (
                <Link to={`/${country.cca3}`} className="list-group-item list-group-item-action" key={country.cca3}>
                    {country.flag} {country.name.common}</Link>
                    )
            })}
              <a className="list-group-item list-group-item-action" href="/ABW" > Aruba</a>
            </div>
          </div>
    )
}

export default CountriesList
