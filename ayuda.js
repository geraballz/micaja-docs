// ── Centro de ayuda ──
// Buscador, subtítulos en el idioma de la página y la versión del pie. Las
// tarjetas las escribe marketing/videos/publicar-ayuda.js de CopiasMango.

(function () {
  'use strict';

  var videos = Array.prototype.slice.call(document.querySelectorAll('.ayuda-video'));
  var secciones = Array.prototype.slice.call(document.querySelectorAll('.ayuda-seccion'));
  var vacio = document.getElementById('ayuda-vacio');
  var buscar = document.getElementById('ayuda-buscar');

  // Igual que el POS: se busca sin acentos ni mayúsculas.
  function normalizar(t) {
    return t.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim();
  }

  // Una palabra encuentra sus variantes: "registro" a "registrar" y
  // "registrado", "credito" a "creditos". En las largas se busca la raíz (sin
  // las dos últimas letras); las cortas van tal cual, si no "corte" encontraría
  // cualquier "cor-".
  function raiz(p) {
    return p.length > 5 ? p.slice(0, p.length - 2) : p;
  }

  function filtrar() {
    var q = normalizar(buscar.value);
    var en = document.documentElement.lang === 'en';
    var hay = 0;
    videos.forEach(function (v) {
      var texto = v.getAttribute(en ? 'data-buscar-en' : 'data-buscar-es') || '';
      var ve = !q || q.split(/\s+/).every(function (p) { return texto.indexOf(raiz(p)) >= 0; });
      v.hidden = !ve;
      if (ve) hay++;
    });
    secciones.forEach(function (s) {
      s.hidden = !s.querySelector('.ayuda-video:not([hidden])');
    });
    vacio.hidden = hay > 0;
  }
  if (buscar) buscar.addEventListener('input', filtrar);

  // Subtítulos en el idioma de la página. i18n.js no avisa del cambio, pero sí
  // pone el atributo lang de <html>: se observa ese.
  function subtitulos() {
    var idioma = document.documentElement.lang === 'en' ? 'en' : 'es';
    videos.forEach(function (v) {
      var player = v.querySelector('video');
      if (!player) return;
      Array.prototype.forEach.call(player.textTracks, function (t) {
        t.mode = t.language === idioma ? 'showing' : 'disabled';
      });
    });
    if (buscar && buscar.value) filtrar();
  }
  new MutationObserver(subtitulos).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
  subtitulos();

  // Solo un video suena a la vez.
  videos.forEach(function (v) {
    var player = v.querySelector('video');
    if (!player) return;
    player.addEventListener('play', function () {
      videos.forEach(function (o) {
        var p = o.querySelector('video');
        if (p && p !== player) p.pause();
      });
    });
  });

  // Aparición al hacer scroll, como en la portada.
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-in').forEach(function (el) { observer.observe(el); });

  // La versión del pie sale de version.json, igual que en la portada.
  var versionEl = document.getElementById('footer-version');
  if (versionEl) {
    fetch('version.json').then(function (r) { return r.json(); })
      .then(function (d) { if (d && d.version) versionEl.textContent = 'v' + d.version; })
      .catch(function () { /* file:// o sin red: se queda la del HTML */ });
  }
})();
