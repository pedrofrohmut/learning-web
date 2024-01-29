const menuButton = document.querySelector("button.menu-button")
const menu = document.querySelector("ul.menu")
const closeButton = document.querySelector("button.close-menu")

document.addEventListener("DOMContentLoaded", () => {
    menuButton.addEventListener("click", () => {
        menu.classList.add("open")
    })

    closeButton.addEventListener("click", () => {
        menu.classList.remove("open")
    })
})
