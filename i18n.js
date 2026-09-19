// ── Idioma: español / inglés ──
//
// El español vive en el HTML y ahí se queda: es la fuente de verdad, lo que
// indexa Google y lo que se ve si el JS no carga. El diccionario solo trae el
// inglés — lo arma el archivo i18n-<pagina>.js en window.MICAJA_EN.
//
// Al cargar se guarda el original de cada nodo marcado, así que volver a ES es
// restaurar lo guardado, no traducir de vuelta. Una clave que falte en el
// diccionario deja el español en su lugar en vez de vaciar el nodo.
//
// Marcado en el HTML:
//   data-i18n="clave"              reemplaza el innerHTML (admite <br>, <em>…)
//   data-i18n-alt="clave"          reemplaza el alt de una imagen
//   data-i18n-aria-label="clave"   reemplaza el aria-label
//   data-i18n-caption="clave"      reemplaza el data-caption (galería)
// Y en el diccionario, dos claves reservadas: "@title" y "@description".

(function () {
  'use strict';

  var CLAVE_GUARDADO = 'micaja-lang';
  var EN = window.MICAJA_EN || {};

  // data-* del HTML → atributo que se reemplaza
  var ATRIBUTOS = {
    'data-i18n-alt': 'alt',
    'data-i18n-aria-label': 'aria-label',
    'data-i18n-caption': 'data-caption'
  };

  // { el, clave, attr, es } — attr null significa innerHTML
  var nodos = [];

  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    nodos.push({ el: el, clave: el.getAttribute('data-i18n'), attr: null, es: el.innerHTML });
  });

  Object.keys(ATRIBUTOS).forEach(function (dataAttr) {
    var attr = ATRIBUTOS[dataAttr];
    document.querySelectorAll('[' + dataAttr + ']').forEach(function (el) {
      nodos.push({
        el: el,
        clave: el.getAttribute(dataAttr),
        attr: attr,
        es: el.getAttribute(attr) || ''
      });
    });
  });

  var metaDesc = document.querySelector('meta[name="description"]');
  var esTitulo = document.title;
  var esDesc   = metaDesc ? metaDesc.getAttribute('content') : '';

  function traducir(clave, en) {
    if (!en) return null;
    return Object.prototype.hasOwnProperty.call(EN, clave) ? EN[clave] : null;
  }

  function aplicar(idioma) {
    var en = idioma === 'en';

    nodos.forEach(function (n) {
      var valor = traducir(n.clave, en);
      if (valor === null) valor = n.es;   // sin traducción: se queda el español
      if (n.attr) {
        n.el.setAttribute(n.attr, valor);
      } else if (n.el.innerHTML !== valor) {
        n.el.innerHTML = valor;
      }
    });

    document.documentElement.lang = idioma;
    document.title = (en && EN['@title']) || esTitulo;
    if (metaDesc) metaDesc.setAttribute('content', (en && EN['@description']) || esDesc);

    document.querySelectorAll('.lang-opt').forEach(function (btn) {
      var activo = btn.getAttribute('data-lang') === idioma;
      btn.classList.toggle('is-active', activo);
      btn.setAttribute('aria-pressed', activo ? 'true' : 'false');
    });
  }

  function guardar(idioma) {
    try { localStorage.setItem(CLAVE_GUARDADO, idioma); } catch (e) { /* modo privado */ }
  }

  // Preferencia: ?lang= en la URL > lo elegido antes > el idioma del navegador.
  // El español gana el empate: es el mercado de MiCaja. Solo se abre en inglés
  // si el navegador no lista ningún español entre sus idiomas.
  function idiomaInicial() {
    var param = new URLSearchParams(window.location.search).get('lang');
    if (param === 'en' || param === 'es') return param;

    var guardado = null;
    try { guardado = localStorage.getItem(CLAVE_GUARDADO); } catch (e) { /* modo privado */ }
    if (guardado === 'en' || guardado === 'es') return guardado;

    var idiomas = navigator.languages || [navigator.language || 'es'];
    if (idiomas.some(function (l) { return /^es\b/i.test(l); })) return 'es';
    if (idiomas.some(function (l) { return /^en\b/i.test(l); })) return 'en';
    return 'es';
  }

  document.querySelectorAll('.lang-opt').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var idioma = btn.getAttribute('data-lang');
      aplicar(idioma);
      guardar(idioma);
    });
  });

  aplicar(idiomaInicial());
})();
