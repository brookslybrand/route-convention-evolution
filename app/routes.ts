import type { RouteConfig } from "@react-router/dev/routes";
import { route, layout, index } from "@react-router/dev/routes";
import authRoutes from "./auth/routes";

let routes = [
  layout("layouts/public.tsx", [
    index("pages/home.tsx"),
    route("about-us", "pages/about-us.tsx"),
    route("contact", "pages/contact.tsx"),
  ]),
  ...authRoutes,
  route("dashboard", "dashboard/pages/dashboard-home.tsx"),
  route("dashboard/calendar", "dashboard/layouts/calendar.tsx", [
    index("dashboard/pages/calendar.tsx"),
    route(":day", "dashboard/pages/calendar-day.tsx"),
  ]),
  route("dashboard/projects", "dashboard/layouts/projects.tsx", [
    route(":projectId", "dashboard/layouts/project-details.tsx", [
      index("dashboard/pages/project-details.tsx"),
      route("collaborators", "dashboard/pages/project-collaborators.tsx"),
      route("edit", "dashboard/pages/project-edit.tsx"),
      route("settings", "dashboard/pages/project-settings.tsx"),
      route("tasks/:taskId", "dashboard/pages/project-task.tsx"),
    ]),
    route("new", "dashboard/pages/project-new.tsx"),
  ]),
  route(
    "dashboard/projects/:projectId/print",
    "dashboard/pages/project-print.tsx",
  ),
] satisfies RouteConfig;

export default routes;
