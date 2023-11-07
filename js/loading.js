window.onload = function () {

	//------------------------------------------- 로딩 -------------------------------------------

	var promise = new Promise(function (resolve, reject) {
		var current = 0;
		imgDuration = 500;

		show()

		function show() {

			var showImg = document.querySelectorAll('.loading_img');
			var waveShow = document.getElementsByClassName('loading_wave');

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

		setTimeout(function () {
			resolve();
		}, 5000)
	});

	//promise 안의 코드가 실행이 완료가 되었을 때 then() 함수 내의 코드를 실행, 실패했을 경우 catch()
	promise.then(function () {
		document.querySelector("#loading_wave").style.display = "none"

		// css 에서 none 으로 설정 후 실행이 완료되었을 때 block ( 이런 방법을 생각 못하고 어렵게 생각하고 있었다..)
		document.querySelector("#body_wrap").style.display = 'block';
	});

	// ------------------------------------------- svg 폰트 -------------------------------------------
	function setTextAnimation(delay, duration, strokeWidth, timingFunction, strokeColor,repeat) {
		let paths = document.querySelectorAll("path");
		let mode=repeat?'infinite':'forwards'
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
	setTextAnimation(0.1,3.7,1,'linear','#000000',true);
}



