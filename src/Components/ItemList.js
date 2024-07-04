import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import { NONVEG_ICON, VEG_ICON, STAR_GREEN_ICON, STAR_ICON } from "../utils/constants";
import UserContext from "../utils/userContext";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({items, isCart}) => {
    const {loggedInUser} = useContext(UserContext);
    //console.log(loggedInUser);

    const dispatch = useDispatch()
    const handleAddItem = (item) => {
        console.log("Handle Add");
        dispatch(addItem(item));
    }
    return(
        <div>
            {items.map((item) => (
                <div className="flex justify-between border-b-2 p-4 m-4" key={item.card.info.id}>
                    
                    <div className="mr-10">
                        <div className="mb-2">
                            <img className="w-6" src={item.card.info.itemAttribute.vegClassifier === "NONVEG"?NONVEG_ICON:VEG_ICON} />
                        </div>
                        <div className="font-[700] font-xl">{item.card.info.name}</div>
                    <div className="mb-2">₹ {item.card.info.price/100}</div>
                    {item.card.info.ratings.aggregatedRating.rating && (<div className="mb-2 font-bold">
                        <span className="mr-1"><img className="w-4 inline-block mb-1 mr-1" src={item.card.info.ratings.aggregatedRating.rating > 4 ? STAR_GREEN_ICON: STAR_ICON} />{item.card.info.ratings.aggregatedRating.rating}</span> <span>({item.card.info.ratings.aggregatedRating.ratingCountV2})</span>
                    </div>)}
                    <div className="mb-2">{item.card.info.description}</div>
                    
                    </div>
                    
                    <div className="p-2 relative">
                        <img className=" w-[300px] h-auto rounded-lg" src={CDN_URL+item.card.info.imageId} />
                        {!isCart && <button className="px-8 py-2 bg-white text-green-300 font-bold absolute rounded-lg bottom-3 left-14" onClick={() => handleAddItem(item)}>Add</button>}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ItemList;