import { Outlet } from "react-router";

export default function Page() {
  return (
    <div>
      <h1>Public layout</h1>
      <Outlet />
    </div>
  );
}
