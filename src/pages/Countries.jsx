import { useEffect, useState, useMemo, useCallback, useRef } from "react";
import CountryCard from "../components/CountryCard";


export default function Countries({ favorites, toggleFavorite }) {
    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);


    const inputRef = useRef(null);
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all?fields=name,flags,cca3,population,region,capital")
            .then((res) => res.json())
            .then((data) => {
                setCountries(data);
                setLoading(false);
            });
    }, []);
    const handleFavorite = useCallback(
        (country) => {
            toggleFavorite(country);
        },
        [toggleFavorite]
    );
    const filteredCountries = useMemo(() => {
        return countries.filter((c) =>
            c.name.common.toLowerCase().includes(search.toLowerCase())
        );
    }, [countries, search]);


    if (loading) return <h2>Loading...</h2>;


    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h1>🌍 All Countries</h1>
            <div>
                <input
                    ref={inputRef}
                    placeholder="Search country..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={{ padding: "8px", marginRight: "10px" }}
                />


                <button onClick={() => inputRef.current.focus()}>
                    Focus Search
                </button>
            </div>


            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    marginTop: "20px",
                }}
            >
                {filteredCountries.map((country) => (
                    <CountryCard
                        key={country.cca3}
                        country={country}
                        onFavorite={handleFavorite}
                        isFavorite={favorites.some((f) => f.cca3 === country.cca3)}
                    />
                ))}
            </div>
        </div>
    );
}
