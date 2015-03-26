$(function() {
	$('select').selectpicker();

	$('.show_targets').click(function(e) {
		e.preventDefault();
		$(this).closest('.skill_c').find('.target_c').slideToggle();
	});
});