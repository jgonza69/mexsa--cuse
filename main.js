
// Mobile menu toggle + current year
const btn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');

if (btn && nav) {
  btn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(isOpen));
  });

  // Optional: close menu after clicking a link (nice on mobile)
  document.querySelectorAll('#nav a').forEach(a =>
    a.addEventListener('click', () => {
      if (nav.classList.contains('open')) {
        nav.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      }
    })
  );
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
