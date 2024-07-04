import { LOGO_URL } from "../utils/constants";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";

import { useSelector } from "react-redux";

const Header = () => {
    const [btnText, setBtnText] = useState("Login");
    //console.log("Header Loaded");
    const onlineStatus = useOnlineStatus();
    //console.log(onlineStatus);
    useEffect(() => {
        console.log("useEffect called")
    }, [btnText])

    const {loggedInUser} = useContext(UserContext);
    //console.log(loggedInUser);

    // Subscribing to store using selector
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);
    return (
        
        <div className="flex justify-between items-center shadow-lg rounded-lg mb-4">
            <div className=" w-24">
                <img className="header-logo" src={LOGO_URL} />
            </div>
            
            <ul className="flex ">
                <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                <li className="px-4"><Link to="/">Home</Link></li>
                <li className="px-4"><Link to="/about">About Us</Link></li>
                <li className="px-4"><Link to="/contactus">Contact Us</Link></li>
                <li className="px-4 font-bold text-lg"><Link to="/cart">Cart - {cartItems.length}</Link></li>
                <li className="px-4"><button onClick={() => {
                    btnText === "Login"? setBtnText("Logout"): setBtnText("Login")
                }}>{btnText}</button></li>
                <li className="px-2">{loggedInUser}</li>
            </ul>
        </div>
    )
}

export default Header;