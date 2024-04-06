import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";

const Header = () => {
    const [btnText, setBtnText] = useState("Login");
    console.log("Header Loaded");
    useEffect(() => {
        console.log("useEffect called")
    }, [btnText])
    return (
        <div className="header">
            <div className="logo-container">
                <img className="header-logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Contact Us</a></li>
                    <li><a href="">Cart</a></li>
                    <li><button onClick={() => {
                        btnText === "Login"? setBtnText("Logout"): setBtnText("Login")
                    }}>{btnText}</button></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;