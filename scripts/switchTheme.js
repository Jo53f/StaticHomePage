function changeTheme() {
    let theme = localStorage.getItem("theme");
    let themeImage = document.getElementById("theme-mode");
    if (theme === "dark") {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        themeImage.src = "images/darkmode.png";
    } else {
        localStorage.setItem("theme", "dark");
        document.documentElement.classList.add("dark");
        themeImage.src = "images/lightmode.png";
    }
}

let themeButton = document.getElementById("theme-mode-button");
themeButton.addEventListener("click", changeTheme);

if (localStorage.getItem("theme") === "dark") {
    document.getElementById("theme-mode").src = "images/lightmode.png";
}