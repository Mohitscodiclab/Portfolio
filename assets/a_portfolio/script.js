var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Youtuber", "Web Developer", "Photographer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

const cursor = document.querySelector(".custom-cursor");
const cursorDot = document.querySelector(".cursor-dot");

let cursorX = 0, cursorY = 0; // For the dot (moves instantly)
let outerX = 0, outerY = 0; // For the outer circle (smooth effect)
let speed = 0.1; // Adjust for smoothness (lower = smoother)

// Function to move the cursor instantly
document.addEventListener("mousemove", (e) => {
  cursor.style.opacity = "1";
  cursorDot.style.opacity = "1";

  cursorX = e.clientX;
  cursorY = e.clientY;

  cursorDot.style.left = `${cursorX}px`;
  cursorDot.style.top = `${cursorY}px`;
});

// Function to smoothly move the outer circle
function smoothFollow() {
  outerX += (cursorX - outerX) * speed;
  outerY += (cursorY - outerY) * speed;

  cursor.style.left = `${outerX}px`;
  cursor.style.top = `${outerY}px`;

  requestAnimationFrame(smoothFollow);
}
smoothFollow();

// Hide cursor when leaving the page
document.addEventListener("mouseleave", () => {
  cursor.style.opacity = "0";
  cursorDot.style.opacity = "0";
});






// Function to wrap each word and letter in spans
document.querySelectorAll(".fade-text").forEach((text) => {
    let newText = text.textContent
      .split(" ") // Splitting words
      .map((word) => {
        let letters = word.split("").map(letter => `<span>${letter}</span>`).join(""); // Wrapping letters
        return `<span>${letters}</span>`; // Wrapping words
      })
      .join(" "); // Rejoining words with spaces
  
    text.innerHTML = newText;
  });
  
  // Scroll animation function
  function fadeInOnScroll() {
    document.querySelectorAll(".fade-text").forEach((text) => {
      let textPosition = text.getBoundingClientRect().top;
      let screenPosition = window.innerHeight * 0.8; // Trigger when 80% of element is visible
  
      if (textPosition < screenPosition) {
        text.classList.add("show");
      }
    });
  }
  
  // Run the function on scroll
  window.addEventListener("scroll", fadeInOnScroll);
  
  // Run once on page load in case elements are already in view
  fadeInOnScroll();
  


document.querySelectorAll(".hover-text").forEach((text) => {
    let newText = text.textContent
      .split(" ") // Split text into words
      .map((word) => {
        let letters = word.split("").map(letter => `<span>${letter}</span>`).join(""); // Wrap each letter
        return `<span>${letters}</span>`; // Wrap whole word
      })
      .join(" "); // Rejoin words with spaces
  
    text.innerHTML = newText;
  });
    

  