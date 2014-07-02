(function main(global) {

	var width = 300;
	var height = 400;
	var ctx;
	var radius = 20;
	var x, y;
	var vx = 4;
	var vy = 0;
	var g = 0.8;


	function drawCricle() {
		ctx.beginPath();
		ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
		ctx.fillStyle = 'green';
		ctx.fill();
		ctx.lineWidth = 2;
		ctx.strokeStyle = 'brown';
		ctx.stroke();
	}

	function tick() {
		x += vx;
		vy += g;
		y += vy;

		if (y > (height - radius)) {
			y = (height - radius);
			vy *= -0.8;
		}

		if (x > (width + radius)) {
			x = 0 - radius;
		}

		ctx.clearRect(0,0,300,400);
		drawCricle();
		requestAnimationFrame(tick);
	}

	function start() {
		var canvas = document.querySelector('#canvas');
		canvas.width = width;
		canvas.height = height;
		ctx = canvas.getContext('2d');
		x = (width / 2);
		y = radius * 2;
		requestAnimationFrame(tick);
	}

	if (document.addEventListener) {
		document.addEventListener("DOMContentLoaded", start, false);
	}

}());