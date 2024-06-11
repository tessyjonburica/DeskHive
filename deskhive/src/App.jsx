import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import About from "./pages/About";
import Services from "./pages/Services";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <>
      {/* <Home /> */}
      {/* <Contact /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="services" element={<Services/>} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
