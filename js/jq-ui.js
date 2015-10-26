$(".ham-btn").hover(function() {
	$(this).children().children().css('background', 'darkgray');
}, function() {
	$(this).children().children().css('background', 'black');
});

$(".ham-btn").click(function() {
	$("nav").slideToggle("fast");
});

$(".code").each(function() {
	if($(this).hasClass("syntax")){
		$(this).prepend('<div class="code-type">SYNTAX</div>')
	}
	if($(this).hasClass("html")){
		$(this).prepend('<div class="code-type">HTML</div>')
	}
	if($(this).hasClass("arduino")){
		$(this).prepend('<div class="code-type">ARDUINO</div>')
	}
	if($(this).hasClass("javascript")){
		$(this).prepend('<div class="code-type">JQUERY</div>')
	}
});

