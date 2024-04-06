import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";


const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState([]);
    const [searchTxt, setSearchTxt] = useState("");
    useEffect(() => {
        fetchData()
    }, [])

    fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setListOfRestaurants(json?.data['cards'][4]['card']['card']['gridElements']['infoWithStyle']['restaurants']);
        setFilteredListOfRestaurants(json?.data['cards'][4]['card']['card']['gridElements']['infoWithStyle']['restaurants']);
    }

    return filteredListOfRestaurants.length === 0? <Shimmer /> : (
        <div className="body">
        <div className="search-wrapper">
            <input type="text"  className="search-inout" value={searchTxt} onChange={(e) => {setSearchTxt(e.target.value)}}/>
            <button onClick={() => {
                const filtered = listOfRestaurants.filter(res => res.info.name.toLowerCase().includes(searchTxt.toLowerCase()));
                setFilteredListOfRestaurants(filtered);
            }}>
                Filter Restaurants
            </button>
        </div>
        <div className="res-container">
        {
            filteredListOfRestaurants.map(restaurant =><RestaurantCard key={restaurant.info.id} resData={restaurant}/>)
        }
    </div>
    </div>
        
    )
}

export default Body


