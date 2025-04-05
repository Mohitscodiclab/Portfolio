// Function to append digits or operators to the display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }
  
  // Function to clear the display
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  // Function to calculate the result
  function calculateResult() {
    const display = document.getElementById('display');
    try {
      display.value = eval(display.value);
    } catch (e) {
      display.value = 'Error';
    }
  }
  


  document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("checkbox");
    const body = document.body;

    // Load saved theme preference
    if (localStorage.getItem("theme") === "light") {
        body.classList.add("light-mode");
        themeToggle.checked = true;
    } else {
        body.classList.add("dark-mode");
    }

    // Toggle theme without affecting button styles
    themeToggle.addEventListener("change", function () {
        if (themeToggle.checked) {
            body.classList.remove("dark-mode");
            body.classList.add("light-mode");
            localStorage.setItem("theme", "light");
        } else {
            body.classList.remove("light-mode");
            body.classList.add("dark-mode");
            localStorage.setItem("theme", "dark");
        }
    });
});
