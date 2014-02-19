(function($) {

	$.fn.mobiMenu = function(options) {

		// This is the easiest way to have default options.
		var settings = $.extend({
			// These are the defaults.
			slideUpTimeOut : 200,
			slideDownTimeOut : 500
		}, options);

		$('.cssmenu ul').hide();
		$('a.menu-toggle').hover(function() {
			var $target = $($(this).attr('href')).children('ul');
			//console.log($target.get());
			clearTimeout($target.data('hoverTimer'));
			$target.stop(true, true).slideDown(settings.slideDownTimeOut);
		}, function() {
			var $target = $($(this).attr('href')).children('ul');
			var timer = setTimeout(function() {
				$target.stop(true, true).slideUp();
			}, settings.slideUpTimeOut);
			$target.data('hoverTimer', timer);
		});

		$('.cssmenu > ul').hover(function() {
			clearTimeout($(this).data('hoverTimer'));
		}, function() {
			$(this).stop(true, true).slideUp();
		});

		$("#menu li.has-sub>a").on('click', function() {
			$(this).removeAttr('href');
			var element = $(this).parent('li');
			if (element.hasClass('open')) {
				element.removeClass('open');
				element.find('li').removeClass('open');
				element.find('ul').slideUp();
			} else {
				element.addClass('open');
				element.children('ul').slideDown();
				element.siblings('li').children('ul').slideUp();
				element.siblings('li').removeClass('open');
				element.siblings('li').find('li').removeClass('open');
				element.siblings('li').find('ul').slideUp();
			}
		});
		$("#social li.has-sub>a").on('click', function() {
			$(this).removeAttr('href');
			var element = $(this).parent('li');
			if (element.hasClass('open')) {
				element.removeClass('open');
				element.find('li').removeClass('open');
				element.find('ul').slideUp();
			} else {
				element.addClass('open');
				element.children('ul').slideDown();
				element.siblings('li').children('ul').slideUp();
				element.siblings('li').removeClass('open');
				element.siblings('li').find('li').removeClass('open');
				element.siblings('li').find('ul').slideUp();
			}
		});

	};
})(jQuery); 