/* Feito por GustavoN-S (https://github.com/GustavoN-S) */

(function () {
  'use strict';

  var registry = window.BOB_MEDIA || {};
  var base = window.BOB_MEDIA_BASE || '';

  var prefix = '';

  function fail(slot, key) {
    slot.classList.add('is-missing');
    if (!slot.getAttribute('data-fallback')) {
      slot.setAttribute('data-fallback', 'Imagem: ' + key);
    }
  }

  function resolve(slot) {
    var key = slot.getAttribute('data-media');
    var entry = registry[key];
    var img = slot.querySelector('img');

    if (!img) return;

    if (!entry) {
      fail(slot, key);
      return;
    }

    if (!img.getAttribute('alt')) {
      img.setAttribute('alt', entry.alt || '');
    }

    img.addEventListener('error', function () { fail(slot, key); }, { once: true });
    img.src = prefix + base + entry.src;
  }

  function run() {
    var slots = document.querySelectorAll('[data-media]');
    for (var i = 0; i < slots.length; i++) resolve(slots[i]);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }

  window.BOB_resolveMedia = run;
}());
