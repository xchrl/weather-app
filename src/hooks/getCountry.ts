export default function getCountry(countryCode: string) {
  const regionNames = new Intl.DisplayNames(["en"], { type: "region" });
  return regionNames.of(countryCode);
}
