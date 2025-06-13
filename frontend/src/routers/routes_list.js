
import Admin from "../pages/admin";
import LayoutAdmin from "../components/LayoutAdmin";
import LayoutBasic from "../components/LayoutBasic";
import SignIn from "../pages/admin/SignIn";
import Home from "../pages/Home";
import About from "../pages/About";
import Contac from "../pages/Contac";
import NotFound from "../pages/NotFound";

const routes = [
  {
    path: "/admin",
    component: LayoutAdmin, // Layout padre
    exact: false,
    routes: [
      {
        path: "/admin",
        component: Admin,
        exact: true,
      },
      {
        path: "/admin/login",
        component: SignIn,
        exact: true,
      }
    ]
  },
  {
    path: "/",
    component: LayoutBasic, // Layout padre
    exact: false,
    routes: [
      {
        path: "/",
        component: Home,
        exact: true,
      },
      {
        path: "/about",
        component: About,
        exact: true,
      },
      {
        path: "/contact",
        component: Contac,
        exact: true,
      },
      {
        path: "*",
        component: NotFound,
      }
    ]
  }
 
];

export default routes;