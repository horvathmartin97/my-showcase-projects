export const PORT = process.env.PORT || 9090;
export const JWT_SECRET = process.env.JWT_SECRET;

export function toShortDate(newDate: Date): string {
  return new Date(newDate).toLocaleDateString("en", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
