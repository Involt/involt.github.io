$(document).ready(function() {
	$(".syntaxhint").hover(function() {
		$(this).children().text('Example: <div class="ard button P5 123"></div>')
		$(this).children().css('color', "#374650")
	}, function() {
		$(this).children().text('Syntax: [ard] [function] [pin] [value] [yourclass]')
		$(this).children().css('color', "white")
	});

	$(".example").click(function() {
		var examplelink = $(this).attr('id');
		
		 window.location = "examples/"+examplelink+".html";
	});

	
});


