(function() {

	var canvas = document.createElement('canvas');
	var width = 400;
	var height = 400;
	canvas.width = width;
	canvas.height = height;
	document.body.appendChild(canvas);
	var c = canvas.getContext('2d');

	var tweenFormulas = {
		easeInQuad: function (t, b, c, d) {
			return c*(t/=d)*t + b;
		},
		easeOutBounce: function (t, b, c, d) {
			if ((t/=d) < (1/2.75)) {
				return c*(7.5625*t*t) + b;
			} else if (t < (2/2.75)) {
				return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
			} else if (t < (2.5/2.75)) {
				return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
			} else {
				return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
			}
		}
	};

	function Square() {
		this.x = width * 0.1;
		this.y = height * 0.1;
		this.opacity = 0.2;
		this.size = 10;
	}

	Square.prototype.draw = function() {
		c.beginPath();
		c.arc(this.x, this.y, this.size, 0, 2 * Math.PI, false);
		c.fillStyle = 'rgba(0,0,0,' + this.opacity + ')';
		c.fill();
	}

	function Tween(obj, props, duration, easingFunc) {
		this.obj = obj;
		this.startTime = +new Date();
		this.duration = duration;
		this.easingFunc = easingFunc;
		this.props = {};
		for (prop in props) {
			this.props[prop] = {
				startVal: this.obj[prop],
				endVal: props[prop]
			}
		}
	}

	Tween.prototype.update = function() {
		var easing = tweenFormulas[this.easingFunc];
		for (prop in this.props) {
			var currentTime = +new Date() - this.startTime;
			var startVal = this.props[prop]['startVal'];
			var result = easing(currentTime, startVal, this.props[prop]['endVal'] -startVal, this.duration);
			this.obj[prop] = result;
		}
	};

	var square1 = new Square();
	var targetX = width - square1.size;

	var square1tween = new Tween(square1, { x: targetX,	y: 100, opacity: 1 }, 3000, 'easeOutBounce');

	function animate() {
		c.clearRect(0, 0, width, height);

		// Ease
		// square1.x += (targetX - square1.x) * ease;

		square1tween.update()
		square1.draw();

		if (square1.x < targetX) {
			requestAnimationFrame(animate);
		}
	}

	animate();

}());