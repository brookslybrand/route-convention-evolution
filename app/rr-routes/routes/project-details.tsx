import { useParams } from "react-router";

export default function Page() {
  const params = useParams();
  return <h3>Project details {params.projectId}</h3>;
}
