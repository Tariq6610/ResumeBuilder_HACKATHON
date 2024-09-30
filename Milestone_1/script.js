var toggleBtn = document.getElementById("toggleBtn");
var container = document.querySelector(".container");
var flag = true;
function toggle() {
    container === null || container === void 0 ? void 0 : container.classList.toggle("dark");
    toggleBtn === null || toggleBtn === void 0 ? void 0 : toggleBtn.classList.toggle("dark");
    if (flag && toggleBtn && container) {
        toggleBtn.innerHTML = "<i class='fa-solid fa-toggle-on'></i>";
        flag = false;
    }
    else if (toggleBtn && flag == false) {
        toggleBtn.innerHTML = "<i class='fa-solid fa-toggle-off'></i>";
        flag = true;
    }
}
