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


// TODO: make js for clearing active on faq menu and then add to clicked one

// TODO: make js for carosel on faq: open 1 close others. Clean open class on
// faq-card from others and add to clicked one
