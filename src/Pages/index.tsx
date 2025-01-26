import React from "react";
import Industries from "./Home/Industries";
import Hero from "./Home/Header";
import OurWork from "./Home/OurWork";
import Offer from "./Home/Offer";
import OurClient from "./Home/OurClient";

const Home: React.FC = () => {
  return (
    <>
      <div>
        <Hero />
        <Industries />
        <OurWork />
        <Offer />
        <OurClient />
      </div>
    </>
  );
};

export default Home;
