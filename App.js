  import React from "react";
  import ReactDOM from "react-dom/client" 

const parent = React.createElement("div", { id: "parent" }, [(
    React.createElement("div", { class: "child1" }, [
    React.createElement("h1", {}, "this is h1"),
    React.createElement("h2", {}, "This is H2"),
  ])),
    React.createElement("div", { id: "child2" }, [
    React.createElement("h3", {}, "this is h2 from child2"),
    React.createElement("h1", {}, "This is h1 form child2"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
