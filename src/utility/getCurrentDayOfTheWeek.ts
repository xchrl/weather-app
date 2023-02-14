export default function getCurrentDayOfTheWeek(day: number): string {
  let daysOfTheWeek: string[] = [
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
