javascript: (function () {
  var sel = document.getSelection();

  if (sel === null || sel === undefined) {
    sel = prompt('Suchbegriff:', '');
  }

  if (sel !== null && sel !== undefined && sel !== '') {
    var w =
      'https://de.wikipedia.org/w/index.php?search=' + encodeURIComponent(sel);
    w.focus();
  }
})();
