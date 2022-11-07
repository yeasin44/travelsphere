import { createBrowserRouter } from "react-router-dom";
import Home from "../../components/Home/Home";
import Service from "../../components/Services/Service";
import Services from "../../components/Services/Services";
import Main from "../../layouts/Main";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
    ],
  },
]);
