document.addEventListener("DOMContentLoaded", function() {
    let currentImageIndex = 0;
    const images = document.querySelectorAll("#carousel .carousel-image");
    const totalImages = images.length;

    setInterval(function() {
        images[currentImageIndex].classList.remove("active");
        currentImageIndex = (currentImageIndex + 1) % totalImages;
        images[currentImageIndex].classList.add("active");
    }, 3000); // Change image every 3 seconds
});
