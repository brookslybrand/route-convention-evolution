import { Outlet } from "react-router";

export default function Page() {
  return (
    <>
      <h1>Auth layout</h1>
      <Outlet />
    </>
  );
}
