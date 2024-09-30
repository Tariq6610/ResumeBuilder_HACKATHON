const toggleBtn = document.getElementById("toggleBtn");
const container = document.querySelector(".container")

let flag = true;

function toggle(){
    container?.classList.toggle("dark")
    toggleBtn?.classList.toggle("dark")
    if(flag && toggleBtn && container){
        toggleBtn.innerHTML = "<i class='fa-solid fa-toggle-on'></i>"
        
        flag = false;
    }else if(toggleBtn && flag == false){
        toggleBtn.innerHTML = "<i class='fa-solid fa-toggle-off'></i>"
        flag = true;
    }
}