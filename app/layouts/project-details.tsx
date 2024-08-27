import { Outlet } from "react-router";

export default function Page() {
  return (
    <div>
      <h2>Project details layout</h2>
      <Outlet />
    </div>
  );
}
