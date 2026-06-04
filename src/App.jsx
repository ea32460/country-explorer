import {Routes, Route } from "react-router";

import Home from "./pages/Home";
import Countries from "./pages/Countries";
import Favorites from "./pages/Favorites";
import CountryDetails from "pages/CountryDetails";


export default function App(){
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/country/:name" element={<CountryDetails />} />
      </Routes>
  );
}