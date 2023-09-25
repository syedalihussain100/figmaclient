
// change backgroung image url here

let currentImageIndex = 0;
const images = [
    "figure.jpeg",
    "image1.jpeg",
    "image2.jpeg",
    "image3.jpeg",
    "image4.jpeg",
    "image5.jpeg",
    "image6.jpeg",
    "image7.jpeg",
    "image8.jpeg"
];

function changeBackground(imageUrl, imageId) {
    // Change the background image
    document.body.style.backgroundImage = `url(${imageUrl})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundRepeat = "no-repeat"

    // Remove the 'active' class from all images
    const images = document.querySelectorAll('.oneImg');
    images.forEach((img) => img.classList.remove('active'));

    // Add the 'active' class to the clicked image
    document.getElementById(imageId).classList.add('active');

    // Store the selected image URL and active image ID in local storage
    localStorage.setItem('backgroundImage', imageUrl);
    localStorage.setItem('activeImageId', imageId);
}

// Function to automatically change the background image
function autoChangeBackground() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    const imageUrl = images[currentImageIndex];
    changeBackground(imageUrl, 'image' + (currentImageIndex + 1));
}

// Check if there is a stored background image on page load
const storedBackgroundImage = localStorage.getItem('backgroundImage');
const storedActiveImageId = localStorage.getItem('activeImageId');

// Set a default background image if local storage is null
const defaultBackgroundImage = "./image1.jpeg"; // Replace with your default image URL
if (storedBackgroundImage) {
    document.body.style.backgroundImage = `url(${storedBackgroundImage})`;

    // Add the 'active' class to the previously selected image
    const activeImage = document.getElementById(storedActiveImageId);
    if (activeImage) {
        activeImage.classList.add('active');
    }
} else {
    document.body.style.backgroundImage = `url(${defaultBackgroundImage})`;
}

// Set an interval to automatically change the background image every 7 seconds
setInterval(autoChangeBackground, 7000);









// function changeBackground(imageUrl, imageId) {
//     // Change the background image
//     document.body.style.backgroundImage = `url(${imageUrl})`;

//     // Remove the 'active' class from all images
//     const images = document.querySelectorAll('.oneImg');
//     images.forEach((img) => img.classList.remove('active'));

//     // Add the 'active' class to the clicked image
//     event.target.classList.add('active');

//     // Store the selected image URL and active image ID in local storage
//     localStorage.setItem('backgroundImage', imageUrl);
//     localStorage.setItem('activeImageId', imageId);
// }

// // Check if there is a stored background image on page load
// const storedBackgroundImage = localStorage.getItem('backgroundImage');
// const storedActiveImageId = localStorage.getItem('activeImageId');

// // Set a default background image if local storage is null
// const defaultBackgroundImage = "./image1.jpeg"; // Replace with your default image URL
// if (storedBackgroundImage) {
//     document.body.style.backgroundImage = `url(${storedBackgroundImage})`;

//     // Add the 'active' class to the previously selected image
//     const activeImage = document.getElementById(storedActiveImageId);
//     if (activeImage) {
//         activeImage.classList.add('active');
//     }
// } else {
//     document.body.style.backgroundImage = `url(${defaultBackgroundImage})`;
// }