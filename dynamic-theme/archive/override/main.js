window.onload = () => {
  let theme = "theme1";
  const btn = document.getElementById("btn");
  btn.addEventListener("click", () => {
    theme = theme === "theme1" ? "theme2" : "theme1";
    setTheme(theme);
  });
  setTheme(theme);
  function setTheme(theme) {
    const doc = document.documentElement;
    doc.dataset.theme = theme;
  }
};
