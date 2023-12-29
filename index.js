  // JavaScript to handle the image dissolve animation
  document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.carousel-item'); // Updated selector
    let currentImageIndex = 0;

    function showNextImage() {
      images[currentImageIndex].classList.remove('active');
      currentImageIndex = (currentImageIndex + 1) % images.length;
      images[currentImageIndex].classList.add('active');
    }

    // Set interval for image change (every 5 seconds in this example)
    setInterval(showNextImage, 5000);
  });