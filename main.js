const header = document.querySelector(".header");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 150 ||
    document.documentElement.scrollTop > 150
  ) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
