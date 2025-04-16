import type { Route } from "./+types/project-task";

export default function Page({ params }: Route.ComponentProps) {
  return (
    <h3>
      Project {params.projectId} task {params.taskId}
    </h3>
  );
}
