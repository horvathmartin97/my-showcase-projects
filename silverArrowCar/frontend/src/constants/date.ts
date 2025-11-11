export function toShortDate(newDate: string) {
  return new Date(newDate).toLocaleDateString("hu", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}
