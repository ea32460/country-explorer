import { useEffect, useState } from "react";
import { useParams } from "react-router";


export default function CountryDetails() {
    const { name } = useParams();
    const [country, setCountry] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${name}`)
            .then((res) => res.json())
            .then((data) => {
                setCountry(data[0]);
                setLoading(false);
            });
    }, [name]);


    if (loading) return <h2>Loading...</h2>;
    if (!country) return <h2>No data found</h2>;


    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h1>{country.name.common}</h1>


            <img src={country.flags.png} width="150" />


            <p><b>Capital:</b> {country.capital}</p>
            <p><b>Population:</b> {country.population.toLocaleString()}</p>
            <p><b>Region:</b> {country.region}</p>
        </div>
    );
}

