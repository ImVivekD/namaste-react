import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory, {NestedRestaurantCategory} from "./RestaurantCategory";
import { NONVEG_ICON, VEG_ICON, STAR_GREEN_ICON, STAR_ICON, CDN_URL } from "../utils/constants";
//import { NestedRestaurantCategory } from "./RestaurantCategory";

const Menu = () => {
    const {resId} = useParams();
    const menuItems = useRestaurantMenu(resId);
    const [showIndex, setShowIndex] = useState(0);
    const Nested = NestedRestaurantCategory(RestaurantCategory);
    

    if(menuItems === null) return <Shimmer />;

    

    const {name, cuisines, costForTwoMessage, avgRating, sla, totalRatingsString, feeDetails} = menuItems?.cards[2].card.card.info;
    const {cards} = menuItems?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;
    const categories = cards.filter((c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    return(
        <div className="px-4 w-[1000px] m-auto">
            <h1 className="font-bold text-xl">{name}</h1>
            <div className="menu-info-wrapper">
                <div className=" bg-white shadow-2xl rounded-2xl py-4 mb-2 border-solid border border-gray-100">
                    {avgRating && (<div className="mb-2 px-4 font-bold">
                        <span className="mr-1"><img className="w-4 inline-block mb-1 mr-1" src={avgRating > 4 ? STAR_GREEN_ICON: STAR_ICON} />{avgRating}</span> <span>({totalRatingsString})</span> <span className="ml-2">{costForTwoMessage}</span>
                    </div>)}
                    <p className="px-4">{cuisines.join(", ")}</p>
                    <h3 className="px-4 pb-5 border-b ">{sla.slaString.toLowerCase()}</h3>
                    <h4 className="p-4 text-gray-400  text-sm">{feeDetails.message}</h4>
                </div>
            </div>
            
            <div className="mt-4">
                
                {/* ? (<Nested key={index} data={item.card.card} showAccordian={showIndex === index? true : false} setShowIndex={() => setShowIndex(index)}/>): <div key={index} ></div>)} */}
                {categories.map((item, index) => <RestaurantCategory key={index} data={item.card.card} showAccordian={showIndex === index? true: false} setShowIndex={() => setShowIndex(showIndex === index? null: index)} />)}
            </div>

        </div>
    )
}

export default Menu;