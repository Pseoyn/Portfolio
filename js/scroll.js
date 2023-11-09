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
            end: "+=7000",
            // markers: true,
            // end: document.querySelector("#projects-wrap").offsetWidth,
        }
    });

    //

    const tl = gsap.timeline();
    const board = gsap.utils.toArray(".board");

    gsap.set(".in", { opacity: 0 })
    gsap.set(board, { opacity: 0 })

    //profile inform img, text 
    tl.to(".in", {
        x: 0,
        y: 200,
        opacity: 1,
        stagger: {
            amount: 0.1,
            each: 1,
        },
        duration: 1,
        scrub: 2,
        ease: "bounce",
        delay: 1,
        // scrollTrigger: {
        //     trigger: '#profile',
        //     start: "5% top",
        //     end: "+=10",
        //     //markers: true,
        //     toggleActions: "restart none reverse none"
        // }
    });

        //profile boards
        tl.to(board, {
            y: 100,
            x: 0,
            delay: 0.3,
            opacity: 1,
            scrub: 2,
            duration: 1,
            ease: "back.out(1)",
            stagger: {
                amount: 0.5,
                each: 1,
            },
            
            // scrollTrigger: {
            //     trigger: '#profile',
            //     // ease: "back.out(5)",
            //     start: "5% top",
            //     end: "+=10",
            //     //markers: true,
            //     toggleActions: "restart none reverse none"
            // }

        })

        .to("#profile", {
            y: 250,
            x: 50,
            scrollTrigger: {
                trigger: "#prosile",
                duration: 4,
                scrub: 3,
                ease: "back.out(5)",
                start: "top top",
                end: "+=1500",
                markers: true,
                toggleActions: "restart none reverse none"

            }
        })
        
    // 로딩 끝난 후 scroll text
    gsap.set("#scroll-text > h1", {
        opacity: 0
    })

    tl.to("#scroll-text > h1", {
        opacity: 1,
        repeat: -1,
        duration: 1,
        yoyo: true
    })

    .to("#scroll-text", {
        opacity: 0,
        scrollTrigger: {
            trigger: '#profile',
            duration: 4,
            scrub: 3,
            // ease: "back.out(5)",
            start: "5% top",
            end: "+=10",
            //markers: true,
            toggleActions: "restart none reverse none"
        }
        
    });

}, 5000);

