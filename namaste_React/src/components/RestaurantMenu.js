import { useParams } from "react-router-dom";
import { useState } from "react";
import Shimmer from "./Shimmer";
import useResaurent from "../utils/useResturent";

const RestaurantMenu = () =>{
    // const [restaurantMenu , setRestaurantMenu] = useState(null);
    const {id} = useParams();

    const restaurantMenu = useResaurent(id);
    // setRestaurantMenu(useRestaurent);
   console.log(restaurantMenu)
    if(!restaurantMenu)return null;
    return (!restaurantMenu)?<Shimmer />:(
        <div className="menu">
            <div className="w-12 ">
                <img src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${restaurantMenu.cloudinaryImageId}`} alt="" />
                <h1>{restaurantMenu.name} </h1>
                <h2>{restaurantMenu.locality}</h2>
                <h3>{restaurantMenu.areaName} {restaurantMenu.city}</h3>
                <h5>{restaurantMenu.avgRating} stars</h5>
            </div>
            <div className="allmenu">
            <h1>Menu</h1>
                <ul>
                  {Object.values(restaurantMenu?.menu?.items).map((item) => (
                    <li key={item.id}>{item.name}</li>
                  ))}
                </ul>
            </div>
        </div>
    
    )
}

export default RestaurantMenu;