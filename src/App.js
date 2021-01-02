import React from "react";
import './App.css';
import Top from "./components/top.jsx";
import Service from "./components/serviceSec/services.jsx";
import Location from "./components/locations/locations.jsx";
import Properties from "./components/properties/properties.jsx";
import Footer from "./components/footer/footer.jsx";
function App() {
  return (
    <>
      <Top />
      <Service />
      <Properties />
      <Location />
      <Footer />
    </>
  );
}

export default App;
