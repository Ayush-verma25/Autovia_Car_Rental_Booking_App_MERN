import React from "react";
import Hero from "../components/Hero";
import FeaturedSection from "../components/FeaturedSection";
import Banner from "../components/Banner";
import Testomonials from "../components/Testomonials";
import NewsLetter from "../components/Newsletter";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedSection />
      <Banner />
      <Testomonials />
      <NewsLetter />
    </>
  );
};

export default Home;
