import { RouteConfig, relative } from "@react-router/dev/routes";

const { route, index, layout } = relative(import.meta.dirname);

export const routes: RouteConfig = [
  layout("layouts/auth.tsx", [
    route("/login", "routes/login.tsx"),
    route("/logout", "routes/logout.tsx"),
    route("/signup", "routes/signup.tsx"),
  ]),
  route("/dashboard", "routes/dashboard-home.tsx"),
  route("/dashboard/calendar", "layouts/calendar.tsx", [
    index("routes/calendar.tsx"),
    route(":day", "routes/calendar-day.tsx"),
  ]),
  route("/dashboard/projects", "layouts/projects.tsx", [
    route(":projectId", "layouts/project-details.tsx", [
      index("routes/project-details.tsx"),
      route("collaborators", "routes/project-collaborators.tsx"),
      route("edit", "routes/project-edit.tsx"),
      route("settings", "routes/project-settings.tsx"),
      route("tasks/:taskId", "routes/project-task.tsx"),
    ]),
    route("new", "routes/project-new.tsx"),
  ]),
  route("/dashboard/projects/:projectId/print", "routes/project-print.tsx"),
];
