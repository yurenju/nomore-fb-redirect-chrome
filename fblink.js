var observer = new window.MutationObserver(function(mutations, observer) {
  const RE_REDIRECT = new RegExp('[?|&]u=([^&;]+?)(&|#|;|$)');
  var links = document.querySelectorAll('a[href*="facebook.com/l.php"]');

  Array.prototype.forEach.call(links, function(link) {
    var matched = link.search.match(RE_REDIRECT);
    if (matched) {
      link.removeAttribute('onclick');
      link.href = decodeURIComponent(matched[1]);
    }
  });
});

observer.observe(document, {
  subtree: true,
  attributes: true
});
