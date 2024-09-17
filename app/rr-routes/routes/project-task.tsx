import { useParams } from "react-router";

export default function Page() {
  const params = useParams();
  return (
    <h3>
      Project {params.projectId} task {params.taskId}
    </h3>
  );
}
