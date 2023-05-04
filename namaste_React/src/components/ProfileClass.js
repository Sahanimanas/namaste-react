import React from "react";

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: "Tuhsar",
                location: "Location",
            }
        }
    }
    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/Tushar-sahani");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo: json,
        })
        console.log("Component Did mount");
    }
    componentDidUpdate(){
        console.log("Component Did Update");
    }
    componentWillUnmount(){
        console.log("Component will Unmount");
    }
    render() {
        return (
            <>
                <img src={this.state.userInfo.avatar_url} alt="No_image" />
                <h1>{this.state.userInfo.name}</h1>
                <h3>{this.state.userInfo.location}</h3>
                <h4>{this.state.userInfo.id}</h4>
            </>
        )
    }
}

export default Profile;