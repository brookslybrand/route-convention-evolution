import type { RouteConfig } from "@react-router/dev/routes";
import { route, layout, index } from "@react-router/dev/routes";
import authRoutes from "./auth/routes";
import dashboardRoutes from "./dashboard/routes";

let routes = [
  layout("layouts/public.tsx", [
    index("pages/home.tsx"),
    route("about-us", "pages/about-us.tsx"),
    route("contact", "pages/contact.tsx"),
  ]),
  ...authRoutes,
  ...dashboardRoutes,
] satisfies RouteConfig;

export default routes;
