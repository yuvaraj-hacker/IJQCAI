import React from "react";
import Home from "../Shared/Components/Home/Home";
import HelmetComponent from "./Helmet/HelmetProvider";

function Homes() {
  return (
    <>
      <HelmetComponent title="Home - International Journal of Quantum Computing and AI" />
      <Home />
    </>
  );
}

export default Homes;
