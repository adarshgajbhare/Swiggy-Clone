import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import BodyLayout from "./components/BodyLayout";
import Footer from "./components/Footer";
import { PUNE_API } from "./utils/constants";
import About from "./components/About";
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

const App = () => {
  const [api, setAPI_KEY] = useState(PUNE_API);

  const handleAPIKeyChange = (newAPIKey) => {
    setAPI_KEY(newAPIKey);
  };
  return (
    <div className="app">
      {/* <BrowserRouter> */}
        <Header onAPIKeyChange={handleAPIKeyChange} />
        {/* <Routes>
          <Route path="/" element={<BodyLayout api={api} />}>
            {"/"}
          </Route>
          <Route path="/home" element={<BodyLayout api={api} />}>
            {"/"}
          </Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/offers" element={<Offers />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<About />}></Route>

          <Route path="/menu/:resId" element={<ResMenu />} />
        </Routes> */}
        <Outlet context={api}  />
      {/* </BrowserRouter> */}

      <Footer />
    </div>
  );
};

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
        element: <About />,
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
        path : "/menu/:resId",
         element :  <ResMenu />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRoute} />);
// root.render(<App />);
