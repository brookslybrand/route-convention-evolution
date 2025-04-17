import type { RouteConfig } from "@react-router/dev/routes";
import { route, layout, index, prefix } from "@react-router/dev/routes";
import authRoutes from "./auth/routes";
import dashboardRoutes from "./dashboard/routes";

let routes = [
  layout(
    "layouts/public.tsx",
    prefix(":lang?", [
      index("pages/home.tsx"),
      route("about-us", "pages/about-us.tsx"),
      route("contact", "pages/contact.tsx"),
    ]),
  ),
  ...authRoutes,
  ...dashboardRoutes,
] satisfies RouteConfig;

if (process.env.NODE_ENV === "development") {
  routes.push(route("components", "components/page.tsx"));
}

export default routes;
