
  //prehiding snippet for Adobe Target with asynchronous tags deployment
  ;(function(win, doc, style, timeout) {
  var STYLE_ID = 'at-body-style';
  function getParent() {
     return doc.getElementsByTagName('head')[0];
  }
  function addStyle(parent, id, def) {
     if (!parent) {
     return;
     }
     var style = doc.createElement('style');
     style.id = id;
     style.innerHTML = def;
     parent.appendChild(style);
  }
  function removeStyle(parent, id) {
     if (!parent) {
     return;
     }
     var style = doc.getElementById(id);
     if (!style) {
     return;
     }
     parent.removeChild(style);
  }
  addStyle(getParent(), STYLE_ID, style);
  setTimeout(function() {
     removeStyle(getParent(), STYLE_ID);
  }, timeout);
  }(window, document, "body {opacity: 0 !important}", 100));
