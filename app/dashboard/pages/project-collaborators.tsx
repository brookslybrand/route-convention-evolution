import type { Route } from "./+types/project-collaborators";

export default function Page({ params }: Route.ComponentProps) {
  return <h3>Project {params.projectId} collaborators</h3>;
}
