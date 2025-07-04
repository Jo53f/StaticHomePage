let savedTheme;

function darkMode() {
    document.body.classList.toggle("dark");
    document.querySelector('header').classList.toggle("dark");
    document.getElementById("navigationBar").classList.toggle("dark");
    document.getElementById("dark-mode-button").classList.toggle("dark");

    var profile = document.getElementsByClassName("profile").item(0);
    if (profile) {
        profile.classList.toggle("dark");
    }

    var cards = document.getElementsByClassName("card");
    for (var i = 0; i < cards.length; i++) {
        document.getElementsByClassName("card")[i].classList.toggle("dark");
    }

    var downloadButton = document.getElementsByClassName("btn").item(0);
    if (downloadButton) {
        downloadButton.classList.toggle("dark");
    }

    // document.getElementsByClassName("profile").item(0).classList.toggle("dark");
    // document.getElementsByClassName("card").item(0).classList.toggle("dark");

    // console.log(document.getElementsByClassName("card").length);


    // let cards = document.getElementsByClassName("card");
    // for (let i = 0; i < cards.length; i++) {
    //     cards[i].classList.toggle("dark");
    // }

    // const navButtons = document.getElementById("navigationBar").children[0].children;
    // for (let button of navButtons) {
    //     button.classList.toggle("dark");
    // }

    let darkModeImage = document.getElementById("dark-mode-image");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem('theme', 'dark');
        darkModeImage.src = "images/lightmode.png";
    } else {
        localStorage.removeItem('theme');
        darkModeImage.src = "images/darkmode.png";
    }
}

window.addEventListener('DOMContentLoaded', () => {
    savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        darkMode();
    }
})

document.getElementById("dark-mode-button").addEventListener('click', darkMode);