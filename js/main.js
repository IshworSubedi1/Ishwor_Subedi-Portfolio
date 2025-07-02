/* File: js/main.js */
// Animate skill bars on scroll
window.addEventListener('DOMContentLoaded', () => {
  const bars = document.querySelectorAll('.progress-bar');
  bars.forEach(bar => {
    const span = bar.querySelector('span');
    const value = bar.getAttribute('data-progress');
    span.style.width = value + '%';
  });

  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
  });
});
