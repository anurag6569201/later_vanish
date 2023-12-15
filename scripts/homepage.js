let navbar=document.getElementById("navbar");
let hero_text=document.querySelector(".hero_text p");
let content_head=document.querySelector(".content_head");
window.addEventListener("scroll", () => {
    const offset = window.pageYOffset;
    console.log(offset);
    if(offset>=10){
        navbar.style.backdropFilter = "blur(10px)";
        hero_text.style.opacity="1";
    }
    else{
        navbar.style.backdropFilter = "blur(0px)";
        hero_text.style.opacity="0";
    }
    // if(offset>=)
    // parllel.style.backgroundPositionY = offset * 0.7 + "px";
});