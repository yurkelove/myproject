//Isotope active js code:
//************************

// Active isotope with jQuery code:

$('.main-iso').isotope({
	itemSelector: '.item',
	layoutMode: 'fitRows'
});
// Isotope click function
$('.iso-nav ul li').click(function(){
	$('.iso-nav ul li').removeClass('active-isotope');
	$(this).addClass('active-isotope');

	var selector = $(this).attr('data-filter');
	$('.main-iso').isotope({
		filter: selector
	});
	return false;
});

