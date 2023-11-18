    document.querySelector(".bars__Menu").addEventListener("click",
    animateBar);

    var line1__Bars = document.querySelector(".line1__bars-menu");
    var line2__Bars = document.querySelector(".line2__bars-menu");
    var line3__Bars = document.querySelector(".line3__bars-menu");
    
    function animateBar (){
        line1__Bars.classList.toggle("Activeline1__bars-menu");
        line2__Bars.classList.toggle("Activeline2__bars-menu");
        line3__Bars.classList.toggle("Activeline3__bars-menu");
    }