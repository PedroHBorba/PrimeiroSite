$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true, // Allows the carousel to loop
        margin: 10, // Margin between items
        nav: true, // Show navigation arrows
        autoplay: true, // Enable automatic slide
        autoplayTimeout: 3000, // Autoplay interval in milliseconds
        responsive: {
            0: {
                items: 1 // Number of items to show on small screens
            },
            600: {
                items: 2 // Number of items to show on medium screens
            },
            1000: {
                items: 3 // Number of items to show on large screens
            }
        }
    });
});
