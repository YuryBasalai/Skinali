$(window).load(function () {
	$(".before-after").twentytwenty({
		before_label: 'Без скинали', // Set a custom before label
		after_label: 'Со скинали' // Set a custom after label
	});
	$('.before-slider').slick({
		draggable: false,
		dots: true,
		dotsClass: 'before-slider_dots',
		prevArrow: $(".arrow-left"),
		nextArrow: $(".arrow-right"),
	});
	$('.menu-button').on('click', function () {
		$('.menu').toggleClass('menu_active');
	});

	/* Настройка select */
	$('.select ').on('click', function(){
		$('.select_dropdown').toggleClass('select_dropdown_open');
	});
	$('.select_option').on('click', function(){
		var value = $(this).attr('data-value');
		$('#select-type').val(value)
		$('.select_checked').text(value);	
	})
	$("a[href^='#']").click(function(){
		var _href = $(this).attr("href");
		$("html, body").animate({scrollTop: $(_href).offset().top -120 + "px"});
		return false;
	});
	$('input[type="tel"]').mask("+375 (99) 999-99-99");
	/* Показывать карту только когда докрутили до нее */
	var reviews = $('.reviews');
	var reviewsTop = reviews.offset().top;
	$(window).bind('scroll', function(){
		var windowTop = $(this).scrollTop();
		if (windowTop > reviewsTop) {
			$('.map').html('<script type="text/javascript" charset="utf-8" async src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A9654f950292c7b56a6a2cce26ee453806b8ece4d3f629cd6cde5f45256d0ac0a&amp;width=100%25&amp;height=410&amp;lang=ru_RU&amp;scroll=false"></script>')
			$(window).unbind('scroll')
		}
	})
});