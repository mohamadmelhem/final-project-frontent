import "./Navbar.css"
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBurger, faPlus, faTable } from '@fortawesome/free-solid-svg-icons'
import logo from "../../assets/logo.png"
import { useState } from "react";
const Navbar = () => {
    const [open,setOpen]=useState(false)
    return (<>
        <div className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="hjezli" />
            </div>
            <div className="navbar-list">
                <ul>
                    <li>
                        <NavLink to="/" exact activeClassName="active">
                            Home
                        </NavLink>
                    </li>
                    <li><NavLink to="/tourist" exact activeClassName="active">
                        Resort
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
        <div className="navbar-mobile">
            <div className="navbar-logo">
                <img src={logo} alt="hjezli" />
            </div>
            <div
            className="icon-parent"><FontAwesomeIcon className="icon" icon={faBars} size="2x" onClick={()=>{setOpen(!open)}}/></div>
            
            <div className={open? 'navbar-list open':'navbar-list close'}>
                <ul>
                    <li>
                        <NavLink to="/" exact activeClassName="active">
                            Home
                        </NavLink>
                    </li>
                    <li><NavLink to="/tourist" exact activeClassName="active">
                        Resort
                    </NavLink></li>
                    <li><NavLink to="/contact" exact activeClassName="active">
                        Contact Us
                    </NavLink>
                    </li>

                    <li> <NavLink to="/login" exact activeClassName="active">
                        Login
                    </NavLink></li>
                </ul>
            </div>
        </div>
    </>)
}
export default Navbar;