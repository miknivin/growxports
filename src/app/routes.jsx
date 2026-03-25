import { useEffect } from "react";
import {
  createBrowserRouter,
  Outlet,
  useLocation,
} from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Certifications from "./pages/Certifications";
import Contact from "./pages/Contact";

function ScrollToTopLayout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  return <Outlet />;
}

export const router = createBrowserRouter([
  {
    Component: ScrollToTopLayout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/products",
        Component: Products,
      },
      {
        path: "/certifications",
        Component: Certifications,
      },
      {
        path: "/contact",
        Component: Contact,
      },
    ],
  },
]);
