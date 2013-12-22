// ==UserScript==
// @name         Google Scramble
// @namespace    https://github.com/jittat/gscramble-userscript
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
    
    var shuffle = function(array) {
      // from: http://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array-in-javascript
      var counter = array.length, temp, index;
      while (counter > 0) {
        index = Math.floor(Math.random() * counter);
        counter--;
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
      }
      return array;
    };
    
    var resultItems = jQ("#ires li.g");
    var parent = resultItems.first().parent();
    
    resultItems.detach();
    shuffle(resultItems);
    jQ.each(resultItems, function(i,elt) {
      parent.append(elt);
    });
  };
  
  addJQuery(main);

})();
