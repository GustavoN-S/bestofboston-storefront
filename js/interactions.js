/* Feito por GustavoN-S (https://github.com/GustavoN-S) */

(function () {
  'use strict';

  var $ = BOB.$, $$ = BOB.$$;

  var observer = null;

  function observeReveals() {
    var items = $$('.reveal:not(.is-visible)');
    if (!items.length) return;

    if (!('IntersectionObserver' in window) || BOB.prefersReducedMotion()) {
      items.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }

    if (!observer) {
      observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });
    }

    items.forEach(function (el) { observer.observe(el); });
  }
  window.BOB_observeReveals = observeReveals;

  function toggleGroups() {
    document.addEventListener('click', function (e) {
      var btn = e.target.closest('.size');
      if (!btn) return;
      var group = btn.closest('.sizes__row');
      if (!group) return;
      $$('.size', group).forEach(function (b) {
        b.setAttribute('aria-pressed', String(b === btn));
      });
    });
  }

  function contactForm() {
    var form = $('[data-contact-form]');
    if (!form) return;

    var status = $('[data-form-status]', form);

    function fieldOf(input) { return input.closest('.field'); }

    function errorFor(input) {
      var field = fieldOf(input);
      return field ? $('.field__error', field) : null;
    }

    function setError(input, message) {
      var field = fieldOf(input);
      var box = errorFor(input);
      if (field) field.classList.toggle('is-invalid', Boolean(message));
      if (box) box.textContent = message || '';
      input.setAttribute('aria-invalid', message ? 'true' : 'false');
    }

    function validate(input) {
      var value = (input.value || '').trim();
      var label = input.getAttribute('data-label') || 'This field';

      if (input.hasAttribute('required') && !value) {
        setError(input, label + ' is required.');
        return false;
      }
      if (input.type === 'email' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) {
        setError(input, 'Enter a valid email address.');
        return false;
      }
      if (input.tagName === 'TEXTAREA' && value && value.length < 10) {
        setError(input, 'Please write at least 10 characters.');
        return false;
      }
      setError(input, '');
      return true;
    }

    var fields = $$('input, textarea, select', form).filter(function (el) {
      return el.type !== 'submit' && el.type !== 'hidden';
    });

    fields.forEach(function (input) {
      input.addEventListener('blur', function () { validate(input); });
      input.addEventListener('input', function () {
        if (input.getAttribute('aria-invalid') === 'true') validate(input);
      });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var ok = true;
      var firstBad = null;
      fields.forEach(function (input) {
        if (!validate(input)) {
          ok = false;
          if (!firstBad) firstBad = input;
        }
      });

      if (!ok) {
        if (status) {
          status.textContent = 'Please check the highlighted fields.';
          status.setAttribute('data-state', 'error');
        }
        if (firstBad) firstBad.focus();
        return;
      }

      if (status) {
        status.textContent =
          'Message ready to send. This demo has no mail service connected yet — ' +
          'please call the store on (617) 227-3962.';
        status.setAttribute('data-state', 'ok');
      }
      form.reset();
      fields.forEach(function (input) { setError(input, ''); });
    });
  }

  function anchorScroll() {
    document.addEventListener('click', function (e) {
      var link = e.target.closest('a[href^="#"]');
      if (!link) return;
      var id = link.getAttribute('href');
      if (!id || id === '#' || id.length < 2) return;

      var target = document.getElementById(id.slice(1));
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({
        behavior: BOB.prefersReducedMotion() ? 'auto' : 'smooth',
        block: 'start'
      });
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
      history.replaceState({}, '', id);
    });
  }

  BOB.ready(function () {
    observeReveals();
    toggleGroups();
    contactForm();
    anchorScroll();
  });
}());
