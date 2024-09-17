import { useParams } from "react-router";

export default function Page() {
  const params = useParams();
  return <h3>Edit project {params.projectId}</h3>;
}
