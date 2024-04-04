import { styleId, type } from "./config.js";
document.addEventListener("DOMContentLoaded", () => {
  const dom = document.createElement("link");
  dom.rel = "stylesheet";
  dom.id = styleId;
  dom.href = `./${type}/root.css`;
  document.head.appendChild(dom);
});
