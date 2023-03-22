
var btnContainer = document.getElementById("navbar-nav");
var btns = btnContainer.getElementByClassName("nav-link");

for(var i = 0; i<btns.length; i++) {
    btns[i].addEventListener('click', function(){
        var current = document.getElementByClassName("active");
        current[0].className = current[0].className.replace(" active");
        this.className += " active";
    })
}