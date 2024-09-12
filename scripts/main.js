document.addEventListener("DOMContentLoaded", () => {
    const ctaButton = document.querySelector('.cta-button');
    
    if (ctaButton) {
      ctaButton.addEventListener('click', () => {
        alert('Navigating to the live project!');
      });
    }
  });
  