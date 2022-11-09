import { createBrowserRouter } from "react-router-dom";
import AddService from "../../components/AddService/AddService";
import ErrorPage from "../../components/ErrorPage/ErrorPage";
import Home from "../../components/Home/Home";
import MyReview from "../../components/MyReview/MyReview";
import Review from "../../components/Review/Review";
import ServiceDetails from "../../components/Services/ServiceDetails/ServiceDetails";
import Services from "../../components/Services/Services";
import Main from "../../layouts/Main";
import Login from "../../Login/Login";
import Register from "../../Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/services/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/myreview",
        element: (
          <PrivateRoute>
            <MyReview></MyReview>
          </PrivateRoute>
        ),
      },
      {
        path: "/review/:id",
        element: <Review></Review>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/addService",
        element: (
          <PrivateRoute>
            <AddService></AddService>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/addService"),
      },
    ],
  },
]);
