// 위로 스크롤 할 때 헤더 보이게 하는 기능

document.addEventListener("DOMContentLoaded", function () {

    const header = document.querySelector("header");

    let lastScrollY = window.scrollY;



    // 페이지를 로드할 때 헤더를 보이게 설정

    header.classList.add("show");



    window.addEventListener("scroll", function () {

        if (window.scrollY > lastScrollY && window.scrollY > 0) {

            // 스크롤 다운

            header.classList.remove("show");

        } else if (window.scrollY < lastScrollY) {

            // 스크롤 업

            header.classList.add("show");

        }

        lastScrollY = window.scrollY;

    });

});