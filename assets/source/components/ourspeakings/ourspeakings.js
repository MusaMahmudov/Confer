export function speakingsScroll() {
  let lists = document.querySelector(".images").getElementsByTagName("li");

  function scroll(e) {
    let windows = e.target.getElementsByClassName("window")[0];
    windows.style.top = "0px";
  }
  function back(e) {
    let windows = e.target.getElementsByClassName("window")[0];
    windows.style.top = "-130px";
  }

  for (let index = 0; index < lists.length; index++) {
    lists[index].addEventListener("mouseenter", scroll);
  }
  for (let index = 0; index < lists.length; index++) {
    lists[index].addEventListener("mouseleave", back);
  }
}
