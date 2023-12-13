let navbar=document.getElementById("navbar");
window.addEventListener("scroll", () => {
    const offset = window.pageYOffset;
    if(offset>=10){
        navbar.style.backdropFilter = "blur(10px)";
    }
    else{
        navbar.style.backdropFilter = "blur(0px)";
    }
    // parllel.style.backgroundPositionY = offset * 0.7 + "px";
});