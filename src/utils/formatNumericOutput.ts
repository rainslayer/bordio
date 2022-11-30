export function formatNumericOutput(number: number): string {
  return number > 99 ? "99+" : number.toString();
}
