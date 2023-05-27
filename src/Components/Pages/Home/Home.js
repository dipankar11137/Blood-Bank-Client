import React from "react";
import Footer from '../../Share/Footer';
import Banner from './Banner/Banner';
import Bloods from './Blood/Bloods';
import Contact from './Contact/Contact';
import OurTeams from './OurTeam/OurTeams';
import Text from './Text/Text';

const Home = () => {
  return (
    <div>
      <Banner />
      <Text />
      <Bloods />
      <OurTeams />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
