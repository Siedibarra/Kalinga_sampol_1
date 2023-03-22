
// var btnContainer = document.getElementById("navbar-nav");
// var btns = btnContainer.getElementByClassName("nav-link");

// for(var i = 0; i<btns.length; i++) {
//     btns[i].addEventListener('click', function(){
//         var current = document.getElementByClassName("active");
//         current[0].className = current[0].className.replace(" active");
//         this.className += " active";
//     })
// }

const currentLocation = location.href;
const menuItem = document.querySelectorAll(".nav-item a");
const menuLength = menuItem.length
for(let i = 0; i<menuLength; i++) {
    if (menuItem[i].href === currentLocation) {
        menuItem[i].className = "active"
    }
}


// let navlinks = document.querySelectorAll(".nav-item a");
// let currentURL = window.location.href;
// for (let i = 0; i<navlinks/length; i++) {
//     if (navlinks[i].href === currentURL) {
//         navlinks[i].className = ("active");
//     }
// }