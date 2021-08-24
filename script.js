function switchTheme() {
    const dark_mode = document.getElementById("themeSwitch");
    const body = document.body;
    const nav_bar = document.getElementsByClassName("navbar navbar-expand-lg navbar-light bg-light")[0];
    const cards = document.getElementsByClassName("card");
    const header = document.querySelector("h1");
    const table = document.querySelectorAll('th,td,thead,tbody,table,tr');
    const footer = document.getElementsByClassName("navbar mt-5")[0];
    const column_direction = document.getElementsByClassName("row")[0];
    const column_name = document.getElementsByClassName("card-title")
    const below_the_web = document.getElementsByClassName("row mt-5")
    if (dark_mode.innerText === "Activate Dark Theme") {
        body.classList.add("bg-dark");
        nav_bar.className += " navbar-dark" + " bg-dark";
        dark_mode.textContent = "Disable Dark Theme";
        for (let i = 0;i < cards.length; i++) {
            cards[i].className += " text-white" + " bg-dark" + " border-light";
        }
        for (let i = 0;i < table.length; i++) {
            table[i].style.color = "white"
        }
        column_direction.style.flexDirection = "column";
        for (let i = 1;i <= column_name.length; i++) {
            column_name[i-1].textContent = "Row " + i + " of 3"
        }
        header.classList.add("text-white");
        header.textContent = "This is the Dark theme";
        footer.classList.add("text-white");
        footer.style.float = "right";
        for (let i = 1;i < below_the_web.length; i++) {
            below_the_web[i].style.color = "white"
        }
    }
    else {
        body.removeAttribute("class");
        nav_bar.classList.remove("bg-dark", "navbar-dark");
        dark_mode.innerHTML = "Activate Dark Theme";
        for (let i = 0;i < cards.length; i++) {
            cards[i].classList.remove("text-white", "bg-dark", "border-light");
        }
        for (let i = 0;i < table.length; i++) {
            table[i].style.color = "black"
        }
        column_direction.style.flexDirection = "row";
        for (let i = 1;i <= column_name.length; i++) {
            column_name[i-1].textContent = "Column " + i + " of 3"
        }
        header.classList.remove("text-white");
        header.textContent = "This is the Light theme";
        footer.classList.remove("text-white");
        footer.style.float = "left";
    }
}