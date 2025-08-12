import { NavLink } from "react-router-dom"

const changeActiveLink = (e) => {
  return e.isActive ? "text-orange-500 border-b" : ""
}

const Navbar = () => {
  return (
    <nav
        className="py-7 text-white flex justify-center gap-36 text-2xl"
    >
        <NavLink className={changeActiveLink} to="/">Home</NavLink>
        <NavLink className={changeActiveLink} to="/about">About</NavLink>
        <NavLink className={changeActiveLink} to="/contact">Contact</NavLink>
    </nav>
  )
}

export default Navbar