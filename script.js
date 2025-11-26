document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('theme-toggle');
  const body = document.body;
  // theme toggle: animate contrast first, then switch theme after animation ends
  if (toggleButton) {
    toggleButton.addEventListener('click', (e) => {
      // prevent double-handling if animation already running
      if (toggleButton.classList.contains('press-contrast')) return;
      toggleButton.classList.add('press-contrast');
      const onAnim = () => {
        body.classList.toggle('dark');
        toggleButton.classList.remove('press-contrast');
        toggleButton.removeEventListener('animationend', onAnim);
      };
      toggleButton.addEventListener('animationend', onAnim);
    });
  }

  // Add press-contrast animation to other buttons (non-theme) on click
  document.querySelectorAll('button').forEach(btn => {
    if (btn.id === 'theme-toggle') return; // already handled
    btn.addEventListener('click', () => {
      if (btn.classList.contains('press-contrast')) return;
      btn.classList.add('press-contrast');
      btn.addEventListener('animationend', function handler() {
        btn.classList.remove('press-contrast');
        btn.removeEventListener('animationend', handler);
      });
    });
  });

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


