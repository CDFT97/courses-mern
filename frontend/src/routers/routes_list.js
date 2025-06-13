
import Admin from "../pages/admin";
import LayoutAdmin from "../components/LayoutAdmin";
import SignIn from "../pages/admin/SignIn";

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
];

export default routes;