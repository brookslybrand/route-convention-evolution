import {
  Links,
  Meta,
  Scripts,
  ScrollRestoration,
  Outlet,
  Link,
  href,
} from "react-router";

import "./tailwind.css";

import type { Route } from "./+types/root";

export let links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

const urls = [
  { path: href("/:lang?"), label: "Home" },
  { path: href("/:lang?/about-us"), label: "About Us" },
  { path: href("/:lang?/contact"), label: "Contact" },
  { path: href("/login"), label: "Login" },
  { path: href("/logout"), label: "Logout" },
  { path: href("/signup"), label: "Signup" },
  { path: href("/dashboard"), label: "Dashboard" },
  { path: href("/dashboard/calendar"), label: "Calendar" },
  {
    path: href("/dashboard/calendar/:day", { day: "1" }),
    label: "Calendar Day 1",
  },
  {
    path: href("/dashboard/projects/:projectId", { projectId: "1" }),
    label: "Project 1",
  },
  {
    path: href("/dashboard/projects/:projectId/collaborators", {
      projectId: "1",
    }),
    label: "Project 1 Collaborators",
  },
  {
    path: href("/dashboard/projects/:projectId/edit", { projectId: "1" }),
    label: "Edit Project 1",
  },
  {
    path: href("/dashboard/projects/:projectId/settings", { projectId: "1" }),
    label: "Project 1 Settings",
  },
  {
    path: href("/dashboard/projects/:projectId/tasks/:taskId", {
      projectId: "1",
      taskId: "1",
    }),
    label: "Project 1 Task 1",
  },
  { path: href("/dashboard/projects/new"), label: "New Project" },
  {
    path: href("/dashboard/projects/:projectId/print", { projectId: "1" }),
    label: "Print Project 1",
  },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="flex gap-8">
        <div className="w-64 h-full bg-gray-800 text-white p-5 min-h-screen">
          <h4 className="text-lg font-bold mb-4">Navigation</h4>
          <ul className="space-y-2">
            {urls.map((link) => (
              <li key={link.path} className="hover:bg-gray-700 rounded-md">
                <Link to={link.path} className="block p-2">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-4 space-y-4">
          <Outlet />
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
