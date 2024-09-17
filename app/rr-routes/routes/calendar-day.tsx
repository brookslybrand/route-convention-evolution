import { useParams } from "react-router";

export default function Page() {
  const params = useParams();
  return <h2>Calendar day {params.day}</h2>;
}
