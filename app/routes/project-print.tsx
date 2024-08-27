import { useParams } from "react-router";

export default function Page() {
  const params = useParams();
  return <h1>Print project {params.projectId}</h1>;
}
