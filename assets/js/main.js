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
    if (e.isIntersecting) links.forEach(l => l.classList.toggle('on', l.getAttribute('href') === '#' + e.target.id));
  }), { rootMargin: '-45% 0px -50% 0px' });
  $$('main section[id]').forEach(s => io.observe(s));

  // reveal
  const rv = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); rv.unobserve(e.target); } }), { threshold: .15 });
  $$('.sec-head, .story-body, .news-wrap, .chara, .sys-tabs, .routes, .movie-thumb').forEach(el => { el.classList.add('reveal'); rv.observe(el); });

  // banner slider
  const track = $('.banner-track'), n = track.children.length, dots = $('.bn-dots');
  let idx = 0, timer;
  for (let i = 0; i < n; i++) { const b = document.createElement('button'); b.setAttribute('aria-label', `第 ${i + 1} 則`); b.onclick = () => go(i); dots.appendChild(b); }
  const go = i => { idx = (i + n) % n; track.style.transform = `translateX(-${idx * 100}%)`; $$('button', dots).forEach((d, j) => d.classList.toggle('on', j === idx)); clearInterval(timer); timer = setInterval(() => go(idx + 1), 5000); };
  $('.bn-prev').onclick = () => go(idx - 1); $('.bn-next').onclick = () => go(idx + 1); go(0);

  // characters
  const CHARAS = [
    { role: '主角', name: '轉生者', en: 'THE REINCARNATED', c: '#e2c27a', desc: '自異界被召喚而來的靈魂。被賦予新的生命與天賦，背負著調和世界的使命──卻逐漸察覺命運背後那隻無形的手。', quote: '……總覺得，有誰一直在看著我。' },
    { role: '神祇', name: '轉生之神', en: 'THE GOD OF REBIRTH', c: '#9fb8ff', desc: '也就是「你」。掌管轉生、引入異界之魂的神祇。以神力干涉轉生者身邊的一切，無論是祝福還是災厄。', quote: '去吧，我的勇者。你的一切，都由我來決定。' },
    { role: '酒館', name: '酒館老闆', en: 'THE TAVERN MASTER', c: '#f0a68a', desc: '不識字的酒館老闆。熱情好客，卻總把菜單寫錯，每次都被酒保糾正。', quote: '「熱待」？「熱呆」？有差嗎？客人都在等啊！' },
    { role: '酒館', name: '不喝酒的酒保', en: 'THE SOBER BARTENDER', c: '#c79bff', desc: '冷靜毒舌的酒保。發誓戒酒，因為每次醉後醒來，身邊躺著的總是酒館裡最不受歡迎的客人。', quote: '抱歉，我已經戒酒了。……說起來，您的吟遊詩人組合最近有新作品嗎？' },
    { role: '教堂', name: '虔誠的信徒', en: 'THE DEVOUT', c: '#8ad0c4', desc: '在教堂為女友點燈祈福的男人。看見捐獻箱裡滿滿的錢時，信仰出現了微妙的動搖。', quote: '既然都走到這一步了……' },
    { role: '市井', name: '縮寫愛好者', en: 'THE ABBREVIATOR', c: '#f2d36b', desc: '無論說什麼，最後都一定要強調一次縮寫的神秘人物。ＴＭＩ（資訊過多）。', quote: '這叫做「轉生者們」，簡稱「轉們」。ＺＭ。' },
  ];
  const thumbs = $('.chara-thumbs'), art = $('.chara-art');
  const show = i => {
    const d = CHARAS[i];
    $('.chara-role').textContent = d.role; $('.chara-name').textContent = d.name; $('.chara-en').textContent = d.en;
    $('.chara-desc').textContent = d.desc; $('.chara-quote').textContent = d.quote;
    art.style.setProperty('--c', d.c); art.classList.remove('swap'); void art.offsetWidth; art.classList.add('swap');
    $$('button', thumbs).forEach((b, j) => { b.classList.toggle('on', j === i); b.setAttribute('aria-selected', j === i); });
  };
  CHARAS.forEach((d, i) => {
    const b = document.createElement('button');
    b.setAttribute('role', 'tab'); b.setAttribute('aria-label', d.name); b.style.setProperty('--c', d.c);
    b.innerHTML = '<svg viewBox="0 0 300 500"><use href="#i-person"/></svg>';
    b.onclick = () => show(i); thumbs.appendChild(b);
  });
  show(0);

  // system tabs
  $$('.sys-tabs button').forEach(b => b.addEventListener('click', () => {
    $$('.sys-tabs button').forEach(x => x.classList.toggle('on', x === b));
    $$('.sys-panel').forEach(p => p.classList.toggle('on', p.dataset.panel === b.dataset.view));
  }));

  // movie modal
  const modal = $('.modal');
  $('.movie-thumb').onclick = () => { modal.hidden = false; $('.modal-close').focus(); };
  const close = () => { modal.hidden = true; $('.movie-thumb').focus(); };
  $('.modal-close').onclick = close;
  modal.addEventListener('click', e => { if (e.target === modal) close(); });
  addEventListener('keydown', e => { if (e.key === 'Escape' && !modal.hidden) close(); });
})();
