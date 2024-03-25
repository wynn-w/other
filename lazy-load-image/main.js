import { renderImgDom } from "./documentFragment.js";
import { lazyLoad } from "./lazyLoad.js";
window.onload = (_e) => {
  renderImgDom("app");
  lazyLoad();
};
