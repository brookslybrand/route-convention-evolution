import type { Route } from "./+types/about-us";

export default function Page({ params }: Route.ComponentProps) {
  if (params.lang === "fr") {
    return <h2>Oui</h2>;
  }

  return <h2>About us</h2>;
}
