//https://heemwon.github.io/dothome1/effect/mouseEffect.html

// 선택자
const cursor = document.querySelector(".cursor");
const contentEm = document.querySelectorAll(".project");
const infoLi = document.querySelectorAll(".info.bottom li");

// 움직임 효과
document.addEventListener("mousemove", function(e){
    gsap.to(cursor, {duration: 0.3, left: e.pageX, top: e.pageY});
});

// 오버 효과
contentEm.forEach(elem => {
    elem.addEventListener("mouseenter", () => {
        cursor.classList.add("active");
    });
    elem.addEventListener("mouseleave", () => {
        cursor.classList.remove("active");
    });
});

// 출력용
infoLi.forEach(info => {
    info.addEventListener("click", function(){
        const text = this.textContent || this.innerHTML;
        cursor.style.mixBlendMode = text;

        infoLi.forEach(li => {
            li.classList.remove("active");
            this.classList.add("active");
        });
    });
});