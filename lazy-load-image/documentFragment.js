const imgList = [
  {
    src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.wxGUh-6Bz-WI45cnTX_yQgHaEK%26pid%3DApi&f=1&ipt=c337c99235ecb80885d6596f0a9cbc8fe1c39427809a2a165d06fde9bd2eef5f&ipo=images",
    alt: "test 1",
  },
  {
    src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.-rQhP75TOjfce6xfwF0h-wHaEK%26pid%3DApi&f=1&ipt=0a0c553bac2f4715489816f5bd7d2f2e12e5718ea1d50f3e0bac45923df3f9e3&ipo=images",
    alt: "test 2",
  },
  {
    src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.aNnZNu0a8GHZtrrK0LrQSAHaEK%26pid%3DApi&f=1&ipt=d98f1690ae49ab333cb860f611766c3dcd5b7c0f9cbff333cb3b609a4135a452&ipo=images",
    alt: "test 3",
  },
  {
    src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.FcNixjk0iTxDg-BGIJih_wHaDt%26pid%3DApi&f=1&ipt=22a45ec1e12af2e99172ba6ee2a71a98c686793d9b85ad375529b2bcee6582b9&ipo=images",
    alt: "test 4",
  },
];
function isElement(obj) {
  return typeof HTMLElement === "object"
    ? obj instanceof HTMLElement
    : !!(
        obj &&
        typeof obj === "object" &&
        (obj.nodeType === 1 || obj.nodeType === 9) &&
        typeof obj.nodeName === "string"
      );
}
function setTagAttribute(dom, attrs) {
  if (!isElement(dom)) {
    throw Error(`expect Dom element`);
  }
  if (!Array.isArray(attrs)) {
    throw Error(`expect tag type: array`);
  }
  attrs.forEach((attr) => {
    dom.setAttribute(attr.name, attr.val);
  });
}
function createImg(imgData) {
  const imgDom = document.createElement("img");
  setTagAttribute(imgDom, [
    { name: "data-src", val: imgData.src },
    { name: "data-alt", val: imgData.alt },
  ]);
  return imgDom;
}
function renderImgDom(tag) {
  if (typeof tag !== "string") {
    throw Error(`expect tag type: string, but ${typeof tag}`);
  }
  const appDom = document.getElementById(tag);
  const fragment = document.createDocumentFragment();

  imgList.forEach((img) => {
    const wrapBoxDom = document.createElement("div");
    wrapBoxDom.classList.add("img-box");

    const imgDom = createImg(img);
    
    wrapBoxDom.appendChild(imgDom);

    fragment.appendChild(wrapBoxDom);
    appDom.appendChild(fragment);
  });
}
export { renderImgDom };
