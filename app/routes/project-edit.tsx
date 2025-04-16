import type { Route } from "./+types/project-edit";

export default function Page({ params }: Route.ComponentProps) {
  return <h3>Edit project {params.projectId}</h3>;
}
