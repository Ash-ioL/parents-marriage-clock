function changePage() {
    let topButton = document.getElementById("top-arrow-container");
    let bottomButton = document.getElementById("bottom-arrow-container");
    let clockWindow = document.getElementById("clock-container");

    topButton.addEventListener("click", (event) => {
        clockWindow.classList.add("active");
    });
    bottomButton.addEventListener("click", (event) => {
        clockWindow.classList.remove("active");
    });
}
changePage();