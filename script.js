document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('theme-toggle');
  const body = document.body;
  if (toggleButton) toggleButton.addEventListener('click', () => body.classList.toggle('dark'));

  const heroSection = document.querySelector('.hero-section');
  if (!heroSection) return;

  heroSection.classList.add('slide-bottom-normal');

  const achievementsSection = document.querySelector('.achievements');
  if (achievementsSection) {
    achievementsSection.classList.add('slide-bottom-normal');
  }

    const projectsSection = document.querySelector('.projects');
  if (projectsSection) {
    projectsSection.classList.add('slide-bottom-normal');
  }
});


