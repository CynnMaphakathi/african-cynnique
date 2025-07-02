// script.js

// Toggle Sidebar Menu and toggle menu button visibility
function toggleMenu() {
  const sidebar = document.querySelector('.sidebar');
  const toggleBtn = document.querySelector('.menu-toggle');
  sidebar.classList.toggle('hidden');
  toggleBtn.classList.toggle('hidden'); // Hide/show toggle button on menu toggle
}

// Add event listener to menu toggle button
document.querySelector('.menu-toggle')?.addEventListener('click', toggleMenu);

// Close sidebar when clicking outside
document.addEventListener('click', function(event) {
  const sidebar = document.querySelector('.sidebar');
  const toggleBtn = document.querySelector('.menu-toggle');

  if (!toggleBtn.contains(event.target) && !sidebar.contains(event.target)) {
    if (!sidebar.classList.contains('hidden')) {
      sidebar.classList.add('hidden');
      toggleBtn.classList.remove('hidden'); // Show menu toggle button again
    }
  }
});

// Show/Hide Back to Top Button
window.addEventListener('scroll', function () {
  const backBtn = document.querySelector('.back-to-main');
  if (backBtn) {
    if (window.scrollY > 300) {
      backBtn.style.opacity = '1';
      backBtn.style.transform ='translateY(0)';
    } else {
      backBtn.style.opacity = '0';
      backBtn.style.transform = 'translateY(20px)';
    }
  }
});

// Optional: Add fade-in effect on scroll
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.card, .full-screen, .recipe-header');
  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 50) {
      element.classList.add('fade-in');
    }
  });
};

window.addEventListener('load', animateOnScroll);
window.addEventListener('scroll', animateOnScroll);

// Optional: Handle form submission
document.querySelector('form')?.addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you for your recipe suggestion!');
});
