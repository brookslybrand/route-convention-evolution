import { Outlet } from "react-router";

export default function Page() {
  return (
    <div>
      <h1>Projects layout</h1>
      <Outlet />
    </div>
  );
}
