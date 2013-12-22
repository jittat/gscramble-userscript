// ==UserScript==
// @name         Google Scramble
// @namespace    googleScramble
// @include      https://www.google.com/search?*q=*
// @author       Jittat Fakcharoenphol
// @description  This user script scrambles google ranking.
// ==/UserScript==

(function(){

  var addJQuery = function(callback) {
    var script = document.createElement("script");
    script.setAttribute("src", "//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js");
    script.addEventListener('load', function() {
      var script = document.createElement("script");
      script.textContent = "window.jQ=jQuery.noConflict(true);(" + callback.toString() + ")();";
      document.body.appendChild(script);
    }, false);
    document.body.appendChild(script);
  };
  
  var main = function() {
    
    
    setTimeout(function() { alert(jQ("#ires li.g").length); },
               2000);
  };
  
  addJQuery(main);

})();
