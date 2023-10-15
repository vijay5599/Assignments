const sliderImage = document.getElementById("slider-image");
const imageArray = ["assets/shoes.png", "assets/shoe1.png", "assets/shoe2.png"]; // Add the paths to your images
let currentIndex = 0;

sliderImage.addEventListener("click", function () {
  currentIndex = (currentIndex + 1) % imageArray.length;
  sliderImage.src = imageArray[currentIndex];
});
