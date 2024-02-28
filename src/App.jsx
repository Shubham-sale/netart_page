import React from "react";
import Header from "./Components/Header.jsx";
import { AwardLayer } from "./Components/AwardLayer.jsx";
import LowerMid from "./Components/LowerMid.jsx";
import "./App.css";
import Footer from "./Components/Footer.jsx";
import AboveFooter from "./Components/AboveFooter.jsx";
function App() {
  return (
    <div className="App">
      <Header />
      <AwardLayer />
      <LowerMid />
      <AboveFooter />
      <Footer />
    </div>
  );
}

export default App;
