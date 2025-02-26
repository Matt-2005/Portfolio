new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 30,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },  
    },
    autoplay: {
        delay: 3000,
        pauseOnMouseEnter: true,
    },

});

window.addEventListener("scroll", function() {
    let scrollY = window.scrollY;

    document.querySelector(".projet3paralaxText1").style.transform = `translateX(calc(-50% + ${scrollY * 0.1}px))`;
    document.querySelector(".projet3paralaxText2").style.transform = `translateX(calc(-50% - ${scrollY * 0.1}px))`;
});

let svg = document.querySelector("svg")
let path = svg.querySelector("path");

const pathLength = path.getTotalLength();
gsap.set(path, {strokeDasharray: pathLength});

gsap.fromTo(
    path, 
    {
        strokeDashoffset: pathLength,
    }, 
    {
        strokeDashoffset: 0,
        duration: 1.5,
        ease: "none",
        // scrollTrigger: {
        //     trigger: ".svg-container",
        //     start: "top top",
        //     end: "bottom bottom",
        //     scrub: 1,
        // },
    }
);

let svgPhone = document.querySelector(".svg-phone")
let pathPhone = svgPhone.querySelector("path");

const pathLengthPhone = pathPhone.getTotalLength();
gsap.set(pathPhone, {strokeDasharray: pathLengthPhone});

gsap.fromTo(
    pathPhone, 
    {
        strokeDashoffset: pathLengthPhone,
    }, 
    {
        strokeDashoffset: 0,
        duration: 5,
        ease: "none",
        // scrollTrigger: {
        //     trigger: ".svg-container",
        //     start: "top top",
        //     end: "bottom bottom",
        //     scrub: 1,
        // },
    }
);

document.body.style.overflow = "hidden"; // Désactive le scroll

setTimeout(() => {
    document.body.style.overflow = "auto"; // Réactive le scroll après 2.6s
}, 2600);
