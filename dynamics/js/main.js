$(function() {

	function animate24() {
		dynamics.animate($('.circle')[0], {
			width: 200,
			height: 40
		}, {
			type: dynamics.gravity,
			duration: 300,
			 bounciness: 718,
			 elasticity: 197
		});
	}

	function animate23() {
		dynamics.animate($('.circle')[0], {
			width: 210,
			height: 30
		}, {
			type: dynamics.gravity,
			duration: 300,
			 bounciness: 718,
			 elasticity: 197,
			 complete: animate24
		});
	}

	function animate22() {
		dynamics.animate($('.circle')[0], {
			width: 200,
			height: 20
		}, {
			type: dynamics.gravity,
			duration: 300,
			 bounciness: 718,
			 elasticity: 197,
			 complete: animate23
		});
	}

	function animate21() {
		dynamics.animate($('.circle')[0], {
			width: 200,
			height: 10
		}, {
			type: dynamics.gravity,
			duration: 300,
			 bounciness: 718,
			 elasticity: 197,
			 complete: animate22
		});
	}

	function animate20() {
		dynamics.animate($('.circle')[0], {
			width: 500,
			height: 5
		}, {
			type: dynamics.gravity,
			duration: 200,
			 bounciness: 718,
			 elasticity: 197,
			 complete: animate21
		});
	}

	function animate19() {
		dynamics.animate($('.circle')[0], {
			width: 50,
			height: 5
		}, {
			type: dynamics.gravity,
			duration: 200,
			 bounciness: 718,
			 elasticity: 197,
			 complete: animate20
		});
	}

	function animate18() {
		dynamics.animate($('.circle')[0], {
			width: 100,
			height: 10
		}, {
			type: dynamics.gravity,
			duration: 200,
			 bounciness: 718,
			 elasticity: 197,
			 complete: animate19
		});
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
			 complete: animate18
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