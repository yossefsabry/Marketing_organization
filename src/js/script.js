// making dark light mode

const darkModeCheckbox = document.getElementById("darkModeCheckbox");
const body = document.body;

darkModeCheckbox.addEventListener("change", function() {
  if (darkModeCheckbox.checked) {
    body.classList.add("dark-mode");
  } else {
    body.classList.remove("dark-mode");
  }
});

// end dark mode 
// ---------------------------------------------------------------


// making mega menu 

const menuBtn = document.getElementById('menuBtn');
const megaMenu = document.getElementById('megaMenu');

menuBtn.addEventListener('click', () => {
  if (megaMenu.classList.contains('hidden')) {
    megaMenu.classList.remove('hidden');
  } else {
    megaMenu.classList.add('hidden');
  }
});

// end mega menu
// ------------------------------------------------------------------

// start top button for start

// Get button and add event listener
const toTopBtn = document.getElementById('toTopBtn');

toTopBtn.addEventListener('click', () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
});

// Show button if scrolled more than 180px  
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 180) {
    toTopBtn.style.display = 'block';
  } else {
    toTopBtn.style.display = 'none';
  }
})


// end top button for start 
// -------------------------------------------------------------