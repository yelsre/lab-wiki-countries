import React from 'react';
import countriesJson from '../../countries.json';
import {Link} from 'react-router-dom';

function CountryDetails(props) {
    console.log(props);
    const theCountry = countriesJson.find((country) => country.cca3 === props.match.params.countryId);

    return (
        <div className="col-7">
            <h1>{theCountry.name.common}</h1>
            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td style={{width: "30%"}}>Capital</td>
                        <td>{theCountry.capital[0]}</td>
                    </tr>
                    <tr>
                        <td style={{width: "30%"}}>Area</td>
                        <td>{theCountry.area} km<sup>2</sup></td>
                    </tr>
                    <tr>
                        <td style={{width: "30%"}}>Borders</td>
                        <td>
                            <ul>
                                {theCountry.borders.map(country => {
                                    return <li>
                                        <Link to={`/${country}`}>{countriesJson.find(el => el.cca3 === country)?.name.common}</Link>
                                        {/* The question mark - not every browser accepts it yet. It validates if its available and doesnt freak out. But its recent syntax */}
                                    </li>
                                })}
                            </ul>
                        </td>
                    </tr>
                </tbody>

            </table>
        </div>
    )
}

export default CountryDetails
