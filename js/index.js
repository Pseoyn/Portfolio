

	//로딩회면
	var promise = new Promise(function (resolve, reject) {

		var current = 0;
		imgDuration = 500;

		show()

		function show() {
			var showImg = document.querySelectorAll('.loading-img');

			for (let i = 0; i < showImg.length; i++) {
				showImg[i].style.display = "none";
			}
			current++;

			/* currnet 가 4보다 클 경우 1로 초기화, 동기적으로 실행되기 때문에 
				if 문 조건에 안맞으면 건너뛴다. */
			if (current > showImg.length) {
				current = 1;
			}
			showImg[current - 1].style.display = "block";
			setTimeout(show, imgDuration);
		}

		//5초 실행
		setTimeout(function () {
			resolve();
		}, 5000)
	});

	//promise 안의 코드가 실행이 완료가 되었을 때 then() 함수 내의 코드를 실행, 실패했을 경우 catch()
	promise.then(function () {
		document.querySelector("#loading-wrap").style.display = "none"

		// css 에서 none 으로 설정 후 실행이 완료되었을 때 block
		document.querySelector("#body-wrap").style.display = "block";
	});

	//

	// 메인화면 header 텍스트 효과 ( https://akashraj9828.github.io/svg-text-animation-generator/ )
	function setTextAnimation(delay, duration, strokeWidth, timingFunction, strokeColor, repeat) {
		let paths = document.querySelectorAll("path");
		let mode = repeat ? 'infinite' : 'forwards'
		for (let i = 0; i < paths.length; i++) {
			const path = paths[i];
			const length = path.getTotalLength();
			path.style["stroke-dashoffset"] = `${length}px`;
			path.style["stroke-dasharray"] = `${length}px`;
			path.style["stroke-width"] = `${strokeWidth}px`;
			path.style["stroke"] = `${strokeColor}`;
			path.style["animation"] = `${duration}s svg-text-anim ${mode} ${timingFunction}`;
			path.style["animation-delay"] = `${i * delay}s`;
		}
	}
	setTextAnimation(0.1, 3, 3, 'ease-in-out', '#000000', true);

	//


// gsap
	//로딩 후 wave
	const wave = document.querySelector('#wave-wrap');
	
	const tl = gsap.timeline();
	tl.to(wave, {
	  y: 933,
	  duration: 2,
	  delay: 5,
	  ease: 'back.out(1.5)',
	  stagger: 0.1,
	});
	
// gsap.registerPlugin(ScrollTrigger);

//         let sections = gsap.utils.toArray(".project");

//         gsap.to(sections, {
//             xPercent: -100 * (sections.length - 1),
//             ease: "none",
//             scrollTrigger: {
//                 trigger: "#projects-wrap",
//                 pin: true,
//                 scrub: 1,
//                 snap: 1 / (sections.length - 1),
//                 start: "top top",
//                 // end: "+=7000",
//                 markers: true,
//                 // end: document.querySelector("#projects-wrap").offsetWidth,
//             }
//         });