function switchTheme() {
    const dark_mode = document.getElementById("themeSwitch");
    const body = document.body;
    const nav_bar = document.getElementsByClassName("navbar navbar-expand-lg navbar-light bg-light");
    if (dark_mode.innerHTML === "Activate Dark Theme") {
        body.classList.add("bg-dark");
        nav_bar.className += " navbar-dark";
        // nav_bar.className += " bg-dark";
        dark_mode.innerHTML = "Disable Dark Theme";
    }
    else {
        body.removeAttribute("class");
        // nav_bar.classList.remove("bg-dark", "navbar-dark");
        dark_mode.innerHTML = "Activate Dark Theme";
    }
}