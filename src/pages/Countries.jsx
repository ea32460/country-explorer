import {useEffect, useState } from "react";
import CountryCard from "../components/CountryCard.jsx";


export default function Countries(){
    const [countries, setCountries]= useState([]);
    const [loading, setLoading]= useState(true);

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all?fields=name,flags,cca3")
            .then((res)=>res.json())
            .then((data)=> {
                setCountries(data);
                setLoading(false);
            });
    }, []);
    if (loading) return <h2>Loading...</h2>;

    return(
        <div style={{ textAlign: "center"}}>
            <h1>Countries</h1>

            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                }}
>
            {countries.map((country)=>(
                <CountryCard key={country.cca3} country={country} />

            ))}
        </div>
        </div>
    );
}