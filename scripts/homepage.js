let navbar=document.getElementById("navbar");
let hero_text=document.querySelector(".hero_text p");
let content_head=document.querySelector(".content_head");
let redeem_head=document.querySelector(".redeem_head");
window.addEventListener("scroll", () => {
    const offset = window.pageYOffset*0.7;
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

//   text revealing js
gsap.registerPlugin(ScrollTrigger);
gsap.utils.toArray(".revealUp").forEach(function (elem) {
  ScrollTrigger.create({
    trigger: elem,
    start: "top 85%",
    end: "bottom 15%",
    markers: false,
    onEnter: function () {
      gsap.fromTo(
        elem,
        { y: 100, autoAlpha: 0 },
        {
          duration: 1.25,
          y: 0,
          autoAlpha: 1,
          ease: "back",
          overwrite: "auto"
        }
      );
    }
  });
});