$(".ham-btn").hover(function() {
	$(this).children().children().css('background', 'darkgray');
}, function() {
	$(this).children().children().css('background', 'black');
});

$(".ham-btn").click(function() {
	$(".menu-mobile").slideToggle("fast")
});
