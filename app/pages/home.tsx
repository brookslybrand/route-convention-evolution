import { href, Link } from "react-router";

export default function Page() {
  return (
    <main>
      <h2>Public home</h2>
      {/* Running out of time for styles goes */}
      <br />
      <br />
      <br />
      <Link to={href("/:lang?/about-us", { lang: "fr" })}>Go French Mode</Link>
    </main>
  );
}
