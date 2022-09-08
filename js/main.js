const bar = document.querySelector(".head-top__hamburger");
const menu = document.querySelector(".head-top__right");
const middleMenu = document.querySelector(".head-middle");
bar.addEventListener("click", ()=> {
  bar.classList.toggle("active");
  menu.classList.toggle("active");
  middleMenu.classList.toggle("active");
});

document.querySelectorAll(".menu-item").forEach(item => {
  item.addEventListener("click", ()=> {
    bar.classList.remove("active");
    menu.classList.remove("active");
    middleMenu.classList.remove("active");
  })
})