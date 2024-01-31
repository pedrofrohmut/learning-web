document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector(".menu-button")
    const menu = document.querySelector(".menu")
    const closeButton = document.querySelector(".close-menu")

    // Open menu for mobile
    menuButton.addEventListener("click", () => {
        menu.classList.add("open")
    })

    // Close menu for mobile
    closeButton.addEventListener("click", () => {
        menu.classList.remove("open")
    })

    const faqMenu = document.querySelector(".faq-menu")

    // Change active class between menu options
    faqMenu.addEventListener("click", (event) => {
        const option = event.target.closest("li")

        if (!option || option.classList.contains("active")) return

        const options = Array.from(faqMenu.querySelectorAll("li"))
        options.forEach(x => x.classList.remove("active"))
        option.classList.add("active")
    })


    const faqGrid = document.querySelector(".faq-grid")

    // Open and close faq-cards as corousel
    faqGrid.addEventListener("click", (event) => {
        const card = event.target.closest(".faq-card")

        if (!card || card.classList.contains("open")) return

        const cards = Array.from(faqGrid.querySelectorAll(".faq-card"))
        cards.forEach((x) => x.classList.remove("open"))
        card.classList.add("open")
    })
})
