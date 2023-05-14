const seta = document.querySelector(".seta")

window.addEventListener("scroll", function (event) {
    if (window.scrollY == 0) {
        seta.classList.remove("visible");
    }

    else {
        seta.classList.add("visible");
    }
});


