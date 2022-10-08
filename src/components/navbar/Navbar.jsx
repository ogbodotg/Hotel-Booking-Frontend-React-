import { Link } from "react-router-dom";
import "./navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../contextAPI/AuthContext.js";

export const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Chillax Africa</span>
        </Link>
        {user ? (
          `Welcome ${user.username}`
        ) : (
          <div className="navItems">
            <button className="navButton">Login</button>

            <button className="navButton">Register</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
