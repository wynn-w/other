import { type } from "./archive/config.js";

const path = `./${type}-main.js`;
import(path).then((res, rej) => {
  if (rej) {
    console.error("import fail", rej);
  } else {
    console.log("import success");
  }
});
