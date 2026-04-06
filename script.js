//Scroll state 
const nav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

//Navbar mobile 
document.querySelectorAll('.navbar-nav .nav-link:not(.dropdown-toggle)').forEach(link => {
  link.addEventListener('click', () => {
    const col = document.getElementById('navbarNav');
    if (col.classList.contains('show')) bootstrap.Collapse.getInstance(col)?.hide();
  });
});

//animasi scroll
document.querySelectorAll('.reveal').forEach(el => {
  new IntersectionObserver((entries, obs) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }).observe(el);
});

// Pagination
document.querySelectorAll('.page-btn:not([disabled])').forEach(btn => {
  btn.addEventListener('click', function () {
    if (!this.querySelector('i')) {
      document.querySelectorAll('.page-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
    }
  });
});

// background hero
const heroBg = document.querySelector('.hero-bg');
if (heroBg) {
  window.addEventListener('scroll', () => {
    if (window.scrollY < window.innerHeight)
      heroBg.style.transform = `scale(1.04) translateY(${window.scrollY * 0.2}px)`;
  }, { passive: true });
}