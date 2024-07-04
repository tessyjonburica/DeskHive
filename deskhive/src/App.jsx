import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import About from "./pages/About";
import Services from "./components/Services";
import NoPage from "./pages/NoPage";
import DeskSelection from "./components/DeskSelection";
// import BookingDetails from "./pages/Booking";
import Checkout from "./pages/Checkout";
import Confirmation from "./pages/Confirmation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="services" element={<Services />} />
          <Route path="desk-selection" element={<DeskSelection />} />
          <Route path="checkout" element={<Checkout/>} />
          <Route path="confirmation" element={<Confirmation />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;




// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./App.css";
// import Contact from "./pages/Contact";
// import Home from "./pages/Home";
// import Layout from "./pages/Layout";
// import About from "./pages/About";
// import Services from "./pages/Services";
// import NoPage from "./pages/NoPage";
// import DeskSelection from "./components/DeskSelection";
// import Booking from "./pages/Booking";

// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Layout />}>
//             <Route index element={<Home />} />
//             <Route path="about" element={<About />} />
//             <Route path="contact" element={<Contact />} />
//             <Route path="services" element={<Services />} />
//             <Route path="desk-selection" element={<DeskSelection />} />
//             <Route path="booking" element={<Booking />} />
//             <Route path="*" element={<NoPage />} />
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;
