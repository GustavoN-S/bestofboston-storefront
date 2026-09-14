/* Feito por GustavoN-S (https://github.com/GustavoN-S) */

(function () {
  'use strict';

  var $ = BOB.$, $$ = BOB.$$, esc = BOB.esc;

  var PAGE_SIZE = 8;

  function cardHTML(product, opts) {
    opts = opts || {};
    var cat = BOB.categoryName(product.category);
    var flag = '';
    if (opts.flag) {
      flag = '<span class="card__flag">' + esc(opts.flag) + '</span>';
    } else if (product.stock === 'limited') {
      flag = '<span class="card__flag">Limited</span>';
    }

    return '' +
      '<article class="card">' +
        '<a class="card__link" href="' + esc(BOB.productHref(product)) + '">' +
          '<div class="card__media">' +
            flag +
            '<img src="' + esc(BOB.productImage(product)) + '" alt="' +
              esc(product.name) + ' — prancha de catalogo" loading="lazy" decoding="async">' +
          '</div>' +
          '<div class="card__body">' +
            '<span class="card__cat">' + esc(cat) + '</span>' +
            '<h3 class="card__name">' + esc(product.name) + '</h3>' +
            (product.note ? '<p class="card__note">' + esc(product.note) + '</p>' : '') +
            '<span class="card__price">' + esc(BOB.money(product.price)) + '</span>' +
          '</div>' +
        '</a>' +
      '</article>';
  }

  function renderCards(target, list, opts) {
    if (!target) return;
    if (!list.length) { target.innerHTML = ''; return; }
    target.innerHTML = list.map(function (p) { return cardHTML(p, opts); }).join('');
  }

  function homeFeatured() {
    var grid = $('[data-featured-grid]');
    if (!grid) return;
    var limit = parseInt(grid.getAttribute('data-limit'), 10) || 6;
    var list = BOB.products().filter(function (p) { return p.featured; }).slice(0, limit);
    renderCards(grid, list);
  }

  function categoryCounts() {
    $$('[data-cat-count]').forEach(function (el) {
      var id = el.getAttribute('data-cat-count');
      var n = BOB.countInCategory(id);
      el.textContent = n + (n === 1 ? ' item' : ' items');
    });
  }

  function catalog() {
    var grid = $('[data-catalog-grid]');
    if (!grid) return;

    var filterBtns = $$('[data-filter]');
    var searchInput = $('[data-search]');
    var countEl = $('[data-result-count]');
    var emptyEl = $('[data-empty]');
    var moreBtn = $('[data-loadmore]');
    var moreWrap = $('[data-loadmore-wrap]');

    var state = {
      category: BOB.param('category') || 'all',
      query: '',
      shown: PAGE_SIZE
    };

    function matches(product) {
      if (state.category !== 'all' && product.category !== state.category) return false;
      if (!state.query) return true;

      var q = state.query.toLowerCase();
      var haystack = [
        product.name,
        BOB.categoryName(product.category),
        product.note || '',
        (product.tags || []).join(' ')
      ].join(' ').toLowerCase();

      return haystack.indexOf(q) !== -1;
    }

    function apply(resetPage) {
      if (resetPage) state.shown = PAGE_SIZE;

      var all = BOB.products().filter(matches);
      var visible = all.slice(0, state.shown);

      renderCards(grid, visible);

      if (countEl) {
        countEl.textContent = all.length
          ? 'Showing ' + visible.length + ' of ' + all.length +
            (all.length === 1 ? ' item' : ' items')
          : 'No items';
      }

      if (emptyEl) emptyEl.hidden = all.length !== 0;
      grid.hidden = all.length === 0;

      if (moreWrap) moreWrap.hidden = visible.length >= all.length;

      var url = new URL(window.location.href);
      if (state.category === 'all') url.searchParams.delete('category');
      else url.searchParams.set('category', state.category);
      window.history.replaceState({}, '', url);
    }

    filterBtns.forEach(function (btn) {
      var value = btn.getAttribute('data-filter');
      btn.setAttribute('aria-pressed', String(value === state.category));

      btn.addEventListener('click', function () {
        state.category = value;
        filterBtns.forEach(function (b) {
          b.setAttribute('aria-pressed', String(b === btn));
        });
        apply(true);
      });
    });

    if (searchInput) {
      searchInput.addEventListener('input', BOB.debounce(function () {
        state.query = searchInput.value.trim();
        apply(true);
      }, 180));
    }

    if (moreBtn) {
      moreBtn.addEventListener('click', function () {
        state.shown += PAGE_SIZE;
        apply(false);
      });
    }

    apply(true);
  }

  function productPage() {
    var root = $('[data-product-page]');
    if (!root) return;

    var id = BOB.param('id');
    var product = id ? BOB.productById(id) : null;

    if (!product) product = BOB.products()[0];
    if (!product) return;

    var cat = BOB.categoryName(product.category);

    document.title = product.name + ' — Best of Boston | Faneuil Hall Marketplace';
    var metaDesc = $('meta[name="description"]');
    if (metaDesc && product.note) {
      metaDesc.setAttribute('content', product.name + ' — ' + product.note +
        ' Available in store at Best of Boston, Faneuil Hall Marketplace.');
    }

    var set = function (sel, text) {
      var el = $(sel);
      if (el) el.textContent = text;
    };

    set('[data-p-name]', product.name);
    set('[data-p-cat]', cat);
    set('[data-p-price]', BOB.money(product.price));
    set('[data-p-desc]', product.description || product.note || '');
    set('[data-p-crumb]', product.name);

    var stockEl = $('[data-p-stock]', root);
    if (stockEl) {
      stockEl.textContent = product.stock === 'limited'
        ? 'Limited stock in store'
        : 'In stock at the store';
    }

    var catLink = $('[data-p-catlink]', root);
    if (catLink) {
      catLink.href = 'products.html?category=' + encodeURIComponent(product.category);
      catLink.textContent = cat;
    }

    var metaList = $('[data-p-meta]', root);
    if (metaList && product.details) {
      metaList.innerHTML = product.details.map(function (row) {
        return '<div><dt>' + esc(row[0]) + '</dt><dd>' + esc(row[1]) + '</dd></div>';
      }).join('');
    }

    var sizesWrap = $('[data-p-sizes]', root);
    if (sizesWrap) {
      if (product.sizes && product.sizes.length) {
        sizesWrap.hidden = false;
        var row = $('.sizes__row', sizesWrap);
        row.innerHTML = product.sizes.map(function (s, i) {
          return '<button type="button" class="size" aria-pressed="' +
            (i === 2 || (product.sizes.length < 3 && i === 0) ? 'true' : 'false') +
            '">' + esc(s) + '</button>';
        }).join('');
      } else {
        sizesWrap.hidden = true;
      }
    }

    var stage = $('[data-gallery-stage]', root);
    var thumbs = $('[data-gallery-thumbs]', root);
    if (stage && thumbs) {
      var plate = BOB.productImage(product);
      var storePhoto = (window.BOB_MEDIA_BASE || '') +
        ((window.BOB_MEDIA['shop-floor'] || {}).src || '');

      var views = [
        { src: plate, alt: product.name + ' — prancha de catalogo', zoom: false,
          label: 'Catalogue plate' },
        { src: plate, alt: product.name + ' — detalhe da prancha', zoom: true,
          label: 'Detail' },
        { src: storePhoto, alt: 'Interior da loja, com as mesas de exposicao', zoom: false,
          label: 'In store' }
      ];

      var showView = function (i) {
        var v = views[i];
        var img = $('img', stage);
        img.src = v.src;
        img.alt = v.alt;
        img.style.transform = v.zoom ? 'scale(1.85)' : '';
        img.style.objectPosition = v.zoom ? '50% 42%' : '';
        $$('.gallery__thumb', thumbs).forEach(function (b, bi) {
          b.setAttribute('aria-pressed', String(bi === i));
        });
      };

      thumbs.innerHTML = views.map(function (v, i) {
        return '<button type="button" class="gallery__thumb" aria-pressed="' +
          (i === 0 ? 'true' : 'false') + '" aria-label="Ver ' + esc(v.label) + '">' +
          '<img src="' + esc(v.src) + '" alt="" ' +
          (v.zoom ? 'style="transform:scale(1.85)"' : '') + '></button>';
      }).join('');

      $$('.gallery__thumb', thumbs).forEach(function (btn, i) {
        btn.addEventListener('click', function () { showView(i); });
      });

      showView(0);
    }

    var relatedGrid = $('[data-related-grid]', document);
    if (relatedGrid) {
      var same = BOB.products().filter(function (p) {
        return p.category === product.category && p.id !== product.id;
      });
      if (same.length < 4) {
        BOB.products().forEach(function (p) {
          if (same.length >= 4) return;
          if (p.id === product.id) return;
          if (same.indexOf(p) !== -1) return;
          if (p.featured) same.push(p);
        });
      }
      renderCards(relatedGrid, same.slice(0, 4));
    }

    root.hidden = false;
  }

  function giftsPage() {
    var host = $('[data-gift-lanes]');
    if (!host) return;

    host.innerHTML = BOB.giftEdits().map(function (edit, i) {
      var items = edit.items
        .map(function (id) { return BOB.productById(id); })
        .filter(Boolean);

      return '' +
        '<section class="giftlane reveal" id="' + esc(edit.id) + '">' +
          '<header class="giftlane__head">' +
            '<span class="giftlane__num serif-num">' +
              (i + 1 < 10 ? '0' : '') + (i + 1) + '</span>' +
            '<h2 class="h3">' + esc(edit.title) + '</h2>' +
            '<p class="card__note">' + esc(edit.blurb) + '</p>' +
          '</header>' +
          '<div class="giftlane__items">' +
            items.map(function (p) { return cardHTML(p); }).join('') +
          '</div>' +
        '</section>';
    }).join('');

    var index = $('[data-gift-index]');
    if (index) {
      index.innerHTML = BOB.giftEdits().map(function (edit) {
        return '<li><a class="chip" href="#' + esc(edit.id) + '">' +
          esc(edit.title) + '</a></li>';
      }).join('');
    }
  }

  BOB.ready(function () {
    homeFeatured();
    categoryCounts();
    catalog();
    productPage();
    giftsPage();

    if (window.BOB_resolveMedia) window.BOB_resolveMedia();
    if (window.BOB_observeReveals) window.BOB_observeReveals();
  });
}());
