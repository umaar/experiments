$(function() {
	dynamics.animate($('.circle')[0], {
		translateX: 350
	}, {
		type: dynamics.spring,
		delay: 1000
	});
});