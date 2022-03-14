/* PostRender */

var myPostRender = function(vals) {
  (function ($) {
	
	if ($("article .at.ngp-form footer.FooterHtml").children().length > 0) { // If there's something in the Footer
	  $("article .at.ngp-form footer.FooterHtml").addClass("has-content"); // add a class to it
	}

  }(jQuery));
};

var nvtag_callbacks = nvtag_callbacks || {};
nvtag_callbacks.postRender = nvtag_callbacks.postRender || [];
nvtag_callbacks.postRender.push(myPostRender);