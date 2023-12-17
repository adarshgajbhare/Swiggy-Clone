import React from "react";
import UserClass from "./UserClass";
// import UserCard from "./UserCard";
// import UserName from "./UserName";

class About extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {}
  render() {
    return (
/* <div className="text-black border-2 border-black">Logged User :   
          <UserName.Consumer>
            {({loggedUser})=> <h1 className="text-black">{loggedUser}</h1> }
          </UserName.Consumer>
        </div> */
      <div>
        <UserClass
          name={"First"}
          location={"Naigaon"}
          username={"adarsh.gatsby"}
        />
      </div>
    );
  }
}
export default About;



