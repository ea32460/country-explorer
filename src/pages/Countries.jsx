import {useEffect, useState } from "react";


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

            {countries.map((country)=>(
                <div key={country.cca3} style={{margin: "10px"}}>
                    <h3>{country.name.common}</h3>
                        <img src={country.flags.png} width="80" />
                </div>
            ))}
        </div>
    );
}