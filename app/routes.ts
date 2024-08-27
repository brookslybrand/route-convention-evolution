import type { RoutesConfig } from "@react-router/dev/routes";
import { route, layout, index } from "@react-router/dev/routes";

// export const routes: RoutesConfig = [
//   index("routes/home.tsx"),
//   route("/contacts/:contactId", "routes/contacts/details.tsx"),
//   route("/contacts/:contactId/edit", "routes/contacts/edit.tsx"),
//   route("/contacts/:contactId/destroy", "routes/contacts/destroy.tsx"),
// ];

export const routes: RoutesConfig = [
  layout("layouts/auth.tsx", [
    route("/login", "routes/login.tsx"),
    route("/logout", "routes/logout.tsx"),
    route("/signup", "routes/signup.tsx"),
  ]),
  layout("layouts/public.tsx", [
    route("/", "routes/home.tsx"),
    route("/about-us", "routes/about-us.tsx"),
    route("/contact", "routes/contact.tsx"),
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
