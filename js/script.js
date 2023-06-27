var toggleBtn = document.querySelector(".togglebtn");
var links = document.querySelector("nav .navlinks");
var animateText = document.querySelector(".animateText");

toggleBtn.addEventListener("click", function () {
    this.classList.toggle("clicked");
    if (links.style.display === "block") {
        links.style.display = "none";
    } else {
        links.style.display = "block";
    }
})

var typed = new Typed(".animateText", {
    strings: ["Android Developer", "Full Stack Developer"],
    typeSpeed: 50,
    loop: true,
    backSpeed: 30,
});