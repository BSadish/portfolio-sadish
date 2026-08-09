document.getElementById('year').textContent = new Date().getFullYear();

  // theme toggle (in-memory only, no storage)
  const root = document.documentElement;
  const moonIcon = '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" style="color:var(--soft)"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"/></svg>';


  const sunIcon = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:var(--soft)"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';

 function setTheme(dark){
  root.setAttribute('data-theme', dark ? 'dark' : 'light');
  document.getElementById('themeToggle').innerHTML = dark ? sunIcon : moonIcon;
}

let isDark = true;

setTheme(isDark);

document.getElementById('themeToggle').addEventListener('click', () => {
  isDark = !isDark;
  setTheme(isDark);
});

document.getElementById('themeToggleMobile').addEventListener('click', () => {
  isDark = !isDark;
  setTheme(isDark);
});

  const navToggle = document.getElementById('navToggle');
  const mob = document.getElementById('mob');
  navToggle.addEventListener('click', () => {
    const willOpen = !mob.classList.contains('flex');
    mob.classList.toggle('hidden', !willOpen);
    mob.classList.toggle('flex', willOpen);
    navToggle.setAttribute('aria-expanded', willOpen);
  });
  mob.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    mob.classList.add('hidden'); mob.classList.remove('flex');
    navToggle.setAttribute('aria-expanded','false');
  }));

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealEls = document.querySelectorAll('.reveal');
  if (reduceMotion) { revealEls.forEach(el => el.classList.add('in')); }
  else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('in'); io.unobserve(entry.target); } });
    }, { threshold: 0.12 });
    revealEls.forEach(el => io.observe(el));
  }

  const user = document.getElementById('emailUser').textContent;
  const host = document.getElementById('emailHost').textContent;
  document.getElementById('mailBtn').addEventListener('click', function(e){
    e.preventDefault();
    window.location.href = 'mailto:' + user + '@' + host;
  });