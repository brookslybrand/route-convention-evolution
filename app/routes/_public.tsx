import { Outlet } from "react-router";

export default function Page() {
  return (
    <>
      <h1>Public layout</h1>
      <Outlet />
    </>
  );
}
