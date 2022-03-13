import React from "react";
import PropTypes from "prop-types";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import ContainerHome from "../../Components/ContainerHome";
import Project from "./Project";
import Tools from "./Tools";
import ContactMe from "../ContactMe";

const Home = (props) => {
  return (
    <ContainerHome>
      <Hero />
      <About />
      <Project />
      <Tools />
      <ContactMe />
    </ContainerHome>
  );
};

Home.propTypes = {};

export default Home;
