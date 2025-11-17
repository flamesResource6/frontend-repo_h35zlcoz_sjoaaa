// Centralized motion utilities using Web Animations API and IntersectionObserver
// Honors prefers-reduced-motion
export const Motion = (() => {
  const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const defaultKeyframes = {
    fade: [{ opacity: 0 }, { opacity: 1 }],
    rise: [{ opacity: 0, transform: 'translateY(16px)' }, { opacity: 1, transform: 'translateY(0)' }],
    slideL: [{ opacity: 0, transform: 'translateX(-16px)' }, { opacity: 1, transform: 'translateX(0)' }],
    slideR: [{ opacity: 0, transform: 'translateX(16px)' }, { opacity: 1, transform: 'translateX(0)' }],
    scaleIn: [{ opacity: 0, transform: 'scale(0.96)' }, { opacity: 1, transform: 'scale(1)' }],
  };

  const defaultTiming = { duration: 260, easing: 'cubic-bezier(0.16, 1, 0.3, 1)', fill: 'forwards' };

  const animateEl = (el) => {
    if (prefersReduced) {
      el.style.opacity = 1;
      el.style.transform = 'none';
      return;
    }
    const type = el.dataset.motion || 'rise';
    const delay = parseInt(el.dataset.motionDelay || '0', 10);
    const duration = parseInt(el.dataset.motionDuration || String(defaultTiming.duration), 10);
    const easing = el.dataset.motionEase || defaultTiming.easing;
    const keyframes = defaultKeyframes[type] || defaultKeyframes.rise;
    el.animate(keyframes, { ...defaultTiming, duration, easing, delay });
  };

  const observe = () => {
    if (prefersReduced) return; // no observer if reduced motion
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateEl(entry.target);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );

    document.querySelectorAll('[data-motion]')?.forEach((el) => {
      el.style.opacity = 0;
      observer.observe(el);
    });
  };

  const parallax = () => {
    // subtle parallax grid background
    if (prefersReduced) return;
    const grid = document.querySelector('[data-parallax-grid]');
    if (!grid) return;
    const onScroll = () => {
      const y = window.scrollY * 0.05;
      grid.style.backgroundPosition = `calc(50% + ${y}px) calc(50% + ${y}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
  };

  const tilt = () => {
    if (prefersReduced) return;
    document.querySelectorAll('[data-tilt]')?.forEach((card) => {
      const strength = parseFloat(card.dataset.tilt || '8');
      let currentX = 0, currentY = 0;
      card.addEventListener('pointermove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
        currentX = x * strength;
        currentY = y * strength * -1;
        card.style.transform = `perspective(800px) rotateX(${currentY}deg) rotateY(${currentX}deg)`;
      });
      card.addEventListener('pointerleave', () => {
        card.animate([{ transform: card.style.transform }, { transform: 'perspective(800px) rotateX(0deg) rotateY(0deg)' }], { duration: 300, easing: 'ease-out', fill: 'forwards' });
      });
    });
  };

  const init = () => {
    if (typeof window === 'undefined') return;
    requestAnimationFrame(() => {
      observe();
      parallax();
      tilt();
    });
  };

  return { init };
})();
