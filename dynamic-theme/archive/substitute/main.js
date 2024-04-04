// import { styleId } from "../config.js";
window.onload = () => {
  const btn = document.getElementById("btn");
  insertInput(btn);

  btn.addEventListener("click", () => {
    const color = formatColor(getInputValue("ipt"));
    // const styleEl = findStyleEl(styleId);
    setThemeColor(color);
    console.log(getInputValue("ipt"));
  });
};
function setThemeColor(color) {
  if (color) {
    document.documentElement.style.setProperty("--button-color", color);
  }
}
// function setThemeColor(color, styleEl) {
//   let el = styleEl;
//   if (!el) {
//     el = document.documentElement;
//   }
//   // if (!styleEl) {
//   //   console.warn(`element not find`);
//   //   return;
//   // }
//   el.style.setProperty("--button-color", color);
// }
// function findStyleEl(id) {
// return document.querySelectorAll(`link`);
// .find((el) => {
//   if (el.id == styleId) {
//     return el;
//   }
// });
// }
function insertInput(dom) {
  const iptEl = document.createElement("input");
  iptEl.id = "ipt";
  document.body.append(dom, iptEl);
}
function getInputValue(id) {
  const ipt = document.getElementById(id);
  return ipt.value;
}
function formatColor(val) {
  if (typeof val !== "string") {
    return "";
  }
  if (/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/.test(val)) {
    return val;
  }
  return "";
}
