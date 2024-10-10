export function scrollToTop(offset: number = 0) {
  window.scrollTo({
    top: offset,
    behavior: "smooth",
  });
}
