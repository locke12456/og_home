(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];

  // header state + page top
  const hd = $('.hd'), top = $('.pagetop');
  const onScroll = () => { const y = scrollY > 40; hd.classList.toggle('scrolled', y); top.classList.toggle('show', scrollY > 600); };
  addEventListener('scroll', onScroll, { passive: true }); onScroll();

  // mobile menu
  const menu = $('.hd-menu');
  menu.addEventListener('click', () => { const o = document.body.classList.toggle('nav-open'); menu.setAttribute('aria-expanded', o); });
  $$('.hd-nav a').forEach(a => a.addEventListener('click', () => { document.body.classList.remove('nav-open'); menu.setAttribute('aria-expanded', false); }));

  // active nav
  const links = $$('.hd-nav a');
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) links.forEach(l => l.classList.toggle('on', l.pathname === location.pathname && l.hash === '#' + e.target.id));
  }), { rootMargin: '-45% 0px -50% 0px' });
  $$('main section[id]').forEach(s => io.observe(s));

  // reveal
  const rv = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); rv.unobserve(e.target); } }), { threshold: .15 });
  $$('.sec .sec-head, .story-body, .news-wrap, .chara, .sys-tabs, .routes, .movie-thumb').forEach(el => { el.classList.add('reveal'); rv.observe(el); });

  // banner slider (home only; hidden with no posts, static with one)
  const track = $('.banner-track');
  if (track) {
    const n = track.children.length, dots = $('.bn-dots');
    let idx = 0, timer;
    const go = i => { idx = (i + n) % n; track.style.transform = `translateX(-${idx * 100}%)`; $$('button', dots).forEach((d, j) => d.classList.toggle('on', j === idx)); clearInterval(timer); timer = setInterval(() => go(idx + 1), 5000); };
    if (n === 0) $('.banner-slider').hidden = true;
    else if (n === 1) $$('.bn-prev, .bn-next, .bn-dots').forEach(el => el.hidden = true);
    else {
      for (let i = 0; i < n; i++) { const b = document.createElement('button'); b.setAttribute('aria-label', (dots.dataset.label || '{n}').replace('{n}', i + 1)); b.onclick = () => go(i); dots.appendChild(b); }
      $('.bn-prev').onclick = () => go(idx - 1); $('.bn-next').onclick = () => go(idx + 1); go(0);
    }
  }

  // devlog category filter
  const filter = $('.dl-filter');
  if (filter) filter.addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    const c = b.dataset.cat, items = $$('.dl-list li');
    $$('button', filter).forEach(x => { x.classList.toggle('on', x === b); x.setAttribute('aria-pressed', x === b); });
    items.forEach(li => li.hidden = !!c && li.dataset.cat !== c);
    $$('.dl-year').forEach(y => y.hidden = !$$('li:not([hidden])', y).length);
    $('.dl-none').hidden = !items.length || items.some(li => !li.hidden);
  });

  // characters (copy comes from the page per language, see _data/home.yml)
  const charaData = $('#chara-data');
  const CHARAS = charaData ? JSON.parse(charaData.textContent) : [];
  const thumbs = $('.chara-thumbs'), art = $('.chara-art');
  const show = i => {
    const d = CHARAS[i];
    $('.chara-role').textContent = d.role; $('.chara-name').textContent = d.name; $('.chara-en').textContent = d.en;
    $('.chara-desc').textContent = d.desc; $('.chara-quote').textContent = d.quote;
    art.style.setProperty('--c', d.c); art.classList.remove('swap'); void art.offsetWidth; art.classList.add('swap');
    $$('button', thumbs).forEach((b, j) => { b.classList.toggle('on', j === i); b.setAttribute('aria-selected', j === i); });
  };
  if (thumbs && CHARAS.length) {
    CHARAS.forEach((d, i) => {
      const b = document.createElement('button');
      b.setAttribute('role', 'tab'); b.setAttribute('aria-label', d.name); b.style.setProperty('--c', d.c);
      b.innerHTML = '<svg viewBox="0 0 300 500"><use href="#i-person"/></svg>';
      b.onclick = () => show(i); thumbs.appendChild(b);
    });
    show(0);
  }

  // system tabs
  $$('.sys-tabs button').forEach(b => b.addEventListener('click', () => {
    $$('.sys-tabs button').forEach(x => x.classList.toggle('on', x === b));
    $$('.sys-panel').forEach(p => p.classList.toggle('on', p.dataset.panel === b.dataset.view));
  }));

  // movie modal
  const modal = $('.modal');
  if (modal) {
    $('.movie-thumb').onclick = () => { modal.hidden = false; $('.modal-close').focus(); };
    const close = () => { modal.hidden = true; $('.movie-thumb').focus(); };
    $('.modal-close').onclick = close;
    modal.addEventListener('click', e => { if (e.target === modal) close(); });
    addEventListener('keydown', e => { if (e.key === 'Escape' && !modal.hidden) close(); });
  }
})();
