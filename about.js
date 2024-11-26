document.addEventListener("DOMContentLoaded", () => {
    const dropdownButton = document.querySelector(".dropdown-button");
    const dropdownContent = document.querySelector(".dropdown-content");

    // 버튼 클릭 시 드롭다운 토글
    dropdownButton.addEventListener("click", (event) => {
        event.stopPropagation(); // 이벤트 버블링 방지
        dropdownContent.style.display =
            dropdownContent.style.display === "block" ? "none" : "block";
    });

    // 화면 다른 곳을 클릭하면 드롭다운 닫기
    document.addEventListener("click", () => {
        dropdownContent.style.display = "none";
    });
});
