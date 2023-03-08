const Button = document.querySelector(".buttons-bar");
const children = Button.children;

Button.addEventListener("click", function (e) {
  const item = e.target.closest("button");
  for (let i = 0; i < children.length; i++) {
    children[i].classList.remove("collection");
  }
  item.classList.add("collection");
});
