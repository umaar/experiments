$(function() {

	function animate4() {
		dynamics.animate($('.circle')[0], {
			translateX: 0,
			translateY: 0
		}, {
			type: dynamics.spring,
			frequency: 274,
			friction: 323,
			anticipationSize: 59,
			anticipationStrength: 62,
		});
	}

	function animate3() {
		dynamics.animate($('.circle')[0], {
			translateX: 0,
			translateY: 100
		}, {
			type: dynamics.spring,
			frequency: 274,
			friction: 323,
			anticipationSize: 59,
			anticipationStrength: 62,
			complete: animate4
		});
	}

	function animate2() {
		dynamics.animate($('.circle')[0], {
			translateX: 350,
			translateY: 100
		}, {
			type: dynamics.spring,
			frequency: 274,
			friction: 323,
			anticipationSize: 59,
			anticipationStrength: 62,
			complete: animate3
		});
	}

	function start() {
		dynamics.animate($('.circle')[0], {
			translateX: 350
		}, {
			type: dynamics.spring,
			frequency: 274,
			friction: 323,
			anticipationSize: 59,
			anticipationStrength: 62,
			delay: 400,
			complete: animate2
		});
	}

	start();

});