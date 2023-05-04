import { Link } from "react-router-dom"

import { Outlet } from "react-router-dom";
const About = ()=>{

    return (
        <div className="about">
            <Outlet />
            <h1>this is About Component</h1>
            <h3><Link to="/profile">Click Here</Link> For Profile</h3>
        </div>
    )
}

export default About;