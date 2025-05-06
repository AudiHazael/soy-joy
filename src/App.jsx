import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Varieties from "./pages/Varieties";
import Blog from "./pages/Blog";
import Shop from "./pages/Shop";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Varieties" element={<Varieties />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/About/Shop" element={<Shop />} />
        <Route path="/About/COntact" element={<Contact />} />
        <Route path="/Varieties/Shop" element={<Shop />} />
        <Route path="/Varieties/Contact" element={<Contact />} />
        <Route path="/Blog/Contact" element={<Contact />} />
        <Route path="/Blog/Shop" element={<Shop />} />
      </Routes>
    </>
  );
}

export default App;
