document.addEventListener("DOMContentLoaded", function() {
    const ctaBtn = document.querySelector('.cta-btn');
    const orderBtns = document.querySelectorAll('.order-btn');
  
    // Smooth scroll to the menu section
    ctaBtn.addEventListener('click', () => {
      document.getElementById('menu').scrollIntoView({
        behavior: 'smooth'
      });
    });
  
    orderBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        alert('Thank you for ordering! We will deliver your food soon.');
      });
    });
  });


// new feature added by mohit

const words = ["Fast", "Tasty", "Affordable", "Fresh", "On-Time"];
let i = 0, j = 0, currentWord = '', isDeleting = false;

function typeEffect() {
  const typeText = document.getElementById("type");

  if (!typeText) return;

  if (i < words.length) {
    if (!isDeleting && j <= words[i].length) {
      currentWord = words[i].substring(0, j++);
    } else if (isDeleting && j >= 0) {
      currentWord = words[i].substring(0, j--);
    }

    typeText.innerHTML = currentWord;

    if (j === words[i].length) {
      isDeleting = true;
      setTimeout(typeEffect, 1000);
    } else if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % words.length;
      setTimeout(typeEffect, 300);
    } else {
      setTimeout(typeEffect, isDeleting ? 50 : 150);
    }
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);
