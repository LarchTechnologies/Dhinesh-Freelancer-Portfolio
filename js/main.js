/* Dhinesh — Industrial portfolio behaviours (vanilla JS, no deps) */
(function () {
  'use strict';

  var CONTACT_EMAIL = 'hello@dhinesh.dev'; /* TODO: replace with your real email */

  /* ---------- Sticky header state ---------- */
  var head = document.querySelector('.site-head');
  function onScroll() {
    if (!head) return;
    head.classList.toggle('stuck', window.scrollY > 8);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- Mobile nav ---------- */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav && head) {
    toggle.addEventListener('click', function () {
      var open = head.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        head.classList.remove('nav-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---------- Scroll reveal (respects reduced motion) ---------- */
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var revealables = document.querySelectorAll('.reveal');
  if (reduce || !('IntersectionObserver' in window)) {
    revealables.forEach(function (el) { el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    revealables.forEach(function (el) { io.observe(el); });
  }

  /* ---------- Active nav item ---------- */
  var links = Array.prototype.slice.call(document.querySelectorAll('.site-nav a'));
  var sections = links
    .map(function (a) { return document.querySelector(a.getAttribute('href')); })
    .filter(Boolean);

  if ('IntersectionObserver' in window && sections.length) {
    var navIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (a) {
          var active = a.getAttribute('href') === '#' + entry.target.id;
          if (active) { a.setAttribute('aria-current', 'true'); }
          else { a.removeAttribute('aria-current'); }
        });
      });
    }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });
    sections.forEach(function (s) { navIO.observe(s); });
  }

  /* ---------- RFQ form -> prefilled mailto work order ---------- */
  var form = document.getElementById('rfq');
  var note = document.getElementById('form-note');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      var data = new FormData(form);
      var name = (data.get('name') || '').toString().trim();
      var company = (data.get('company') || '').toString().trim();
      var email = (data.get('email') || '').toString().trim();
      var phone = (data.get('phone') || '').toString().trim();
      var work = (data.get('work') || '').toString().trim();
      var budget = (data.get('budget') || '').toString().trim() || 'NOT STATED';
      var specs = (data.get('specs') || '').toString().trim() || '—';

      var subject = 'RFQ — FORM DHN-01 — ' + (company || name) + ' — ' + work;
      var body = [
        'NEW WORK ORDER — FORM DHN-01 (REV 3)',
        '=======================================',
        'CONTACT ......... ' + name,
        'COMPANY / UNIT .. ' + (company || '—'),
        'EMAIL ........... ' + email,
        'PHONE / WA ...... ' + (phone || '—'),
        'WORK REQUIRED ... ' + work,
        'BUDGET RANGE .... ' + budget,
        '',
        'SPECS / NOTES',
        '-------------',
        specs,
        '',
        '— issued from dhinesh portfolio'
      ].join('\n');

      window.location.href = 'mailto:' + CONTACT_EMAIL +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(body);

      if (note) {
        note.textContent = 'WORK ORDER DRAFTED — CHECK YOUR MAIL CLIENT TO SEND. NOTHING LEAVES YOUR DEVICE UNTIL YOU HIT SEND.';
        note.classList.add('sent');
      }
    });
  }
})();
