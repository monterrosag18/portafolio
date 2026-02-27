/**
 * Carlos Monterrosa - Premium Portfolio Interactions
 * Engineered for maximum performance and visual impact.
 */

document.addEventListener('DOMContentLoaded', () => {
  initPremiumNav();
  initRevealAnimations();
  initTiltEffect();
  initDynamicOrbs();
});

/**
 * Transforms the NavBar on scroll for a glassmorphic docked effect
 */
function initPremiumNav() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });
}

/**
 * Staggered entrance animations using Intersection Observer
 */
function initRevealAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Select all sections and cards to fade in
  const revealElements = document.querySelectorAll('.section-header, .glass-card, .project-category-title');

  revealElements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(40px)';
    el.style.transition = `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${index % 4 * 0.15}s`;
    observer.observe(el);
  });
}

/**
 * Advanced 3D Tilt Effect for Premium Cards
 * Transforms mouse position into 3D rotations for a physical, metallic feel.
 */
function initTiltEffect() {
  const cards = document.querySelectorAll('.tilt-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', handleTilt);
    card.addEventListener('mouseleave', resetTilt);
  });

  function handleTilt(e) {
    const card = e.currentTarget;
    const cardRect = card.getBoundingClientRect();

    // Calculate mouse position relative to the card center
    const x = e.clientX - cardRect.left;
    const y = e.clientY - cardRect.top;

    const centerX = cardRect.width / 2;
    const centerY = cardRect.height / 2;

    // Rotate values (max 10 degrees)
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    // Calculate dynamic glare/lighting based on mouse payload
    const calculateGlare = (x / cardRect.width) * 100;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    card.style.transition = 'transform 0.1s ease-out';

    // Add dynamic highlight to the border
    card.style.borderTopColor = `rgba(255, 255, 255, ${calculateGlare / 300 + 0.1})`;
    card.style.borderLeftColor = `rgba(255, 255, 255, ${(100 - calculateGlare) / 300 + 0.1})`;
  }

  function resetTilt(e) {
    const card = e.currentTarget;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    card.style.transition = 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
    card.style.borderTopColor = 'rgba(255, 255, 255, 0.15)';
    card.style.borderLeftColor = 'rgba(255, 255, 255, 0.1)';
  }
}

/**
 * Mild parallax on the background glowing orbs to give depth
 */
function initDynamicOrbs() {
  const orbs = document.querySelectorAll('.ambient-orb');
  if (!orbs.length) return;

  window.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth - 0.5;
    const mouseY = e.clientY / window.innerHeight - 0.5;

    orbs.forEach((orb, index) => {
      const depth = (index + 1) * 20; // different depth for each orb
      const moveX = mouseX * depth;
      const moveY = mouseY * depth;
      orb.style.transform = `translate(${moveX}px, ${moveY}px)`;
      orb.style.transition = 'transform 2s cubic-bezier(0.16, 1, 0.3, 1)';
    });
  });
}

// Ensure proper spacing when clicking anchor links due to sticky nav
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const top = targetElement.getBoundingClientRect().top + window.pageYOffset - 100; // 100px offset for nav
      window.scrollTo({
        top: top,
        behavior: 'smooth'
      });
    }
  });
});
