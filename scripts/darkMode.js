let savedTheme = localStorage.getItem("theme");
let systemPreference = window.matchMedia("(prefers-color-scheme: dark)");

// Load theme button image into 'themeImage'
if (savedTheme === "dark" || (!savedTheme && systemPreference.matches)) {
    // Switch to dark theme
    document.documentElement.classList.add("dark");

    // Save default theme to local storage
    localStorage.setItem("theme", "dark");
}