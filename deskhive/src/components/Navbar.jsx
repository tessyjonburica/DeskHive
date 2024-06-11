import React from "react";
import { Button, Navbar } from "flowbite-react";

function NavBar() {
  return (
    <Navbar fluid style={{ position: "sticky", top: '0',  }}>
      <Navbar.Brand href="/">
        <span className="self-center whitespace-nowrap text-xl font-bold text-blue-800 dark:text-white">
          DeskHive
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button color={"blue"}>Get started</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/">Home</Navbar.Link>
        <Navbar.Link href="/about">About</Navbar.Link>
        <Navbar.Link href="/services">Services</Navbar.Link>
        <Navbar.Link href="/contact">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
