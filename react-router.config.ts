import type { Config } from "@react-router/dev/config";

declare module "react-router" {
  interface Future {
    unstable_middleware: true;
  }
}

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: true,
  future: {
    unstable_splitRouteModules: "enforce",
    unstable_optimizeDeps: true,
    unstable_viteEnvironmentApi: true,
    unstable_middleware: true,
    unstable_subResourceIntegrity: true,
  },
} satisfies Config;
