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
});