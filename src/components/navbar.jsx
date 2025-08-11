import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav 
        className="bg-green-600 text-white flex gap-10 px-5 text-2xl"
    >
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
    </nav>
  )
}

export default Navbar