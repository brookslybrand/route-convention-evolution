import type { Route } from "./+types/project-details";

export default function Page({ params }: Route.ComponentProps) {
  return <h3>Project details {params.projectId}</h3>;
}
