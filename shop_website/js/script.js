// scroll effct
const heade = document.getElementById("header");

window.onscroll = function () {
    if (document.documentElement.scrollTop > 50) {
        heade.classList.add("scroll_effite")
    } else {
        heade.classList.remove("scroll_effite")
    }
}


// nab bar hide
const nab_itams = document.querySelectorAll('.nav-link');
const navbar_collapse = document.querySelector('.navbar-collapse');

nab_itams.forEach(e => {
    e.addEventListener('click', () => {
        navbar_collapse.classList.remove("show")
    })
});