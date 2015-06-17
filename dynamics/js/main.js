$(function() {

	function animate12() {
		dynamics.animate($('.circle')[3], {
			translateY: 50,
			opacity: 1
		}, {
			type: dynamics.gravity,
			duration: 400,
			 bounciness: 718,
			 elasticity: 197
		});
	}

	function animate11() {
		dynamics.animate($('.circle')[2], {
			translateY: 100,
			opacity: 1
		}, {
			type: dynamics.gravity,
			duration: 700,
			 bounciness: 718,
			 elasticity: 197,
			 complete: animate12
		});
	}

	function animate10() {
		dynamics.animate($('.circle')[1], {
			translateY: 150,
			opacity: 1
		}, {
			type: dynamics.gravity,
			duration: 700,
			 bounciness: 718,
			 elasticity: 197,
			 complete: animate11
		});
	}

	function animate9() {
		dynamics.animate($('.circle')[0], {
			translateY: 200
		}, {
			type: dynamics.gravity,
			duration: 1300,
			 bounciness: 718,
			 elasticity: 197,
			 complete: animate10
		});
	}

	function animate8() {
		dynamics.animate($('.container')[0], {
			translateY: 200,
			scale: 0.9
		}, {
			type: dynamics.gravity,
			 bounciness: 418,
			 elasticity: 197,
			 complete: animate9
		});
	}

	function animate7() {
		dynamics.animate($('.container')[0], {
			rotateZ: '180deg',
		}, {
			type: dynamics.spring,
			duration: 800,
			frequency: 274,
			friction: 323,
			anticipationSize: 59,
			anticipationStrength: 62,
			complete: animate8
		});
	}

	function animate6() {
		dynamics.animate($('.container')[0], {
			height: '300px',
		}, {
			type: dynamics.spring,
			duration: 400,
			frequency: 274,
			friction: 323,
			anticipationSize: 59,
			anticipationStrength: 62,
			complete: animate7
		});
	}

	function animate5() {
		dynamics.animate($('.container')[0], {
			width: '500px',
		}, {
			type: dynamics.spring,
			duration: 400,
			frequency: 274,
			friction: 323,
			anticipationSize: 59,
			anticipationStrength: 62,
			complete: animate6
		});
	}

	function animate4() {
		dynamics.animate($('.circle')[0], {
			translateX: 0,
			translateY: 0
		}, {
			type: dynamics.spring,
			duration: 400,
			frequency: 274,
			friction: 323,
			anticipationSize: 59,
			anticipationStrength: 62,
			complete: animate5
		});
	}

	function animate3() {
		dynamics.animate($('.circle')[0], {
			translateX: 0,
			translateY: 100
		}, {
			type: dynamics.spring,
			duration: 400,
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
			duration: 400,
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
			duration: 400,
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