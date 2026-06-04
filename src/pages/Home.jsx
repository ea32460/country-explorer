import { Link } from "react-router";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";


export default function Home() {
    const { darkMode } = useContext(ThemeContext);


    const cardStyle = {
        background: darkMode ? "#1e1e1e" : "white",
        color: darkMode ? "white" : "black",
        padding: "20px",
        borderRadius: "15px",
        width: "220px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
        transition: "0.3s",
    };


    return (
        <div
            style={{
                minHeight: "80vh",
                position: "relative",
                padding: "60px 20px",
                textAlign: "center",
                color: darkMode ? "white" : "black",


                backgroundImage:
                    "url(https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1)",


                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: darkMode
                        ? "rgba(0,0,0,0.75)"
                        : "rgba(255,255,255,0.6)",
                    zIndex: 0,
                }}
            />


            <div style={{ position: "relative", zIndex: 2 }}>
                <h1 style={{ fontSize: "3rem", marginBottom: "10px" }}>
                    🌍 Country Explorer
                </h1>


                <h2 style={{ color: darkMode ? "#ddd" : "#555" }}>
                    Discover the World One Country at a Time
                </h2>


                <p
                    style={{
                        maxWidth: "800px",
                        margin: "30px auto",
                        fontSize: "20px",
                        lineHeight: "1.8",
                    }}
                >
                    Have you ever wondered how many countries there are in the world,
                    where they are located, what languages they speak, or how large their
                    population is? Country Explorer helps you learn about countries in an
                    interactive and enjoyable way.
                </p>


                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "20px",
                        flexWrap: "wrap",
                        marginTop: "40px",
                    }}
                >
                    <div style={cardStyle}>
                        <h3>🌎 Explore</h3>
                        <p>Browse countries from all around the world.</p>
                    </div>


                    <div style={cardStyle}>
                        <h3>🔍 Search</h3>
                        <p>Find countries instantly by name.</p>
                    </div>


                    <div style={cardStyle}>
                        <h3>⭐ Save</h3>
                        <p>Keep your favorite countries in one place.</p>
                    </div>
                </div>


                <Link
                    to="/countries"
                    style={{
                        display: "inline-block",
                        marginTop: "50px",
                        padding: "15px 30px",
                        backgroundColor: darkMode ? "#3b82f6" : "#2563eb",
                        color: "white",
                        textDecoration: "none",
                        borderRadius: "10px",
                        fontSize: "18px",
                        fontWeight: "bold",
                    }}
                >
                    Start Exploring
                </Link>
            </div>
        </div>
    );
}

