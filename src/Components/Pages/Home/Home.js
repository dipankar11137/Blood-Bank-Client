import React from "react";
import Banner from "./Banner/Banner";
import Bloods from "./Blood/Bloods";
import Contact from "./Contact/Contact";
import Text from "./Text/Text";
import OurTeams from "./OurTeam/OurTeams";

const Home = () => {
  return (
    <div>
      <Banner />
      <Text />
      <Bloods />
      <OurTeams />
      <Contact />
    </div>
  );
};

export default Home;
