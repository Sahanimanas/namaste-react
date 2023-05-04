import {Link} from "react-router-dom";
import { useContext } from "react";
import useonline from "../utils/useonline";
import userContext from "../utils/useContext";

const Title = () => {
    return <h1 className="m-3">Food Villa</h1>
}
const Header = () => {
    const {user} = useContext(userContext);
    const checkonline = useonline();
    console.log(checkonline);
    return (
        <div className="flex justify-between">
            <Title />
            {user.name}
            {checkonline?"✅":"🔴"}
            <ul className="flex">
            <li className="m-3"><Link to="/">Home</Link></li>
            <li className="m-3"><Link to="/service">Service</Link></li>
            <li className="m-3"><Link to="/contact">Contact</Link></li>
            <li className="m-3"><Link to="/about">About</Link></li>
            </ul>
        </div>
    );
}

export default Header;