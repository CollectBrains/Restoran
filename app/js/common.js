$(function() {

	function heightDetect() {
		$(".header").css("height", $(window).height());
	}heightDetect();

	$(window).resize(function() {
		heightDetect();
	});

	$(".toggle-wrap").on('click', function (e) {
		$(".hidden-menu").slideToggle();
	})
});
