import { Route, Routes } from "react-router-dom";
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Contact from "./pages/contact.jsx";
import Nav from "./components/nav.jsx";

const App = () => {
  return (
    <>
      <Nav />
      <nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </nav>


      
    </>
  )
}

export default App