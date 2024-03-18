let modeBtn = document.querySelector("#mode");
let body = document.querySelector(".calculator");
let currMode = "light";

modeBtn.addEventListener("click", () => {
    if(currMode === "light"){
        currMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    } else {
        currMode = "light";
        body.classList.remove("dark");
        body.classList.add("light");
    }
});