import { goals } from '../data/site.js';
import { renderIcons } from './icons.js';

// Goal detail block (tabs + goal cards). First goal is rendered on the server.
const GOALS = Object.fromEntries(goals.map((g) => [g.key, g]));
const detail = document.getElementById('doel-detail');
const tabs = detail.querySelectorAll('.tab');
const cards = document.querySelectorAll('.gcard');
const formGoal = (value) => {
  const radio = document.querySelector(`.chips input[value="${value}"]`);
  if (radio) radio.checked = true;
};

function renderGoal(key) {
  const g = GOALS[key];
  tabs.forEach((t) => {
    const on = t.dataset.goal === key;
    t.classList.toggle('is-active', on);
    t.setAttribute('aria-selected', on);
  });
  cards.forEach((c) => c.classList.toggle('is-active', c.dataset.goal === key));
  detail.classList.add('is-switching');
  setTimeout(() => {
    detail.querySelector('.detail__title').innerHTML = g.title;
    detail.querySelector('.detail__body').textContent = g.body;
    detail.querySelector('.detail__list').innerHTML = g.list
      .map((item) => `<li><span class="ck"><i data-lucide="check"></i></span>${item}</li>`)
      .join('');
    const img = detail.querySelector('.detail__img');
    img.src = g.img;
    img.alt = g.alt;
    const cta = detail.querySelector('.detail__cta');
    cta.firstChild.textContent = g.cta + ' ';
    cta.dataset.goal = key;
    renderIcons();
    detail.classList.remove('is-switching');
  }, 200);
}

tabs.forEach((t) => t.addEventListener('click', () => renderGoal(t.dataset.goal)));
cards.forEach((c) =>
  c.addEventListener('click', () => {
    renderGoal(c.dataset.goal);
    if (window.__lenis) window.__lenis.scrollTo(detail, { offset: -80, duration: 1.4 });
    else detail.scrollIntoView({ behavior: 'smooth', block: 'center' });
  })
);
detail.querySelector('.detail__cta').addEventListener('click', (e) => formGoal(GOALS[e.currentTarget.dataset.goal].label));

// Carousel: drag to scroll on desktop
const track = document.querySelector('.carousel__track');
let down = false, startX = 0, startScroll = 0, moved = false;
track.addEventListener('pointerdown', (e) => {
  if (e.pointerType !== 'mouse') return;
  down = true; moved = false; startX = e.clientX; startScroll = track.scrollLeft;
});
window.addEventListener('pointermove', (e) => {
  if (!down) return;
  const dx = e.clientX - startX;
  if (Math.abs(dx) > 5) { moved = true; track.classList.add('is-dragging'); }
  track.scrollLeft = startScroll - dx;
});
window.addEventListener('pointerup', () => { down = false; track.classList.remove('is-dragging'); });
track.addEventListener('click', (e) => { if (moved) { e.preventDefault(); moved = false; } }, true);
track.addEventListener('dragstart', (e) => e.preventDefault());

// Mobile nav
const nav = document.querySelector('.nav');
const burger = document.querySelector('.nav__burger');
burger.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  burger.setAttribute('aria-expanded', open);
});
nav.querySelectorAll('.nav__links a').forEach((a) => a.addEventListener('click', () => nav.classList.remove('is-open')));

// Intake form (front-end only; connect to a form service at launch)
const form = document.getElementById('intake-form');
const msg = form.querySelector('.form__msg');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  let ok = true;
  form.querySelectorAll('[required]').forEach((f) => {
    const valid = f.value.trim() && (f.type !== 'email' || /\S+@\S+\.\S+/.test(f.value));
    f.classList.toggle('is-invalid', !valid);
    if (!valid) ok = false;
  });
  if (!ok) {
    msg.textContent = 'Vul je naam en een geldig e-mailadres in.';
    return;
  }
  const naam = form.naam.value.trim().split(' ')[0];
  msg.textContent = `Bedankt ${naam}! Ik neem binnen 48 uur contact met je op.`;
  form.reset();
});
