const menuButton = document.querySelector(".menu-button")
const menu = document.querySelector(".menu")
const closeButton = document.querySelector(".close-menu")

document.addEventListener("DOMContentLoaded", () => {
    menuButton.addEventListener("click", () => {
        menu.classList.add("open")
    })

    closeButton.addEventListener("click", () => {
        menu.classList.remove("open")
    })
})
