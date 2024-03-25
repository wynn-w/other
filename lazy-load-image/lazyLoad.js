export function lazyLoad() {
  const imgs = document.querySelectorAll("img");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((i) => {
        if (i.isIntersecting) {
          const imgTag = i.target;
          const src = imgTag.getAttribute("data-src");
          imgTag.setAttribute("src", src);
          console.log("load image", Date.now());
          observer.unobserve(imgTag);
        }
      });
    },
    { threshold: 0 }
  );
  imgs.forEach((img) => {
    observer.observe(img);
  });
}
