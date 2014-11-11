(function(win, doc) {

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
		this.vx = random(-width, width);
		this.y = height * 0.4;
		this.vy = random( -(height * 0.05) ,1);
		this.size = random(width * 0.009, width * 0.020);
		this.colour = random(0, 360);
		particles.push(this);
	}

	Particle.prototype.draw = function() {
		canvas.fillStyle = 'hsla('+this.colour+', 50%, 50%, 0.4)';
		this.x += this.vx * 0.005;
		this.y += this.vy * 0.2;
		this.vy += 0.3;
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
		width = height = Math.min(win.innerWidth, win.innerHeight) / 2;
		canvas = createCanvas();
		createparticles(particleAmount);
		requestAnimationFrame(animate);
	}

	if (document.addEventListener) {
		document.addEventListener("DOMContentLoaded", start, false);
	}

}(window, document));