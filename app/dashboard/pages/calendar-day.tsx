import type { Route } from "./+types/calendar-day";

export default function Page({ params }: Route.ComponentProps) {
  return <h2>Calendar day {params.day}</h2>;
}
