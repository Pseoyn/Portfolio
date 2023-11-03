
//로딩 후 wave
const wave = document.querySelector('#only_box');

gsap.to(wave, {
    y: 963,
    duration: 2,
    delay: 5,
    ease: 'back.out(1.5)',
    stagger: 0.1,
});

gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".project");

gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: "#projects_wrapper",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: "+=7000",
        // end: document.querySelector("#parallax__cont").offsetWidth,
    }
});



// gsap.to("#headers", {
//     y: -100,
//     x: 100,
//     duration: 1,
//     scrollTrigger: {
//         toggleActions: "restart none reverse none",
//         trigger: "#headers",
//         pin: true,
//         start: 'top top',
//         end: '+=900 100%',
//         markers: true,
//         scrub: 5,
//         ease: 'back.in(1.5)',
//     },
// })

// ScrollTrigger.create({
//     trigger:".gsap",
//     start: 'top top',
//     end: '+=900 100%',
//     marker: true,
//     pin: true,
//     scrub: 3,
//     pin: true,
//     anticipatePin: 1
// })



//animation
// gsap.to(".board", {
//     y: 100,
//     duration: 1,
//     delay: 6,
//     ease: "back.out(5)",
//     stagger: {
//         amount: 0.5,
//         each: 0.1,
//     },
//     // stagger : 0.1,
//     yoyo: true,
//     // repeat:-1,
//     delay: 5,
//     rotate: 0
// });








