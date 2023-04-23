export default function getCurrentDayOfTheWeek(day: number): string {
  const daysOfTheWeek: string[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return daysOfTheWeek[day];
}
