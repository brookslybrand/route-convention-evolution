import {
  Links,
  Meta,
  Scripts,
  ScrollRestoration,
  Outlet,
  Link,
} from "react-router";

import "./tailwind.css";

const urls = [
  { path: "/", label: "Home" },
  { path: "/about-us", label: "About Us" },
  { path: "/contact", label: "Contact" },
  { path: "/login", label: "Login" },
  { path: "/logout", label: "Logout" },
  { path: "/signup", label: "Signup" },
  { path: "/dashboard", label: "Dashboard" },
  { path: "/dashboard/calendar", label: "Calendar" },
  { path: "/dashboard/calendar/1", label: "Calendar Day 1" },
  { path: "/dashboard/projects/1", label: "Project 1" },
  {
    path: "/dashboard/projects/1/collaborators",
    label: "Project 1 Collaborators",
  },
  { path: "/dashboard/projects/1/edit", label: "Edit Project 1" },
  { path: "/dashboard/projects/1/settings", label: "Project 1 Settings" },
  { path: "/dashboard/projects/1/tasks/1", label: "Project 1 Task 1" },
  { path: "/dashboard/projects/new", label: "New Project" },
  { path: "/dashboard/projects/1/print", label: "Print Project 1" },
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
