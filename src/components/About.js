import React from "react";
import UserClass from "./UserClass";
import UserCard from "./UserCard";

class About extends React.Component {

  constructor (){
    super();
    console.log("parent constructor");
  }
  componentDidMount (){
    console.log("parent componentDidMount")
  }
  render () { 
    console.log("parent render");
  return (
    
    <div>
      <h1>About</h1>
      <UserClass name={"First"} location={"Naigaon"} username={"adarsh.gatsby"} />
    </div>
  );
}
};
export default About;
