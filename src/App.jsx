import { Routes, Route } from "react-router";
import { useEffect, useState } from "react";


import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Countries from "./pages/Countries";
import Favorites from "./pages/Favorites";
import { useContext} from "react";
import {ThemeContext} from "./context/ThemeContext.jsx";


import CountryDetails from "./pages/CountryDetails";


function App() {
  const {darkMode} = useContext(ThemeContext);
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });


  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);


  const toggleFavorite = (country) => {
    setFavorites((prev) => {
      const exists = prev.find((c) => c.cca3 === country.cca3);


      if (exists) {
        return prev.filter((c) => c.cca3 !== country.cca3);
      } else {
        return [...prev, country];
      }
    });
  };


  return (
      <div
          style={{
            backgroundColor: darkMode ? "#121212" : "#f5f5f5",
            color: darkMode ? "white" : "black",
            minHeight: "100vh",
            transition: "0.3s",
          }}
      >
        <Navbar/>


        <Routes>
          <Route path="/" element={<Home/>}/>


          <Route
              path="/countries"
              element={
                <Countries
                    favorites={favorites}
                    toggleFavorite={toggleFavorite}
                />
              }
          />


          <Route
              path="/favorites"
              element={<Favorites favorites={favorites}/>}
          />


          <Route path="/country/:name" element={<CountryDetails/>}/>
        </Routes>
      </div>
  );
}


export default App;

