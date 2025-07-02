let savedTheme;

function darkMode() {
    document.body.classList.toggle("dark");
    document.querySelector('header').classList.toggle("dark");
    document.getElementById("navigationBar").classList.toggle("dark");
    document.getElementsByClassName("profile").item(0).classList.toggle("dark");
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

    if (document.body.classList.contains("dark")) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.removeItem('theme');
    }
}

window.addEventListener('DOMContentLoaded', () => {
    savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        darkMode();
    }
})

document.getElementById("dark-mode-button").addEventListener('click', darkMode);