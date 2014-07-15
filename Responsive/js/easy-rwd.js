(function($) {
 
 	$.fn.easyRWD = function(options) {

		var w = $(window).width();

        var settings = $.extend({
            width: 940,
            firstHtml:'',
            secondHtml:''
        }, options );
 		
 		var firstHtml = settings.firstHtml;
		var secondHtml = settings.secondHtml;
		
		if (w < settings.width) {
			return this.html(firstHtml);
		}else{
			return this.html(secondHtml);
		}
    };

}(jQuery));

