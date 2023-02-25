const icons = document.querySelectorAll(".icon");
const panels = document.querySelectorAll(".holder");

icons.forEach((icon, index) => {
    icon.addEventListener("click", e => {
        e.preventDefault();
        panels[index + 1].style.transform = "translateX(-11vw)";
        panels[index + 1].style.transition = "1s";
        //window.location = this.href;
    })
});
