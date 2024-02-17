var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  // fade: true,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
});


var swiper = new Swiper(".myswiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  // fade: true,

  
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
  },
});



const textToType = "Rishikesh";
      
// Get the text container
const textContainer = document.getElementById('name');



// Function to simulate typing
function type() {
  textContainer.textContent += textToType[index];
  index++;

  // Check if there are more characters to type
  if (index <= textToType.length) {
    setTimeout(type, 300); // Adjust typing speed by changing the timeout value
  } else {
    // Animation complete, reset index for infinite loop
    index = 0;
    textContainer.textContent = ''; // Clear the text for the next iteration
    setTimeout(type, 1000); // Add a delay before starting the next iteration
  }
}

// Initialize variables
let index = 0;

// Start the typing animation
type();



// navbar-animation

const nav_btn = document.querySelector(".nav-icon");

const section_navbar = document.querySelector(".section-navbar");

const toggleNavBar = () =>{
  section_navbar.classList.toggle("active")
  
}

nav_btn.addEventListener("click", () => toggleNavBar())