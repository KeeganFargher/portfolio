$('.loader-background').fadeOut();
new WOW().init();

scrollToWaypoint('.js--about-me', '#about-me');
scrollToWaypoint('.js--timeline', '#timeline');
scrollToWaypoint('.js--projects', '#projects');
scrollToWaypoint('.js--contact-me', '#contact-me');

function scrollToWaypoint(buttonId, sectionId) {
	$(buttonId).click(function() {
		$('html, body').animate(
			{
				scrollTop: $(sectionId).offset().top
			},
			500
		);
	});
}
