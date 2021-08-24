function switchTheme() {
    const dark_mode = document.getElementById("themeSwitch");
    const body = document.body;
    const nav_bar = document.getElementsByClassName("navbar navbar-expand-lg navbar-light bg-light")[0];
    const cards = document.getElementsByClassName("card");
    if (dark_mode.innerText === "Activate Dark Theme") {
        body.classList.add("bg-dark");
        nav_bar.className += " navbar-dark" + " bg-dark";
        dark_mode.innerHTML = "Disable Dark Theme";
        for (let i = 0;i < cards.length; i++) {
            cards[i].className += " text-white" + " bg-dark" + " border-light";
        }
    }
    else {
        body.removeAttribute("class");
        nav_bar.classList.remove("bg-dark", "navbar-dark");
        for (let i = 0;i < cards.length; i++) {
            cards[i].classList.remove("text-white", "bg-dark", "border-light");
        }
        dark_mode.innerHTML = "Activate Dark Theme";
    }
}