let navbar = document.getElementById("navbar");
let hero_text = document.querySelector(".hero_text p");
window.addEventListener("scroll", () => {
    const offset = window.pageYOffset;
    console.log(offset);
    if (offset >= 10) {
        navbar.style.backdropFilter = "blur(10px)";
        hero_text.style.opacity = "1";
    }
    else {
        navbar.style.backdropFilter = "blur(0px)";
        hero_text.style.opacity = "0";
    }

});

//   text revealing js
gsap.registerPlugin(ScrollTrigger);
gsap.utils.toArray(".revealUp").forEach(function (elem) {
  ScrollTrigger.create({
    trigger: elem,
    start: "top 70%",
    end: "bottom 30%",
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
    },
    onLeave: function () {
      gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
    },
    onEnterBack: function () {
      gsap.fromTo(
        elem,
        { y: -100, autoAlpha: 0 },
        {
          duration: 1.25,
          y: 0,
          autoAlpha: 1,
          ease: "back",
          overwrite: "auto"
        }
      );
    },
    onLeaveBack: function () {
      gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
    }
  });
});


// loader
const loader = document.getElementById("loader");
window.addEventListener('load', () => {
    setTimeout(() => {
        loader.style.display = "none";
    },2000);
});