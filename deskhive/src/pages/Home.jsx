import React from "react";
// import NavBar from "../components/Navbar";
import Hero from "../components/Hero";
// import Features from "../components/Features";
// import Clients from "../components/Clients";
import DeskSelection from "../components/DeskSelection";
// import BookingDetails from "./Booking";
import Services from "../components/Services";
import Contact from "./Contact"
import About from "./About";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Hero />
      <DeskSelection />
      <Services/>
      <Contact />
      <Footer/>
      {/* <Features /> */}
      {/* <Clients /> */}
      {/* <About/> */}
    </>
  );
}

export default Home;
