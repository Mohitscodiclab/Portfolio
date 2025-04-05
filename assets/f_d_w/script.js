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
  