import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Varieties from "./pages/Varieties";
import Blog from "./pages/Blog";
import Shop from "./pages/Shop";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/varieties" element={<Varieties />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/shop" element={<Shop />} />

      {/* Optional nested-like routes for access from other pages */}
      <Route path="/about/shop" element={<Shop />} />
      <Route path="/about/contact" element={<Contact />} />
      <Route path="/varieties/shop" element={<Shop />} />
      <Route path="/varieties/contact" element={<Contact />} />
      <Route path="/blog/contact" element={<Contact />} />
      <Route path="/blog/shop" element={<Shop />} />
    </Routes>
  );
}

export default App;
