export function followOS() {
  if (!window.matchMedia) {
    return "";
  }
  const { matches } = window.matchMedia("(prefers-color-scheme: light)");
  return matches ? "light" : "dark";
}
