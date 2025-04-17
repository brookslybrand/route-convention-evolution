import { relative } from "@react-router/dev/routes";
import type { RouteConfig } from "@react-router/dev/routes";

let { index, route } = relative("app/dashboard");

export default [
  route("dashboard", "pages/dashboard-home.tsx"),
  route("dashboard/calendar", "layouts/calendar.tsx", [
    index("pages/calendar.tsx"),
    route(":day", "pages/calendar-day.tsx"),
  ]),
  route("dashboard/projects", "layouts/projects.tsx", [
    route(":projectId", "layouts/project-details.tsx", [
      index("pages/project-details.tsx"),
      route("collaborators", "pages/project-collaborators.tsx"),
      route("edit", "pages/project-edit.tsx"),
      route("settings", "pages/project-settings.tsx"),
      route("tasks/:taskId", "pages/project-task.tsx"),
    ]),
    route("new", "pages/project-new.tsx"),
  ]),
  route("dashboard/projects/:projectId/print", "pages/project-print.tsx"),
] satisfies RouteConfig;
