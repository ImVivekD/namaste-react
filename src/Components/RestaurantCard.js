import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;

    const {name, cuisines, cloudinaryImageId, sla} = resData?.info;
    return (
        <div className="res-card">
            <img className="res-logo" src={CDN_URL+cloudinaryImageId} />
            <div className="res-info">
                <h3>
                    {name}
                </h3>
                <h4>
                    {cuisines.join(', ')}
                </h4>
                <h5>
                    {sla.deliveryTime+" Minutes"}
                </h5>
            </div>
        </div>
    )
}

export default RestaurantCard;