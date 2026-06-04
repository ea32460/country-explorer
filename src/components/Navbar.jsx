import { Link } from "react-router";

export default function Navbar(){
    return (
        <nav style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            padding: "15px",
            background: "#1e3a8a",
        }}
             >
            <Link to="/" style={{ color: "white", textDecoration: "none"}}>
                Home
            </Link>

            <Link to="/countries" style={{ color: "white", textDecoration:"none"}}>
                Countries
            </Link>

            <Link to="/favorites" style={{ color: "white",textDecoration:"none" }}>
                Favorites
            </Link>
        </nav>

    );
}