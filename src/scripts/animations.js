import Lenis from 'lenis';

// Motion: smooth scroll (Lenis) + one soft fade-in per element when it scrolls into view.
// Skipped entirely when the visitor prefers reduced motion (no .js-anim class).
(() => {
  const root = document.documentElement;
  if (!root.classList.contains('js-anim')) return;

  // Smooth scroll
  let lenis = null;
  {
    lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    const raf = (t) => { lenis.raf(t); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      a.addEventListener('click', (e) => {
        const target = a.getAttribute('href').length > 1 && document.querySelector(a.getAttribute('href'));
        if (!target) return;
        e.preventDefault();
        lenis.scrollTo(target, { offset: -24 });
      });
    });
    window.__lenis = lenis;
  }

  // Elements that fade in
  const single = [
    '.statement > *', '.section-head', '.detail', '.about__photos', '.about__text',
    '.steps > .h', '.intake', '.faq__head', '.footer',
  ];
  document.querySelectorAll(single.join(',')).forEach((el) => el.classList.add('reveal'));

  // Card rows: gentle 80ms stagger
  [['.carousel__track', '.vcard'], ['.goal-cards', '.gcard'], ['.step-cards', '.step'], ['.faq__list', 'details']]
    .forEach(([p, c]) => document.querySelectorAll(`${p} ${c}`).forEach((el, i) => {
      el.classList.add('reveal');
      el.style.setProperty('--d', `${Math.min(i, 5) * 80}ms`);
    }));

  // Reveal when 12% into the viewport
  let pending = [...document.querySelectorAll('.reveal')];
  function check() {
    if (!pending.length) return;
    const line = innerHeight * 0.88;
    pending = pending.filter((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < line) { el.classList.add('is-in'); return false; }
      return true;
    });
  }
  if (lenis) lenis.on('scroll', check); else addEventListener('scroll', check, { passive: true });
  addEventListener('resize', check);

  // Start
  requestAnimationFrame(() => { root.classList.add('is-loaded'); check(); });
  setTimeout(() => { root.classList.add('is-loaded'); check(); }, 300);
})();
