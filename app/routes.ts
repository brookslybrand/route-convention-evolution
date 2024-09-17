import type { RouteConfig } from "@react-router/dev/routes";
import { flatRoutes } from "@react-router/fs-routes";

import { routes as rrRoutes } from "./rr-routes/routes";

// Support for custom route conventions in Remix
//
// import { remixConfigRoutes } from "@react-router/remix-config-routes-adapter";
// import { flatRoutes } from "remix-flat-routes";
//
// export const routes: RouteConfig = remixConfigRoutes(async defineRoutes => {
//   return flatRoutes('routes', defineRoutes);
// });

export const routes: RouteConfig = [
  ...(await flatRoutes()),
  ...(await rrRoutes),
];
