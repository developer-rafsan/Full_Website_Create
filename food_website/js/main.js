// stycky hader
const header = document.getElementById("header");
document.addEventListener('scroll',()=>{
    if (window.pageYOffset > 100) {
        header.classList.add("sticky_manu");
        header.style.backdropFilter = `blur(10px)`;
    }else {
        header.classList.remove("sticky_manu");
        header.style.backdropFilter = `none`;
    }
})


// mamu hideing
const navBar = document.querySelectorAll(".nav-link");
const hideManu = document.querySelector(".navbar-collapse")
navBar.forEach(function(a){
    a.addEventListener('click',()=>{
        hideManu.classList.remove("show")
    })
})


// preloder
const preloder = document.getElementById("preloder");
window.addEventListener('load',()=>{
    preloder.style.display="none";
})
