
var custom_accordion = (function () {
  'use strict';

  var _slideElementDown = function (el) {
    el.slideDown('fast');
    el.siblings('dd').slideUp('fast');
  };

  var _slideElementUp = function (el) {
    el.slideUp('fast');
  };

  var _accordion = function () {

    var $currentTerm = $(this),
        currentDesc = $currentTerm.next('dd'),
        def_terms = $currentTerm.siblings('dt');

    //Check whether the dd element is hidden.
    if (currentDesc.css('display') !== 'block') {

      //Set the "active" class attribute whenever the "dt" element is clicked.
      $currentTerm.addClass('active');

      //Slide the current dd element
      _slideElementDown(currentDesc);

      //Slide up other DD elements other than the current one.
      currentDesc.siblings('dd').slideUp('fast');

      //Remove the active class from other dt elements while the current dt element is clicked.
      def_terms.removeClass('active');

    }
    else {
      //Otherwise, dd elements, other than the current element being clicked on will slide up.
      _slideElementUp(currentDesc);
    }
  };

  var bindSlide = function () {
    $('dl').on('click', 'dt', _accordion);
  };

  return {
    init: bindSlide
  }
})();

$(document).ready(custom_accordion.init);
