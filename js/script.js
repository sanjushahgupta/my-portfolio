var toggleBtn = document.querySelector(".togglebtn");
var nav = document.querySelector(".navlinks");
var links = document.querySelector(".navlinks li");
var animateText = document.querySelector(".animateText");

toggleBtn.addEventListener("click", function () {
    this.classList.toggle("clicked");
    nav.classList.toggle("open");

})

var typed = new Typed(".animateText", {
    strings: ["Web Developer", "Android Developer", "Web and Android Developer"],
    typeSpeed: 50,
    loop: true,
    backDelay: 900,
    backSpeed: 30
});

