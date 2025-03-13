import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import HomeScreen from "../pages/HomeScreen";
import About from "../pages/about"
import Blog from "../pages/blog";
import Pricing from "../pages/pricing";
import Login from "../pages/login";
import Contact from "../pages/contact";
import FAQ from "../pages/FAQ";
import Shop from "../pages/shop";
import Testimonial from "../pages/testimonial";
import OurTeam from "../pages/OurTeam";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path:"/blog",
        element:<Blog />
      },
      {
        path:"/pricing",
        element:<Pricing />,
      },
      
      {
        path:"/contact",
        element:<Contact />
      },
      {
        path:"/Faq",
        element:<FAQ/>
      },
      {
        path:"/shop",
        element:<Shop />
      },
      {
        path:"/testimonial",
        element:<Testimonial/>
      },
      {
        path:"/ourTeam",
        element:<OurTeam/>
      }
    ],
  },
  {
    path:"/login",
    element:<Login />,
  },

]);
