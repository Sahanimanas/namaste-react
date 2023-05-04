import { useEffect, useState } from "react"
import Shimmer from "./Shimmer";

const Profile = () => {
    const [userInfo,setUserInfo] = useState(null);

    useEffect(()=>{
        getUserInfo();
    },[]);
    
    async function getUserInfo(){
        const data = await fetch("https://api.github.com/users/Tushar-sahani");
        const json = await data.json();
        setUserInfo(json);
    }
    // if(!userInfo) return null;
    return (!userInfo)?<Shimmer/>: (
        <>
            <img src={userInfo.avatar_url} alt="No_image" />
            <h1>{userInfo.name}</h1>
            <h3>{userInfo.location}</h3>
            <h4>{userInfo.id}</h4>
            <Shimmer/>
        </>
    )
}
export default Profile;