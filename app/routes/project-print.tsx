import type { Route } from "./+types/project-print";

export default function Page({ params }: Route.ComponentProps) {
  return <h1>Print project {params.projectId}</h1>;
}
