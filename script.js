document.documentElement.classList.add('js');

// Shfaqje e lehtë gjatë scroll-it
const items = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach((el) => io.observe(el));
} else {
  items.forEach((el) => el.classList.add('in'));
}

// Shfaq / fshih listën "Çfarë duhet kontrolluar?"
document.querySelectorAll('.toggle').forEach((btn) => {
  btn.addEventListener('click', () => {
    const list = btn.nextElementSibling;
    const open = list.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
  });
});
