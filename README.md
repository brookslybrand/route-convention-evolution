# Remix & React Router Routing Convention Evolution

This is an example of the new routing convention coming to React Router v7.

It starts with [this upgrade example from the Remix Docs](https://remix.run/docs/en/main/start/v2#upgrading-to-the-new-convention) and shows how to create the same in [routes.ts](./app/routes.ts).

We don't have official docs yet because we're still building, but [the initial PR has some](https://github.com/remix-run/react-router/pull/11773).

## Convention file trees

### Remix v1 (folder routes)

```
app/
├── routes/
│   ├── __auth/
│   │   ├── login.tsx
│   │   ├── logout.tsx
│   │   └── signup.tsx
│   ├── __public/
│   │   ├── about-us.tsx
│   │   ├── contact.tsx
│   │   └── index.tsx
│   ├── dashboard/
│   │   ├── calendar/
│   │   │   ├── $day.tsx
│   │   │   └── index.tsx
│   │   ├── projects/
│   │   │   ├── $projectId/
│   │   │   │   ├── collaborators.tsx
│   │   │   │   ├── edit.tsx
│   │   │   │   ├── index.tsx
│   │   │   │   ├── settings.tsx
│   │   │   │   └── tasks.$taskId.tsx
│   │   │   ├── $projectId.tsx
│   │   │   └── new.tsx
│   │   ├── calendar.tsx
│   │   ├── index.tsx
│   │   └── projects.tsx
│   ├── __auth.tsx
│   ├── __public.tsx
│   └── dashboard.projects.$projectId.print.tsx
└── root.tsx
```

### Remix v2 (flat routes)

```
app/
├── routes/
│   ├── _auth.login.tsx
│   ├── _auth.logout.tsx
│   ├── _auth.signup.tsx
│   ├── _auth.tsx
│   ├── _public._index.tsx
│   ├── _public.about-us.tsx
│   ├── _public.contact.tsx
│   ├── _public.tsx
│   ├── dashboard._index.tsx
│   ├── dashboard.calendar._index.tsx
│   ├── dashboard.calendar.$day.tsx
│   ├── dashboard.calendar.tsx
│   ├── dashboard.projects.$projectId._index.tsx
│   ├── dashboard.projects.$projectId.collaborators.tsx
│   ├── dashboard.projects.$projectId.edit.tsx
│   ├── dashboard.projects.$projectId.settings.tsx
│   ├── dashboard.projects.$projectId.tasks.$taskId.tsx
│   ├── dashboard.projects.$projectId.tsx
│   ├── dashboard.projects.new.tsx
│   ├── dashboard.projects.tsx
│   └── dashboard_.projects.$projectId.print.tsx
└── root.tsx
```

## React Router v7

**Flat files structure**

```ts
// routes.ts

export const routes: RoutesConfig = [
  layout("routes/auth-layout.tsx", [
    route("/login", "routes/login.tsx"),
    route("/logout", "routes/logout.tsx"),
    route("/signup", "routes/signup.tsx"),
  ]),
  layout("routes/public-layout.tsx", [
    route("/", "routes/home.tsx"),
    route("/about-us", "routes/about-us.tsx"),
    route("/contact", "routes/contact.tsx"),
  ]),
  route("/dashboard", "routes/dashboard-home.tsx"),
  route("/dashboard/calendar", "routes/calendar-layout.tsx", [
    index("routes/calendar.tsx"),
    route(":day", "routes/calendar-day.tsx"),
  ]),
  route("/dashboard/projects", "routes/projects-layout.tsx", [
    route(":projectId", "routes/project-details-layout.tsx", [
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
```

```
app
├── app.css
├── data.ts
├── layouts
│   ├── auth.tsx
│   ├── calendar.tsx
│   ├── project-details.tsx
│   ├── projects.tsx
│   └── public.tsx
├── routes
│   ├── about-us.tsx
│   ├── calendar-day.tsx
│   ├── calendar.tsx
│   ├── contact.tsx
│   ├── dashboard-home.tsx
│   ├── home.tsx
│   ├── login.tsx
│   ├── logout.tsx
│   ├── project-collaborators.tsx
│   ├── project-details.tsx
│   ├── project-edit.tsx
│   ├── project-new.tsx
│   ├── project-print.tsx
│   ├── project-settings.tsx
│   ├── project-task.tsx
│   └── signup.tsx
├── root.tsx
└── routes.ts
```

**Separate layout files**

```ts
// routes.ts

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
```

```
app/
├── layouts
│   ├── auth.tsx
│   ├── calendar.tsx
│   ├── project-details.tsx
│   ├── projects.tsx
│   └── public.tsx
├── routes/
│   ├── about-us.tsx
│   ├── auth-layout.tsx
│   ├── calendar-day.tsx
│   ├── calendar-layout.tsx
│   ├── calendar.tsx
│   ├── contact.tsx
│   ├── dashboard-home.tsx
│   ├── home.tsx
│   ├── login.tsx
│   ├── logout.tsx
│   ├── project-collaborators.tsx
│   ├── project-details-layout.tsx
│   ├── project-details.tsx
│   ├── project-edit.tsx
│   ├── project-new.tsx
│   ├── project-print.tsx
│   ├── project-settings.tsx
│   ├── project-task.tsx
│   ├── projects-layout.tsx
│   ├── public-layout.tsx
│   └── signup.tsx
└── root.tsx
```
