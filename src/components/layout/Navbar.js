import "./Navbar.css"
import { NavLink } from 'react-router-dom';
import logo from "../../assets/logo.png"
const Navbar = () =>{
    return(
        <div className="navbar">
<div className="navbar-logo">
    <img src={logo} alt="hjezli"/>
</div>
<div className="navbar-list">
    <ul>
        <li>
        <NavLink to="/" exact activeClassName="active">
            Home
            </NavLink>
        </li>
        <li><NavLink to="/tourist" exact activeClassName="active">
        tourist Resort
            </NavLink></li>
        <li><NavLink to="/contact" exact activeClassName="active">
            Contact Us
            </NavLink></li>
    </ul>
</div>
<div className="navbar-login">
<NavLink to="/login" exact activeClassName="active">
            Login
            </NavLink>
        
</div>
        </div>
    )
}
export default Navbar;