(function(doc) {

	var canvas, width, height;
	var particles = [];
	var particleAmount = 10;

	function createCanvas() {
		var canvasElm = document.createElement('canvas');
		canvasElm.width = canvasElm.height = width;
		doc.body.appendChild(canvasElm);
		return canvasElm.getContext('2d');
	}

	function random(min,max) {
		return Math.random() * (max-min) + min;
	}

	function animate() {
		canvas.fillStyle = 'black';
		canvas.fillRect(0, 0, width, height);
		particles.forEach(function(particle) {
			particle.draw();
		});
		requestAnimationFrame(animate);
	}

	function Particle() {
		this.x = width/2;
		this.vx = random(-10, 10);
		this.y = height/2;
		this.vy = random(-20, 1);
		this.size = random(5, 10);
		particles.push(this);
	}

	Particle.prototype.draw = function() {
		canvas.fillStyle = 'white';
		this.x += this.vx * 0.05;
		this.y += this.vy * 0.05;
		this.vy += 0.5;
		canvas.beginPath();
		canvas.arc(this.x, this.y, this.size, 0, 2 * Math.PI, false);
		canvas.fill();
	};

	function createparticles(count) {
		for (var i=0; i<count; i++) {
			new Particle();
		}
	}

	function start() {
		width = height = 100;
		canvas = createCanvas();
		createparticles(particleAmount);
		requestAnimationFrame(animate);
	}

	if (document.addEventListener) {
		document.addEventListener("DOMContentLoaded", start, false);
	}

}(document));