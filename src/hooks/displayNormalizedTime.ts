export default function displayNormalizedTime(hours: number, minutes: number) {
  if (hours >= 0 && hours <= 9 && minutes >= 0 && minutes <= 9) {
    return `0${hours}:0${minutes}`;
    // 9:4 -> 09:04
  } else if (hours >= 10 && minutes >= 0 && minutes <= 9) {
    return `${hours}:0${minutes}`;
    // 10:4 -> 10:04
  } else if (hours >= 0 && hours <= 9 && minutes >= 10) {
    return `0${hours}:${minutes}`;
    // 9:14 -> 09:14
  } else {
    return `${hours}:${minutes}`;
    // 10:14 -> 10:14
  }
}
