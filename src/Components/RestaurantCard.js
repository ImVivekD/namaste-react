
import { useContext } from "react";
import { NONVEG_ICON, VEG_ICON, CDN_URL, STAR_GREEN_ICON, STAR_ICON, CDN_URL } from "../utils/constants";
import UserContext from "../utils/userContext";

const RestaurantCard = (props) => {
    const {resData} = props;

    const userName = useContext(UserContext);
    //console.log(userName);
    const {name, cuisines, cloudinaryImageId, sla, avgRating, locality} = resData?.info;
    return (
        <div className=" w-[275px] m-2 rounded-lg h-[350px] hover:scale-95">
            <img className=" rounded-tl-2xl rounded-tr-2xl w-[275px] h-[150px]" src={CDN_URL+cloudinaryImageId} />
            <div className="px-4">
                <h3 className=" my-4 font-bold text-ellipsis overflow-hidden text-nowrap">
                    {name}
                </h3>
                {avgRating && (<div className="mb-2 font-bold">
                        <span className="mr-1"><img className="w-4 inline-block mb-1 mr-1" src={avgRating > 4 ? STAR_GREEN_ICON: STAR_ICON} />{avgRating}</span><span className="font-bold text-xl mx-2 py-2">.</span> <span className="ml-1">{sla.slaString}</span>
                    </div>)}
                <h4 className="text-[#02060c] font-[200] text-ellipsis overflow-hidden text-nowrap">
                    {cuisines.join(', ')}
                </h4>
                <h5 className="mb-4 text-[#02060c] font-[200]">
                    {locality}
                </h5>
            </div>
        </div>
    )
}

export default RestaurantCard;