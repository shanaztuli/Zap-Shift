import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/home/Home";
import Coverage from "../Pages/Home/Coverage/Coverage";
import About from "../Pages/About/About";
import story from "../Pages/About/AboutNav/story";
import mission from "../Pages/About/AboutNav/mission";
import success from "../Pages/About/AboutNav/success";
import Team from "../Pages/About/AboutNav/Team";
import Error from "../Pages/Home/Error/Error";
import AuthLayout from "../Layouts/AuthLayout";
import Register from "../Pages/Auth/Register/Register";
import Login from "../Pages/Auth/Login/Login";
import PrivateRoute from "./PrivateRoute";
import Rider from "../Pages/Rider/Rider";
import SendParcel from "../Pages/SendParcel/SendParcel";
import DashboardLayout from "../Layouts/DashboardLayout";
import MyParcels from "../Pages/Dashboard/MyParcels/Myparcels";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentSuccess from "../Pages/Dashboard/Payment/PaymentSuccess";
import PaymentCanceled from "../Pages/Dashboard/Payment/PaymentCanceled";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/rider",
        element: (
          <PrivateRoute>
            <Rider></Rider>
          </PrivateRoute>
        ),
      },
      {
        path: "/send-parcel",
        element: (
          <PrivateRoute>
            <SendParcel></SendParcel>
          </PrivateRoute>
        ),
        loader: () => fetch("/serviceCentres.json").then((res) => res.json()),
      },
      {
        path: "/coverage",
        loader: () => fetch("/serviceCentres.json").then((res) => res.json()),
        Component: Coverage,
      },
      {
        path: "about",
        Component: About,
        children: [
          { index: true, Component: story },
          {
            index: true,
            path: "story",
            Component: story,
          },
          {
            path: "mission",
            Component: mission,
          },
          {
            path: "success",
            Component: success,
          },
          {
            path: "team",
            Component: Team,
          },
        ],
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/login",
        Component: Login,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "my-parcels",
        Component: MyParcels,
      },
      {
        path: "payment/:parcelId",
        Component: Payment,
      },
      {
        path: "payment-success",
        Component: PaymentSuccess,
      },
      {
        path: "payment-cancelled",
        Component: PaymentCanceled,
      },
    ],
  },
  {
    path: "*",
    Component: Error,
  },
]);
