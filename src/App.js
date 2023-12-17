import React, { useState, lazy, Suspense, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import BodyLayout from "./components/BodyLayout";
import Footer from "./components/Footer";
import { PUNE_API } from "./utils/constants";
// import About from "./components/About";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import RouterError from "./components/RouterError";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Offers from "./components/Offers";
import ResMenu from "./components/RestaurantMenus";
import Splash from "./components/Splash";
import UserName from "./components/UserName";
import { Provider } from "react-redux";
import appStore from "./store/appStore";
const About = lazy(() => import("./components/About"));

const App = () => {
  const [name, setName] = useState();
  useEffect(() => {
    const dummyData = {
      name: "AG The Gangsta",
    };
    setName(dummyData.name);
  }, []);

  const [api, setAPI_KEY] = useState(PUNE_API);

  const handleAPIKeyChange = (newAPIKey) => {
    setAPI_KEY(newAPIKey);
  };
  return (
    <Provider store={appStore}> 
    <UserName.Provider value={{ loggedUser: name, setName }}>
      <div className="app">
        <Header onAPIKeyChange={handleAPIKeyChange} />

        <Outlet context={api} />

        {/* <Footer /> */}
      </div>
    </UserName.Provider>
    </Provider>
  );
};
<UserName.Provider value={{ loggedUser: name }}></UserName.Provider>
const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <RouterError />,
    children: [
      {
        path: "/",
        element: <Splash />,
      },
      {
        path: "/home",
        element: <BodyLayout />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>About Loading....</h1>}>
            {" "}
            <About />{" "}
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/offers",
        element: <Offers />,
      },
      {
        path: "/menu/:resId",
        element: <ResMenu />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider  router={appRoute} />);
// root.render(<App />);
