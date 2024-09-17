import type { RouteConfig } from "@react-router/dev/routes";
import { flatRoutes } from "@react-router/fs-routes";

import { routes as rrRoutes } from "./rr-routes/routes";

export const routes: RouteConfig = [
  ...(await flatRoutes()),
  ...(await rrRoutes),
];
