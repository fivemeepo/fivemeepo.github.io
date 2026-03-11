(function () {
  // ── Styles ──────────────────────────────────────────────────────────────
  var css =
    'nav#site-nav {' +
    '  position: sticky; top: 0; z-index: 100;' +
    '  background: rgba(26,10,0,0.96);' +
    '  backdrop-filter: blur(8px);' +
    '  display: flex; align-items: center; justify-content: space-between;' +
    '  padding: 0 2.5rem; height: 62px;' +
    '}' +
    'nav#site-nav .nav-brand {' +
    '  color: #c8a96e; font-size: 1.05rem; font-weight: 700;' +
    '  letter-spacing: 0.05em; text-decoration: none; white-space: nowrap;' +
    '}' +
    'nav#site-nav ul { list-style: none; display: flex; gap: 2rem; margin: 0; padding: 0; }' +
    'nav#site-nav ul a {' +
    '  color: #d8c9b0; text-decoration: none;' +
    '  font-size: 0.82rem; letter-spacing: 0.12em; transition: color 0.2s;' +
    '}' +
    'nav#site-nav ul a:hover, nav#site-nav ul a.nav-active { color: #c8a96e; }' +
    '@media (max-width: 700px) {' +
    '  nav#site-nav { padding: 0 1.2rem; }' +
    '  nav#site-nav ul { gap: 1rem; }' +
    '  nav#site-nav ul a { font-size: 0.75rem; letter-spacing: 0.06em; }' +
    '}';

  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  // ── Active page detection ────────────────────────────────────────────────
  var path = window.location.pathname;
  var isAbout   = path.indexOf('about')   !== -1;
  var isContact = path.indexOf('contact') !== -1;

  // ── Links ────────────────────────────────────────────────────────────────
  var links = [
    { href: 'index.html#menu', label: '菜单',    active: false },
    { href: 'about.html',      label: '关于王哥', active: isAbout },
    { href: 'contact.html',    label: '联系王哥', active: isContact }
  ];

  var lis = links.map(function (l) {
    var cls = l.active ? ' class="nav-active"' : '';
    return '<li><a href="' + l.href + '"' + cls + '>' + l.label + '</a></li>';
  }).join('');

  // ── Build nav ────────────────────────────────────────────────────────────
  var nav = document.createElement('nav');
  nav.id = 'site-nav';
  nav.innerHTML =
    '<a href="index.html" class="nav-brand">大东北 -- 王哥私房菜</a>' +
    '<ul>' + lis + '</ul>';

  // ── Mount (replace placeholder div, or prepend to body) ─────────────────
  var placeholder = document.getElementById('nav-root');
  if (placeholder) {
    placeholder.parentNode.replaceChild(nav, placeholder);
  } else {
    document.body.insertBefore(nav, document.body.firstChild);
  }
})();
