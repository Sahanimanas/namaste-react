import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "./constant";
import { useState, useEffect, useContext  } from "react";
import { Link } from "react-router-dom";
import userContext from "../utils/useContext";

function fetchdata(searchText, allRestaurent) {
    return allRestaurent.filter((restaurant) => {
        return restaurant.data?.name?.toLowerCase().includes(searchText.toLowerCase());
    })
}


const Body = () => {
    const [allRestaurent, setAllRestaurent] = useState(null);
    const [searchText, setSearchText] = useState("");
    const [restaurants, setrestaurants] = useState(restaurantList);

    useEffect(() => {
        getdata();
    }, []);

    if (!restaurants) {
        return null;
    }
    const {user} = useContext(userContext);

    async function getdata() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5439106&lng=77.3331085&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setAllRestaurent(json.data?.cards[2]?.data?.data?.cards);
        setrestaurants(json.data?.cards[2]?.data?.data?.cards);

    }
    return (
        <>
            <div className="flex justify-center align-middle mt-9">
                <input type="text" value={user.name}/>
                <input className="border-2" type="text" placeholder="Search" value={searchText} onChange={(e) => { setSearchText(e.target.value) }} />
                <button className="btn" onClick={() => {
                    const data = fetchdata(searchText, allRestaurent);
                    setrestaurants(data)
                }}>Search</button>
            </div>
            <div className="flex flex-wrap justify-center align-middle">
                {
                    restaurants?.map((restaurant) => {
                        return (
                        <Link to={`/restaurant/${restaurant.data.id}`} key={restaurant.data.id} ><RestaurantCard {...restaurant.data} />
                            </Link>
                        // <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>
                            );
                    })
                }
            </div>
        </>
    )
}

export default Body;