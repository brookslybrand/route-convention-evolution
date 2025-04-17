// TODO: add example where we can add some links

import { href, Link } from "react-router";

export default function Page() {
  return (
    <main>
      <h2>Public home</h2>
      <Link
        to={href("/dashboard/projects/:projectId/tasks/:taskId", {
          projectId: "1",
          taskId: "1",
        })}
      >
        Go somewhere cool
      </Link>
    </main>
  );
}
