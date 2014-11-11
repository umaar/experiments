(function(doc) {

	var canvas, width, height, p1;

	function createCanvas() {
		var canvasElm = document.createElement('canvas');
		canvasElm.width = canvasElm.height = width;
		doc.body.appendChild(canvasElm);
		return canvasElm.getContext('2d');
	}

	function animate() {
		canvas.fillStyle = 'black';
		canvas.fillRect(0, 0, width, height);
		p1.draw();
		requestAnimationFrame(animate);
	}

	function Particle() {
		this.x = width/2;
		this.vx = 10;
		this.y = height/2;
		this.vy = -10;
		this.size = 5;
	}

	Particle.prototype.draw = function() {
		canvas.fillStyle = 'white';
		this.x += this.vx * 0.05;
		this.y += this.vy * 0.05;
		this.vy += 0.5;
		canvas.fillRect(this.x, this.y, this.size, this.size);
	};

	function start() {
		width = height = 100;
		canvas = createCanvas();
		p1 = new Particle();
		requestAnimationFrame(animate);
	}

	if (document.addEventListener) {
		document.addEventListener("DOMContentLoaded", start, false);
	}

}(document));