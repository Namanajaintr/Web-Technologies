import HomeComponent from "./components/home/HomeComponent";
import AboutComponent from "./components/about/AboutComponent";
import ContactComponent from "./components/contact/ContactComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBarComponent from "./components/NavBarComponent";

function App() {
  return (
    <div>
      {/* <div>
        <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a> 
      page Refershes in a tag so use link
      </div> */}
      <BrowserRouter>
        {/* Render within parent component so that every comonents can be accessed */}
        <NavBarComponent />
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/about" element={<AboutComponent />} />
          <Route path="/contact" element={<ContactComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
