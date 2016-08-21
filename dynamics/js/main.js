'use strict';
$(function() {


	function crazyRect(width, height) {
		return new Promise(function(resolve, reject) {
			dynamics.animate($('.circle')[0], {
				width: width || 200,
				height: height || 40
			}, {
				type: dynamics.gravity,
				duration: 200,
				 bounciness: 718,
				 elasticity: 197,
				 complete: resolve
			});
		});
	}

	function startCrazyRect() {
		crazyRect(100, 50)
			.then( () => crazyRect(200, 10) )
			.then( () => crazyRect(100, 50) )
			.then( () => crazyRect(400, 20) )
			.then( () => crazyRect(300, 40) )
			.then( () => crazyRect(600, 50) )
			.then( () => crazyRect(600, 10) )
			.then( () => crazyRect(100, 70) )
			.then( () => crazyRect(400, 5) )
			.then( () => crazyRect(200, 10) )
			.then( () => crazyRect(100, 50) )
			.then( () => crazyRect(400, 20) )
			.then( () => crazyRect(300, 40) )
			.then( () => crazyRect(600, 50) )
			.then( () => crazyRect(600, 10) )
			.then( () => crazyRect(100, 70) )
			.then( () => crazyRect(400, 5) )
			.then(() => crazyRect(200, 20));
	}


	function animate17() {
		dynamics.animate($('.circle')[0], {
			width: 200,
			height: 20
		}, {
			type: dynamics.gravity,
			duration: 200,
			 bounciness: 718,
			 elasticity: 197,
			 complete: startCrazyRect
		});
	}

	function animate16() {
		dynamics.animate($('.circle')[3], {
			translateX: 60,
			translateY: 50
		}, {
			type: dynamics.gravity,
			duration: 100,
			 bounciness: 718,
			 elasticity: 197,
			 complete: animate17
		});
	}

	function animate15() {
		dynamics.animate($('.circle')[2], {
			translateX: 55,
			translateY: 100
		}, {
			type: dynamics.gravity,
			duration: 100,
			 bounciness: 718,
			 elasticity: 197,
			 complete: animate16
		});
	}

	function animate14() {
		dynamics.animate($('.circle')[1], {
			translateX: 50,
			translateY: 150
		}, {
			type: dynamics.gravity,
			duration: 100,
			 bounciness: 718,
			 elasticity: 197,
			 complete: animate15
		});
	}

	function animate13() {
		dynamics.animate($('.circle')[0], {
			borderRadius: 0,
			opacity: 1
		}, {
			type: dynamics.gravity,
			duration: 400,
			 bounciness: 718,
			 elasticity: 197,
			 complete: animate14
		});
	}

	function animate12() {
		dynamics.animate($('.circle')[3], {
			translateY: 50,
			opacity: 1
		}, {
			type: dynamics.gravity,
			duration: 200,
			 bounciness: 718,
			 elasticity: 197,
			 complete: animate13
		});
	}

	function animate11() {
		dynamics.animate($('.circle')[2], {
			translateY: 100,
			opacity: 1
		}, {
			type: dynamics.gravity,
			duration: 400,
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
			duration: 600,
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
			duration: 900,
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