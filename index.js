const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  console.log("hello world", window.scroll);
  header.classList.toggle("sticky", window.scrollY > 60);
});
const ButtonClick = () => {
  console.log("button cicked");
};

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("open");
};
