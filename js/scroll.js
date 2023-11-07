// ------------------------------------------- 스크롤을 smooth 하게 -------------------------------------------

const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
});
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);


// ------------------------------------------- 가로 스크롤 -------------------------------------------

gsap.registerPlugin(ScrollTrigger);

//로딩 페이지로 인한 reflow 현상때문에 setTimeout 사용

setTimeout(() => {
    const sections = gsap.utils.toArray(".project");

    gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: "#projects-wrap",
            pin: true,
            scrub: 1,
            snap: 1 / (sections.length - 1),
            start: "top top",
            // end: "+=7000",
            // markers: true,
            // end: document.querySelector("#projects-wrap").offsetWidth,
        }
    });

    const tl = gsap.timeline();
    const board = gsap.utils.toArray(".board");

    
    gsap.set( board, {y: -100})

    tl.to(".svg-textWrap1", {
        x: -1000,
        y: -50,
        rotate: 12,
        scrollTrigger: {
            trigger: "#body-wrap",
            start: "+=50",
            end: "bottom bottom",
            // markers: true,
            duration: 3,
            scrub: 2,

        }
    })

    tl.to ("#inform", {
        delay: 0.5,
        x: 0,
        y: 200,
        scrollTrigger: {
            trigger: '#profile',
            duration: 4,
            scrub: 3,
            // ease: "back.out(5)",
            start: "-10% top",
            end: "+=1500",
            markers: true,
            toggleActions: "restart none reverse none"
            
        }
    })
    tl.to("#boards", {
        y: 100,
        scrollTrigger: {
            trigger: '#profile',
            duration: 4,
            scrub: 3,
            // ease: "back.out(5)",
            start: "top top",
            end: "+=500 bottom",
            // markers: true,
            toggleActions: "restart none reverse none"
            
        }
    })

    .to(board, {
        y: 0,
        x: 0,
        delay: 0.3,
        opacity: 1,
        scrub: 3,
        duration: 2,
        ease: "back.out(1)",
        stagger: {
            amount: 0.5,
            each: 1,
        },
        scrollTrigger: {
            trigger: '#profile',
            duration: 4,
            scrub: 3,
            // ease: "back.out(5)",
            start: "-20% top",
            end: "+=10",
            markers: true,
            toggleActions: "restart none reverse none"
        }

    })
}, 5000);



