import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";


export default function Favorites({ favorites }) {
    const { darkMode } = useContext(ThemeContext);


    return (
        <div
            style={{
                textAlign: "center",
                padding: "40px 20px",
                minHeight: "80vh",
                color: darkMode ? "white" : "black",
                transition: "0.3s",
            }}
        >
            <h1>⭐ Favorites</h1>


            {favorites.length === 0 ? (
                <p style={{ color: darkMode ? "#ccc" : "#555" }}>
                    No favorite countries yet
                </p>
            ) : (
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        gap: "20px",
                        marginTop: "20px",
                    }}
                >
                    {favorites.map((c) => (
                        <div
                            key={c.cca3}
                            style={{
                                background: darkMode ? "#1e1e1e" : "white",
                                color: darkMode ? "white" : "black",
                                padding: "15px",
                                borderRadius: "15px",
                                width: "180px",
                                boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                                transition: "0.3s",
                            }}
                        >
                            <img src={c.flags.png} width="100" />
                            <h4>{c.name.common}</h4>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
