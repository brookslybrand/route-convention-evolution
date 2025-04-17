import type { Route } from "./+types/project-settings";

export default function Page({ params }: Route.ComponentProps) {
  return <h3>Project {params.projectId} settings</h3>;
}
