/* Feito por GustavoN-S (https://github.com/GustavoN-S) */

window.BOB = (function () {
  'use strict';

  function $(sel, scope) { return (scope || document).querySelector(sel); }
  function $$(sel, scope) {
    return Array.prototype.slice.call((scope || document).querySelectorAll(sel));
  }

  function fromHTML(html) {
    var tpl = document.createElement('template');
    tpl.innerHTML = html.trim();
    return tpl.content.firstElementChild;
  }

  function esc(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function money(value) {
    return '$' + Number(value).toFixed(2).replace(/\.00$/, '');
  }

  function slugToLabel(slug) {
    return String(slug).replace(/-/g, ' ').replace(/\b\w/g, function (c) {
      return c.toUpperCase();
    });
  }

  function param(name) {
    var match = new RegExp('[?&]' + name + '=([^&#]*)').exec(window.location.search);
    return match ? decodeURIComponent(match[1].replace(/\+/g, ' ')) : null;
  }

  function products() { return window.BOB_PRODUCTS || []; }
  function categories() { return window.BOB_CATEGORIES || []; }
  function giftEdits() { return window.BOB_GIFT_EDITS || []; }

  function productById(id) {
    var list = products();
    for (var i = 0; i < list.length; i++) {
      if (list[i].id === id) return list[i];
    }
    return null;
  }

  function categoryById(id) {
    var list = categories();
    for (var i = 0; i < list.length; i++) {
      if (list[i].id === id) return list[i];
    }
    return null;
  }

  function categoryName(id) {
    var cat = categoryById(id);
    return cat ? cat.name : slugToLabel(id);
  }

  function countInCategory(id) {
    return products().filter(function (p) { return p.category === id; }).length;
  }

  var PRODUCT_IMG_BASE = 'assets/images/products/';

  function productImage(product) {
    return PRODUCT_IMG_BASE + product.image;
  }

  function productHref(product) {
    return 'product.html?id=' + encodeURIComponent(product.id);
  }

  function debounce(fn, wait) {
    var timer;
    return function () {
      var ctx = this, args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function () { fn.apply(ctx, args); }, wait || 180);
    };
  }

  function prefersReducedMotion() {
    return window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  function markCurrentPage() {
    var path = window.location.pathname.split('/').pop() || 'index.html';
    $$('[data-nav]').forEach(function (link) {
      if (link.getAttribute('data-nav') === path) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }

  function stampYear() {
    $$('[data-year]').forEach(function (el) {
      el.textContent = String(new Date().getFullYear());
    });
  }

  function ready(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn);
    } else {
      fn();
    }
  }

  ready(function () {
    document.documentElement.classList.remove('no-js');
    markCurrentPage();
    stampYear();
  });

  return {
    $: $, $$: $$,
    fromHTML: fromHTML, esc: esc,
    money: money, slugToLabel: slugToLabel,
    param: param,
    products: products, categories: categories, giftEdits: giftEdits,
    productById: productById, categoryById: categoryById,
    categoryName: categoryName, countInCategory: countInCategory,
    productImage: productImage, productHref: productHref,
    debounce: debounce, prefersReducedMotion: prefersReducedMotion,
    ready: ready
  };
}());
