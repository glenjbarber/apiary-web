// Left and right arrow keys flip between wireframes, unless typing.
(function () {
  var pill = document.querySelector('.wf-pill');
  if (!pill) return;
  var prev = pill.querySelector('[data-dir="prev"]');
  var next = pill.querySelector('[data-dir="next"]');
  document.addEventListener('keydown', function (e) {
    var t = e.target;
    if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable)) return;
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    if (e.key === 'ArrowLeft' && prev) location.href = prev.getAttribute('href');
    if (e.key === 'ArrowRight' && next) location.href = next.getAttribute('href');
  });
})();
