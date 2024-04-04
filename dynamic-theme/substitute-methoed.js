window.onload = () => {
  const btn = document.getElementById("btn");
  insertInput(btn);

  btn.addEventListener("click", () => {
    const color = formatColor(getInputValue("ipt"));
    setThemeColor(color);
  });
};
// --------- core ------------ 
function setThemeColor(color) {
  if (color) {
    document.documentElement.style.setProperty("--button-color", color);
  }
}
// --------- core ------------ end
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
