//dette må endres fordi 
let open = document.getElementById("openmenu")
let close = document.getElementById("closemenu")

let sidebar = document.getElementById("sidebar")

open.addEventListener("click", openFunk)

function openFunk() {
    sidebar.style.display = "flex";
    sidebar.style.flexDirection = "column";
}

close.addEventListener("click", closeFunk)

function closeFunk() {
    sidebar.style.display = "none";
}
