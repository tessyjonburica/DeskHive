import React from "react";
import Hero from "../components/Hero";
import DeskSelection from "../components/DeskSelection";
import Services from "../components/Services";
import Contact from "./Contact"
import About from "./About";
// import NavBar from "../components/Navbar";
// import BookingDetails from "./Booking";
// import Features from "../components/Features";
// import Clients from "../components/Clients";

function Home() {
  return (
    <>
      <Hero />
      <DeskSelection />
      <Services/>
      <Contact />
      {/* <Features /> */}
      {/* <Clients /> */}
      {/* <About/> */}
    </>
  );
}

export default Home;
