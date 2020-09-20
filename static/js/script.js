function hamToggle() {
    var x = document.getElementById("menu");
    var y = document.getElementById("hamburger");
    if (x.classList.contains("active")) {
        x.classList.remove("active");
        y.classList.remove("active");
    } else {
        x.classList.add("active");
        y.classList.add("active");
    }
}
function tipToggle(id) {
    var x = document.getElementById(id);
    if (x.classList.contains("show")) {
        x.classList.remove("show");
    } else {
        x.classList.add("show");
    }
}
