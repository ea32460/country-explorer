import {Routes, Route } from "react-router";

import Home from "./pages/Home";
import Countries from "./pages/Countries";
import Favorites from "./pages/Favorites";
import CountryDetails from "./pages/CountryDetails";
import Navbar from "./components/Navbar.jsx";


export default function App(){
  return (
      <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/country/:name" element={<CountryDetails />} />
      </Routes>
</>
  );
}