import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/userContext";

class About extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
    }

    render() {
    return(
        <div>
            <h1>About us</h1>
            <h2>This is Namaste React web series</h2>
            <UserContext.Consumer>
                {(data) => console.log(data)}
            </UserContext.Consumer>
            <UserClass /> 
        </div>
    )
}
}

export default About;