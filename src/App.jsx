import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Varieties from "./Pages/Varieties";
import Contact from "./Pages/Contact";
import Blog from "./Pages/Blog";
import FAQ from "./Pages/Faq";
import BlogOne from "./Pages/Blogs/BlogOne";
import BlogTwo from "./Pages/Blogs/BlogTwo";
import BlogThree from "./Pages/Blogs/BlogThree";
import BlogFour from "./Pages/Blogs/BlogFour";
import BlogFive from "./Pages/Blogs/BlogFive";
import BlogSix from "./Pages/Blogs/BlogSix";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="Varieties" element={<Varieties />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route
          path="/blogs/unlocking-the-natural-benefits-of-soyjoy"
          element={<BlogOne />}
        />
        <Route
          path="/blogs/why-partner-with-soyjoy-unlocking-growth-and-impact"
          element={<BlogTwo />}
        />
        <Route
          path="/blogs/unlock-the-power-of-soyjoy-revolutionize-your-daily-nutrition"
          element={<BlogThree />}
        />
        <Route
          path="/blogs/go-green-with-soyjoy-the-planet-friendly-choice"
          element={<BlogFour />}
        />
        <Route
          path="/blogs/the-birth-of-soyjoy-a-journey-of-compassion-and-purpose"
          element={<BlogFive />}
        />
        <Route
          path="/blogs/unlock-the-power-of-soy-discover-the-amazing-health-benefits-of-soyjoy"
          element={<BlogSix />}
        />
      </Routes>
    </Router>
  );
}

export default App;
