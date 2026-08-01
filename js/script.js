/* ── Year ── */
document.getElementById('year').textContent = new Date().getFullYear();

/* ── Nav: mobile toggle + scrolled class ── */
const toggle = document.getElementById('navToggle');
const links  = document.getElementById('navLinks');
const nav    = document.getElementById('siteNav');

toggle.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  toggle.classList.toggle('open', open);
  toggle.setAttribute('aria-expanded', open);
});
links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  links.classList.remove('open');
  toggle.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}));
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

/* ── Scroll reveal ── */
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

/* ── Animated counters ── */
function animateCounter(el) {
  const target = +el.dataset.target;
  const duration = 1600;
  const start = performance.now();
  const update = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(ease * target);
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = target;
  };
  requestAnimationFrame(update);
}
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { animateCounter(e.target); counterObserver.unobserve(e.target); }
  });
}, { threshold: 0.5 });
document.querySelectorAll('.counter').forEach(el => counterObserver.observe(el));

/* ── Toast ── */
const toastEl = document.getElementById('toast');
let toastTimer;
function showToast(msg) {
  toastEl.textContent = msg;
  toastEl.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove('show'), 4000);
}

/* ── Back to top ── */
const btt = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  btt.classList.toggle('visible', window.scrollY > 400);
}, { passive: true });
btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ── Contact form ── */
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value || 'there';
  showToast('Thanks, ' + name.split(' ')[0] + ' — we\'ll be in touch shortly!');
  this.reset();
});

/* ── Quote / project brief form ── */
const COMPANY_EMAIL = 'fourhorsementech@gmail.com';
document.getElementById('quoteForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name    = document.getElementById('q-name').value;
  const email   = document.getElementById('q-email').value;
  const company = document.getElementById('q-company').value || 'N/A';
  const type    = document.getElementById('q-type').value;
  const summary = document.getElementById('q-summary').value;

  const subject = `Project enquiry: ${type} — ${name}`;
  const body =
    `Name: ${name}\n` +
    `Email: ${email}\n` +
    `Company/organisation: ${company}\n` +
    `Project type: ${type}\n\n` +
    `Project summary & scope:\n${summary}`;

  window.location.href = `mailto:${COMPANY_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  showToast('Opening your email app — if nothing opens, email us directly.');
  this.reset();
});

/* ── Particle canvas ── */
(function () {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles;

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  function createParticles() {
    const count = Math.floor((W * H) / 14000);
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.4 + 0.4,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.5 + 0.2,
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(123,180,255,${p.alpha})`;
      ctx.fill();
    });

    // draw connecting lines between nearby particles
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 90) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(63,142,252,${0.18 * (1 - dist / 90)})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }

  resize();
  createParticles();
  draw();
  window.addEventListener('resize', () => { resize(); createParticles(); }, { passive: true });
})();
