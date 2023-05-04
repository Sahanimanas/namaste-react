// import { restaurantList } from "./constant";
import { useContext } from "react";
import userContext from "../utils/useContext";
const RestaurantCard = ({name,cloudinaryImageId,area,totalRatingsString,cuisines}) => {
    const {user} = useContext(userContext);
    return (
        <div className="w-80 p-3 mt-8">
            <img className="" src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`} alt="img" />
            <h2>{name}</h2>
            <h3>{area}</h3>
            <h4>{totalRatingsString}</h4>
            <h5>{cuisines.join(", ")}</h5>
            <h6>{user.name}</h6>
        </div>
    )
}

export default RestaurantCard;