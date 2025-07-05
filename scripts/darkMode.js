let savedTheme = localStorage.getItem("theme");
let systemPreference = window.matchMedia("(prefers-color-scheme: dark)");

// Load theme button image into 'themeImage'
let themeImage = document.getElementById("theme-mode");

if (savedTheme === "dark" || (!savedTheme && systemPreference)) {
    // Switch to dark theme
    document.documentElement.classList.add("dark");

    // Save default theme to local storage
    localStorage.setItem("theme", "dark");

    // Change button Image
    themeImage.src = "images/lightmode.png";
}

function changeTheme() {
    let theme = localStorage.getItem("theme");
    if (theme === "dark") {
        document.documentElement.classList.remove("dark");
        localStorage.removeItem("theme");
        themeImage.src = "images/lightmode.png";
    } else {
        localStorage.setItem("theme", "dark");
        document.documentElement.classList.add("dark");
        themeImage.src = "images/darkmode.png";
    }
}

let themeButton = document.getElementById("theme-mode-button");
themeButton.addEventListener("click", changeTheme);