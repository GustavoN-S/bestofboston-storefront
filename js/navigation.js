/* Feito por GustavoN-S (https://github.com/GustavoN-S) */

(function () {
  'use strict';

  var $ = BOB.$, $$ = BOB.$$;

  function stickyHeader() {
    var head = $('.masthead');
    if (!head) return;

    var ticking = false;
    function update() {
      head.classList.toggle('is-stuck', window.scrollY > 8);
      ticking = false;
    }
    window.addEventListener('scroll', function () {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    }, { passive: true });
    update();
  }

  function mobileMenu() {
    var toggle = $('.nav-toggle');
    var panel = $('.nav-panel');
    if (!toggle || !panel) return;

    var closeBtn = $('.nav-panel__close', panel);
    var lastFocused = null;

    function focusable() {
      return $$('a[href], button:not([disabled])', panel)
        .filter(function (el) { return el.offsetParent !== null; });
    }

    function open() {
      lastFocused = document.activeElement;
      panel.classList.add('is-open');
      panel.removeAttribute('aria-hidden');
      toggle.setAttribute('aria-expanded', 'true');
      document.body.classList.add('nav-open');
      var first = focusable()[0];
      if (first) first.focus();
      document.addEventListener('keydown', onKeydown);
    }

    function close() {
      panel.classList.remove('is-open');
      panel.setAttribute('aria-hidden', 'true');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('nav-open');
      document.removeEventListener('keydown', onKeydown);
      if (lastFocused) lastFocused.focus();
    }

    function onKeydown(e) {
      if (e.key === 'Escape') {
        e.preventDefault();
        close();
        return;
      }
      if (e.key !== 'Tab') return;

      var items = focusable();
      if (!items.length) return;
      var first = items[0];
      var last = items[items.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    toggle.addEventListener('click', function () {
      if (panel.classList.contains('is-open')) close();
      else open();
    });

    if (closeBtn) closeBtn.addEventListener('click', close);

    $$('.nav-panel__link', panel).forEach(function (link) {
      link.addEventListener('click', close);
    });

    var mq = window.matchMedia('(min-width: 1025px)');
    var onChange = function (e) {
      if (e.matches && panel.classList.contains('is-open')) close();
    };
    if (mq.addEventListener) mq.addEventListener('change', onChange);
    else if (mq.addListener) mq.addListener(onChange);

    panel.setAttribute('aria-hidden', 'true');
  }

  BOB.ready(function () {
    stickyHeader();
    mobileMenu();
  });
}());
