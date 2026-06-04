import {Routes, Route } from "react-router";

import Home from "./pages/Home";
import Countries from "./pages/Countries";
import Favorites from "./pages/Favorites";
import CountryDetails from "./pages/CountryDetails";
import Navbar from "./components/Navbar.jsx";
import {useEffect, useState} from "react";


export default function App(){
  const [favorites, setFavorites]= useState(()=>{
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(()=>{
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite =(country)=> {
    setFavorites((prev)=>{
      const exists=prev.find((c)=> c.cca3 ===country.cca3);

      if (exists) {
        return prev.filter((c) => c.cca3 !== country.cca3);
      }else{
        return [...prev,country];
      }
    });
  };

  return (
      <div style={{
        backgroundColor: darkMode ? "#121212" : "#f5f5f5",
        color: darkMode ? "white" : "black",
        minHeight: "100vh",
        transition: "0,3s",
      }}

      >
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/country/:name" element={<CountryDetails />} />
      </Routes>
      </div>
      );
  }
