

//로딩회면
var promise = new Promise(function (resolve, reject) {

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



//로딩 후 wave
const wave = document.querySelector('#wave-wrap');

const tl = gsap.timeline();
tl.to(wave, {
	y: -1000,
	duration: 1,
	scrub: true,
	delay: 4,
	ease: 'back.out(1.5)',
})

	.to(wave, {
		y: 920,
		duration: 3,
		scrub: 3,
		ease: 'back.out(1.5)',
	});

//
