import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import BodyLayout from "./components/BodyLayout";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div className="app">
      <Header />
      <BodyLayout />
      <Footer/>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
