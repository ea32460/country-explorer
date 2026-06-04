import { Link } from "react-router";


export default function CountryCard({ country, onFavorite, isFavorite }) {
    return (
        <Link
            to={`/country/${country.name.common}`}
            style={{ textDecoration: "none", color: "black" }}
        >
            <div
                style={{
                    border: "1px solid #ddd",
                    borderRadius: "10px",
                    padding: "10px",
                    margin: "10px",
                    width: "160px",
                    textAlign: "center",
                    background: "white",
                    cursor: "pointer",
                }}
            >
                <img src={country.flags.png} width="100" />
                <h4>{country.name.common}</h4>


                <button
                    onClick={(e) => {
                        e.preventDefault(); // mos e hap page kur klikon button
                        onFavorite(country);
                    }}
                    style={{
                        marginTop: "8px",
                        padding: "5px",
                        cursor: "pointer",
                    }}
                >
                    {isFavorite ? "★ Remove" : "☆ Favorite"}
                </button>
            </div>
        </Link>
    );
}
