import { useState } from "react";
import React , {useContext} from "react";
import logo from "./../Assets/logo.png"

function Navbar(){
    const [current,setCurrent] = useState("loggedin");

    return(
        <div className="nav-container">
            <nav>
                <div className="left-logo">
                    <img src={logo} className="logo_image" />
                </div>
                <div className="right_contents">
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>My_bookings</li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;