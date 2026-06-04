import { Link } from "react-router";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";


export default function Navbar() {
    const { darkMode, toggleTheme } = useContext(ThemeContext);


    return (
        <nav
            style={{
                backgroundColor: darkMode ? "#111" : "#1e3a8a",
                padding: "20px",
                display: "flex",
                justifyContent: "center",
                gap: "30px",
                alignItems: "center",
                position: "sticky",
                top: 0,
                zIndex: 1000,
            }}
        >
            <Link
                to="/"
                style={{
                    color: "white",
                    textDecoration: "none",
                    fontSize: "18px",
                    fontWeight: "bold",
                }}
            >
                Home
            </Link>


            <Link
                to="/countries"
                style={{
                    color: "white",
                    textDecoration: "none",
                    fontSize: "18px",
                    fontWeight: "bold",
                }}
            >
                 Countries
            </Link>


            <Link
                to="/favorites"
                style={{
                    color: "white",
                    textDecoration: "none",
                    fontSize: "18px",
                    fontWeight: "bold",
                }}
            >
                 Favorites
            </Link>


            <button
                onClick={toggleTheme}
                style={{
                    padding: "8px 15px",
                    borderRadius: "8px",
                    border: "none",
                    cursor: "pointer",
                    fontWeight: "bold",
                }}
            >
                {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </button>
        </nav>
    );
}
