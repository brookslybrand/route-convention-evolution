import { flatRoutes } from "@react-router/fs-routes";
import type { RouteConfig } from "@react-router/dev/routes";

let authRoutes = await flatRoutes({
  rootDirectory: "auth/routes",
});

export default authRoutes satisfies RouteConfig;
