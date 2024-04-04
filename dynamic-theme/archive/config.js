const styleIds = ["insert-0x38", "insert-0x12"];
export const typeEnum = {
  override: "override",
  replace: "replace",
};
export const type = typeEnum.replace;
export const colorList = ["green", "yellow"];
export const styleId = (() => {
  return type === typeEnum.replace ? styleIds[0] : styleIds[1];
})();
