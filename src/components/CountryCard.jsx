export default function CountryCard({ country}) {
    return (
        <div style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "10px",
        margin: "10px",
        width: "160px",
        textAlign: "center",
        background: "white",
        }}
             >
            <img src={country.flags.png} width="100" />
            <h4>{country.name.common}</h4>
        </div>
    );
}