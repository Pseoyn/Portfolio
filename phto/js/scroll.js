
gsap.registerPlugin(ScrollTrigger);

const ani = gsap.timeline();
ani.to("#headers", {})

ScrollTrigger.create({
    animation: ani,
    trigger: "#headers",
    start: "top top",
    end: "+=3000 100%",
    pin: true,
    markers: true,
});

gsap.to("#profile", {
    rotate: 30,
    duration: 3,
    scrollTrigger: {
        targget: "#profile",
        start: "top 10%",
        end: "+=3000 100%",
        // markers: true,
        scrub: 3,
        pin: false,
        pinSpacing: false

    }
});

// gsap.to(".only_wave2", {
//     ScrollTrigger: {
//         trigger: "",
//         // start: "top center" 시작 하는 부분 설정
//         // end : 끝나는 부분 설정
//         /* end : () => "+=" + document.querySelector("").offsetWidth
//              시작, 끝 동시에 (애니메이션 효과라고 생각하면 될 듯하다)*/
//         markers: "true",
//         scrub: 1,
//         toggleActions: "restart none reverse none"
//     },
//     ease: "none",
//     duration: 3
// });

const wave = document.querySelector('#only_box');

gsap.to(wave, {
    y: 963,
    duration: 2,
    delay: 5,
    ease: 'back.out(1.5)',
    // paused:  true,
    stagger: 0.1,
});

gsap.to(".board", {
    y: 100,
    duration: 1,
    delay: 6,
    ease: "back.out(5)",
    stagger: {
        amount: 0.5,
        each: 0.1,
    },
    // stagger : 0.1,
    yoyo: true,
    // repeat:-1,
    delay: 5,
    rotate: 0
});
//board 두개로 나눠서 효과, 그리고 class명 추가해서 transform 으로 해보면 괜찮을 듯?
//배경 움직이는 그라데이션이랑, 물방울 효과
gsap.to("#boards",{
    y: -50,
    duration: 4,
    ease: "none",
    delay: 5,
    yoyo: true,
    repeat: -1
});







