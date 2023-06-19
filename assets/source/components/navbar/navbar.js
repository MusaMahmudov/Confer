export function pages() {
  let pages = document.getElementsByClassName("pages")[0];
  pages.style.height = "50px";
  pages.addEventListener("mouseenter", (e) => {
    let list = e.target.getElementsByClassName("window")[0];
    list.classList.remove("hidden");
  });

  pages.addEventListener("mouseleave", (e) => {
    let list = e.target.getElementsByClassName("window")[0];
    list.classList.add("hidden");
  });
}
