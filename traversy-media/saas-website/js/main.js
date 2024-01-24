// FAQ Accordion
document.addEventListener("DOMContentLoaded", () => {
    const faqContent = document.querySelector(".faq-content")

    faqContent.addEventListener("click", (event) => {
        // TODO: make the group active and every thing inside of a active group should have its properties on CSS
        // const group = event.target.closest(".faq-group")
        // console.log(group)

        const groupHeader = event.target.closest(".faq-group-header")
        if (!groupHeader) return
        const group = groupHeader.parentElement
        const groupBody = group.querySelector(".faq-group-body")
        const icon = group.querySelector("i")

        // Toggle icon
        icon.classList.toggle("fa-plus")
        icon.classList.toggle("fa-minus")

        // Toggle visibility of body
        groupBody.classList.toggle("open")

        // Close other FAQ bodies
        const allGroups = Array.from(faqContent.querySelectorAll(".faq-group"))
        const otherGroups = allGroups.filter((x) => x !== group)

        otherGroups.forEach((x) => {
            const body = x.querySelector(".faq-group-body")
            const icon = x.querySelector(".faq-group-header i")
            body.classList.remove("open")
            icon.classList.remove("fa-minus")
            icon.classList.add("fa-plus")
        })
    })
})

// Mobile menu
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector(".hamburger-button")
    const menu = document.querySelector(".mobile-menu")

    btn.addEventListener("click", () => {
        menu.classList.toggle("active")
    })
})
