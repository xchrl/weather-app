import displayNormalizedTime from "./displayNormalizedTime";

export default function getFormattedTimeAndTimeZone(time: number) {
  const date = new Date(time * 1000);
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZoneName: "short",
  }).formatToParts(date);
  const timeZoneName = parts.find((p) => p.type === "timeZoneName")?.value; // Returns timezone abbreviation
  return `${displayNormalizedTime(
    date.getHours(),
    date.getMinutes()
  )}, ${timeZoneName}`;
}
