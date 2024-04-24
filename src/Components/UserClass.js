import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
         this.state = {
            userInfo: {
                name: "Dummy",
                location: "Dummy"
            }
        }
    }
    
    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/ImVivekD");
        const json = await data.json();
        this.setState({
            userInfo: json
        });
    }
    render() {
        const {name, location} = this.state.userInfo;
        return(
            <div className="p-4 bg-gray-100 rounded-lg">
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: </h4>
            </div>
        )
    }
}

export default UserClass;