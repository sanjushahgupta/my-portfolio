var toggleBtn = document.querySelector(".togglebtn");
var links = document.querySelector("nav .navlinks");
var animateText = document.querySelector(".animateText");
var modal = document.querySelectorAll(".my-modal");
var detailBtns = document.querySelectorAll(".detailsBtn")



toggleBtn.addEventListener("click", function () {
    this.classList.toggle("clicked");
    if (links.style.display === "block") {
        links.style.display = "none";
    } else {
        links.style.display = "block";
    }
})

detailBtns.forEach(function (detailBtn, index) {
    detailBtn.addEventListener("click", function () {
        modal[index].style.display ="block"
    })
    window.addEventListener("mousedown", function(event) {
        if (!modal[index].contains(event.target)) {
            modal[index].style.display = "none";
        }
    });
})
 

var typed = new Typed(".animateText", {
    strings: ["Android Developer", "Full Stack Developer"],
    typeSpeed: 50,
    loop: true,
    backSpeed: 30,
});


