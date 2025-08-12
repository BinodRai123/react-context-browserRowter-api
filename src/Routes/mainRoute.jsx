import { Route, Routes } from "react-router-dom";
import About from "../pages/about";
import Contact from "../pages/contact";
import Home from "../pages/home";
import ProductDetail from "../pages/productDetail";

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/about/productdetail" element={<ProductDetail />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default MainRoute;
