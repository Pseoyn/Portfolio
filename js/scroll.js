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
            // end: "+=5000",
            // markers: true,
            end: document.querySelector("#projects-wrap").offsetWidth,
        }
    });

    //

    const tl = gsap.timeline();
    const board = gsap.utils.toArray(".board");

    gsap.set(".in", { y: -100, opacity: 0 })
    gsap.set(board, { y: -100, opacity: 0 })

    //profile inform img, text 
    tl.to(".in", {
        x: 0,
        y: 0,
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
            y: 0,
            x: 0,
            delay: 0.3,
            opacity: 1,
            scrub: 2,
            duration: 1,
            ease: "back.out(1)",
            stagger: {
                amount: 0.5,
                each: 1,
            }
        })
         // const useImg = gsap.utils.toArray(".use-img");
        // gsap.set(useImg, { opacity:0, y: -20})
        // tl.to(useImg,{
        //     opacity: 1,
        //     y: 0,
        //     scrub: 2,
        //     duration: 4,
        //     stagger: {
        //         amount: 3,
        //         each: 3,
        //     },
        //     scrollTrigger: {
        //         trigger: "#skill",
        //         pin: true,
        //         start: "top top",
        //         end : "+=2000 bottom",
        //         scrub: 1,
        //         markers: true,
              
        //     }
        // })

        // gsap.set('#project-wrap', {'background-color': '#00000'});
        tl.fromTo("#body-wrap", {
            backgroundColor: '#fff',
        }, {
            scrollTrigger:{
                trigger: "#projects-wrap",
                scrub: 2,
                start: '-=400 top',
                end: "bottom bottom",
            },
            backgroundColor: 'black',
            color: 'white',
            duration: 1,
            scrub: 2,
            ease: "back.out(1)",
            delay: 1,
        })

        tl.fromTo("#projects-wrap", {
            opacity: 0
        }, {
            opacity:1,
            duration: 1,
            scrub: 2,
            ease: "back.out(1)",
            scrollTrigger:{
                trigger: "#projects-wrap",
                scrub: 2,
                start: '-=400 top',
                end: "bottom bottom",
            },
        })

        const footer = gsap.utils.toArray('.f-gsap')

        tl.fromTo(footer,{
            backgroundColor: 'black',
        },{
            scrollTrigger:{
                trigger: "#footer",
                scrub: 2,
                start: '-=100 top',
                end: "bottom bottom",
                markers: true
            },
            backgroundColor: '#fff'
        })



        tl.to(".svg2",{
            xPercent: -20,
            ease: 'back.out(1)',
            scrub: 2,
            duration: 1,
            target: '#footer'
        })

    }, 5000);

