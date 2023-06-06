import "./Navbar.css"
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import logo from "../../assets/logo.png"
import { useState, useContext } from "react";
import AuthContext from "../../store/AuthContext";
const Navbar = () => {
    const authCtx = useContext(AuthContext);
    const [open, setOpen] = useState(false)
    return (<>
        <div className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="hjezli" />
            </div>
            <div className="navbar-list">
                <ul>
                    <li>
                        <NavLink to="/">
                            Home
                        </NavLink>
                    </li>
                    <li><NavLink to="/tourist">
                        Resorts
                    </NavLink></li>
                    <li><NavLink to="/contact">
                        Contact Us
                    </NavLink></li>
                </ul>
            </div>
            <div className="navbar-login">
                {authCtx.isLoggedIn ? <NavLink to="/login" onClick={authCtx.logout}>
                    Logout
                </NavLink> : <NavLink to="/login">
                    Login
                </NavLink>}


            </div>
        </div>
        <div className="navbar-mobile">
            <div className="navbar-logo">
                <img src={logo} alt="hjezli" />
            </div>
            <div
                className="icon-parent"><FontAwesomeIcon className="icon" icon={faBars} size="2x" onClick={() => { setOpen(!open) }} /></div>

            <div className={open ? 'navbar-list open' : 'navbar-list close'}>
                <ul>
                    <li>
                        <NavLink to="/">
                            Home
                        </NavLink>
                    </li>
                    <li><NavLink to="/tourist">
                        Resort
                    </NavLink></li>
                    <li><NavLink to="/contact">
                        Contact Us
                    </NavLink>
                    </li>

                    <li> <NavLink to="/login">
                        Login
                    </NavLink></li>
                </ul>
            </div>
        </div>
    </>)
}
export default Navbar;