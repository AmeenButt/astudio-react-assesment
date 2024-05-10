import Users from "pages/admin/users";
import Products from "pages/admin/products";
export const routes = [
  {
    name: "Users",
    route: "/users",
    layout: "admin",
    component: <Users />,
  },
  {
    name: "Products",
    route: "/products",
    layout: "admin",
    component: <Products />,
  },
];
