import { Outlet, Link } from "react-router-dom";
import NavBar from "../components/Navbar";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
};

export default Layout;