import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState([]);
    const [searchTxt, setSearchTxt] = useState("");
    const onlineStatus = useOnlineStatus();
    const {loggedInUser, setUserName} = useContext(UserContext);

    useEffect(() => {
        fetchData()
    }, [])

    fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setListOfRestaurants(json?.data['cards'][4]['card']['card']['gridElements']['infoWithStyle']['restaurants']);
        setFilteredListOfRestaurants(json?.data['cards'][4]['card']['card']['gridElements']['infoWithStyle']['restaurants']);
    }
    if(!onlineStatus) {
        return(
            <div>
                <img alt="Offline" src={offline} />
            </div>
        )
    }
    return filteredListOfRestaurants.length === 0? <Shimmer /> : (
        <div className="px-4 w-[1024px] m-auto">
            <div className="py-4 mx-2 font-bold text-2xl">
            Restaurants with online food delivery in Bangalore
            </div>
        <div className="flex mx-2 justify-start py-4">
            <input type="text"  className=" w-[68%] px-2 border-solid border-slate-300 border-2 rounded-lg mr-8" value={searchTxt} onChange={(e) => {setSearchTxt(e.target.value)}}/>
            <button className=" bg-orange-400 p-2 rounded-lg text-white font-bold" onClick={() => {
                const filtered = listOfRestaurants.filter(res => res.info.name.toLowerCase().includes(searchTxt.toLowerCase()));
                setFilteredListOfRestaurants(filtered);
            }}>
                Filter Restaurants
            </button>
        </div>
        <div className="flex mx-2 justify-start py-4">
            <input type="text" value={loggedInUser} onChange={(e) => setUserName(e.target.value)}/>
        </div>
        <div className="flex flex-wrap">
        {
            filteredListOfRestaurants.map(restaurant => <Link to={"/restaurants/"+restaurant.info.id} key={restaurant.info.id}><RestaurantCard resData={restaurant}/></Link>)
        }
    </div>
    </div>
    )
}

export default Body


