const swiper = new Swiper(".mySwiper", {

    loop: true,

    speed: 1000,

    spaceBetween: 0,

    centeredSlides: true,

    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },

    effect: "slide",

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    keyboard: {
        enabled: true,
    },

    mousewheel: false,

});


// Select all buttons
const buttons = document.querySelectorAll(".tea-menu button");

// Add click event to each button
buttons.forEach(button => {

    button.addEventListener("click", () => {

        // Remove active class from all buttons
        buttons.forEach(btn => {
            btn.classList.remove("active");
        });

        // Add active class to clicked button
        button.classList.add("active");

    });

});