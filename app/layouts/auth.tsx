import { Outlet } from "react-router";

export default function Page() {
  return (
    <div>
      <h1>Auth layout</h1>
      <Outlet />
    </div>
  );
}
