import React from "react";
import Banner from "./Banner/Banner";
import Bloods from "./Blood/Bloods";
import Contact from "./Contact/Contact";
import Text from "./Text/Text";

const Home = () => {
  return (
    <div>
      <Banner />
      <Text />
      <Bloods />
      <Contact />
    </div>
  );
};

export default Home;
