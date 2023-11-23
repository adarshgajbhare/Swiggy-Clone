import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import BodyLayout from "./components/BodyLayout";
import Footer from "./components/Footer";
import { PUNE_API } from "./utils/constants";
import { MUMBAI_API } from "./utils/constants";
const App = () => {
  
  const [api, setAPI_KEY] = useState(PUNE_API);

  const handleAPIKeyChange = (newAPIKey) => {
    console.log("API Key changed to:", newAPIKey);
    
    setAPI_KEY(newAPIKey);
  };
  
  return (
    <div className="app">
      <Header onAPIKeyChange={handleAPIKeyChange}/>
      <BodyLayout api ={api}/>
      <Footer/>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
