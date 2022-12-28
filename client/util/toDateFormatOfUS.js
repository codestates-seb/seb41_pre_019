export function toDateFormatOfUS(date) {
  return date.toLocaleString("en-US", { timeZone: "America/New_York" });
}
