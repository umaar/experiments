(function(win, doc) {

	var canvasElm, canvas, width, height, trigger = false;
	var particles = [];
	var particleAmount = 10;
	var defaultregenerationThreshold = 0.97;
	var regenerationThreshold = defaultregenerationThreshold;
	var respawnAmount = 2;

	function createCanvas() {
		canvasElm = document.createElement('canvas');
		canvasElm.width = canvasElm.height = width;
		doc.body.appendChild(canvasElm);
		return canvasElm.getContext('2d');
	}

	function getRandom() {
		return Math.random();
	}

	function random(min, max) {
		return getRandom() * (max-min) + min;
	}

	function animate() {
		canvas.clearRect(0, 0, width, height);
		canvas.fillStyle = 'black';
		canvas.fillRect(0, 0, width, height);
		canvas.globalCompositeOperation = 'lighter';
		particles.forEach(function(particle) {
			particle.draw();
		});

		if (getRandom() > regenerationThreshold) {
			createparticles(respawnAmount);
		}

		requestAnimationFrame(animate);
	}

	function Particle() {
		this.x = width/2;
		this.vx = random(-width, width);
		this.y = height * 0.4;
		this.vy = random( -(height * 0.05) ,1);
		this.size = random(width * 0.02, width * 0.03);
		this.colour = random(0, 360);
		this.ttl = 500;
		this.bounceFactor = random(0.4, 0.7);
		particles.push(this);
	}

	Particle.prototype.draw = function() {
		canvas.fillStyle = 'hsla('+this.colour+', 50%, 50%, 0.8)';
		this.x += this.vx * 0.005;
		this.y += this.vy * 0.2;
		this.vy += 0.3;

		if (this.y + this.size > height) {
			this.size *= 0.95;
			this.y = height - this.size;
			this.vy = -this.vy * this.bounceFactor;
		}

		canvas.beginPath();
		canvas.arc(this.x, this.y, this.size, 0, 2 * Math.PI, false);
		canvas.fill();

		if (this.ttl-- < 0 || this.size < 0.1) {
			particles.splice(particles.indexOf(this), 1);
		}
	};

	function createparticles(count) {
		for (var i=0; i<count; i++) {
			new Particle();
		}
	}

	function bindEvents() {
		canvasElm.addEventListener('mouseover', function(e) {
			regenerationThreshold = 0;
		});

		canvasElm.addEventListener('mouseout', function(e) {
			defaultregenerationThreshold = 0.97;
		});
	}

	function start() {
		width = height = Math.min(win.innerWidth, win.innerHeight) / 1.3;
		canvas = createCanvas();
		createparticles(particleAmount);
		bindEvents();
		requestAnimationFrame(animate);
	}

	if (document.addEventListener) {
		document.addEventListener("DOMContentLoaded", start, false);
	}

}(window, document));