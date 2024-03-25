window.onload = () => {
  const sourceDom = document.querySelectorAll(".source-box div");

  const targetDom = document.querySelector(".target-box");

  const { dragstart } = sourceEventReg();
  for (let i = 0; i < sourceDom.length; i++) {
    sourceDom[i].ondragstart = dragstart;
  }

  const { dragover, drop } = targetEventReg(targetDom);
  targetDom.ondragover = dragover;
  targetDom.ondrop = drop;
};
function targetEventReg(el) {
  const dragover = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };
  const drop = (e) => {
    const id = e.dataTransfer.getData("text/plain");
    const dom = document.getElementById(id);
    dom.draggable = false;
    el.appendChild(dom);
  };
  return { dragover, drop };
}
function sourceEventReg(use2) {
  if (Boolean(use2)) {
    // cache element
    return (sourceEventReg = function(){
      let cacheEl = null;
      const dragstart2 = function (_e) {
        cacheEl = this; // this-> trigger element
        // console.log(temp);
      };
      const dragend2 = function () {
        cacheEl = null; // release cache
      };
      return { cacheEl, dragstart2, dragend2 };
    })();
  }
  return (sourceEventReg = () => {
      // use id to find trigger element
    const dragstart = (e) => {
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("text/plain", e.target.id);
    };
    return { dragstart };
  })();
}
