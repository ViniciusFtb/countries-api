import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { CountriesContainer } from "./styles";

interface Country{
    name: {
        common: string
    },
    region: string,
    capital: [],
    population: number,
    flags: {
        svg: string
    }
}

export function CountriesList(){
    const [countries, setCountries] = useState<Country[]>([]);
    useEffect(() => {
        api.get('all')
            .then(response => setCountries(response.data))
    });

    return (
        <CountriesContainer>
            {countries.map(country => {
                return(
                    <div key={country.name.common} className="wrapper">
                        <img src={country.flags.svg} alt={`${country.name.common}'s flag`}/>
                        <div className="content">
                            <h2>{country.name.common}</h2>
                            <p>
                                <strong>Popuplation: </strong>
                                {country.population}
                            </p>
                            <p>
                                <strong>Region: </strong>
                                {country.region}
                            </p>
                            <p>
                                <strong>Capital: </strong>
                                {country.capital}
                            </p>
                        </div>
                    </div>
                );
            })}
        </CountriesContainer>
    );
}