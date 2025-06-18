import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Varieties from "./pages/Varieties";
import Blog from "./pages/Blog";
import Shop from "./pages/Shop";
// import BlogOne from "./pages/Blogs/BlogOne";
import BlogTwo from "./pages/Blogs/BlogTwo";
import BlogThree from "./pages/Blogs/BlogThree";
import BlogFour from "./pages/Blogs/BlogFour";
import BlogFive from "./pages/Blogs/BlogFive";
import BlogSix from "./pages/Blogs/BlogSix";

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
      {/* <Route path="/BlogOne" element={<BlogOne />} /> */}
      <Route path="/BlogTwo" element={<BlogTwo />} />
      <Route path="/BlogThree" element={<BlogThree />} />
      <Route path="/BlogFour" element={<BlogFour />} />
       <Route path="/BlogFive" element={<BlogFive />} />
      <Route path="/BlogSix" element={<BlogSix />} />
    </Routes>
  );
}

export default App;
