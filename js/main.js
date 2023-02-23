const nav = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-button");
const navImg = document.querySelector("#nav-b-img");
let themes = document.querySelectorAll(`.theme`);

navBtn.addEventListener(`click`, () => {
    if (nav.classList.toggle("open")){
        navImg.src = "assets/close.png"
    } else {
        navImg.src = "assets/nav.png"
    }
});

for (th of themes) {
th.addEventListener(`click`, function(evt){
    console.log(`!!!!!!`)
    nav.classList.remove("open");
    navImg.src = "assets/nav.png"
    }
)
}