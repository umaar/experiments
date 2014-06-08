(function main () {

	var game;

	function Game (opts) {
		this.canvas = opts.canvas;
		this.width = this.canvas.width;
		this.height = this.canvas.height;
		this.ctx = this.canvas.getContext('2d');
		this.player = new Player( this.canvas );
		this.bodies = [];
		this.bodies = this.bodies.concat(new Player( this.canvas));
		this.bodies = this.bodies.concat( createInvaders.bind(this) );
	}

	Game.prototype.addBody = function(body) {
		this.bodies = this.bodies.concat(body);
	};

	function createInvaders() {
		for (var i=0; i<15; i++) {
			var x = ((i % 5) * 40) + 5;
			var y = ((i % 3) * 40) + 20;
			game.addBody(new Invader({
				canvas: this.canvas,
				x: x,
				y: y,
				width: this.rect.width,
				height: this.rect.width
			}));
		}
	}

	Game.prototype.start = function() {
		requestAnimationFrame( this.update.bind(this) );
	};

	Game.prototype.update = function() {
		this.ctx.clearRect(0,0,this.width, this.height);
		this.player.update();
		this.bodies.forEach(function forEachBody(body) {
			body.update();
		});
		requestAnimationFrame( this.update.bind(this) );
	};

	function Invader (opts) {
		this.canvas = opts.canvas;
		this.width = this.canvas.width;
		this.height = this.canvas.height;
		this.ctx = this.canvas.getContext('2d');
		this.invaderSize = 20;
		this.rect = {
			width: opts.width,
			height: opts.height,
			x: opts.x,
			y: opts.y
		};

		this.patrolX = 5;
		this.speedX = 1;
	}

	Invader.prototype.update = function() {
		this.draw();
	};

	Invader.prototype.draw = function() {
		var rect = this.rect;
		this.ctx.fillStyle="#F09EB8";
		this.patrolX += this.speedX;

		// (canvas width - invader[last].x) - invader[last].width
		if (this.patrolX >= 120 || this.patrolX <= 0) {
			this.speedX = -this.speedX;
		}

		this.invaders.forEach(function eachInvader(invader, index) {
				this.ctx.fillRect(invader.x += this.speedX, invader.y, rect.width, rect.height);
		}, this);
	};


	function Bullets (canvas) {
		this.canvas = canvas;
		this.width = this.canvas.width;
		this.height = this.canvas.height;
		this.ctx = this.canvas.getContext('2d');
		this.bulletSize = 2;
		this.rect = {
			x: (this.width / 2),
			y: (this.height - 100),
			width: this.bulletSize,
			height: this.bulletSize * 2
		};

		this.bullets = [];
	}

	Bullets.prototype.update = function() {
		this.drawBullets();
	};

	Bullets.prototype.add = function(opts) {
		this.bullets.push({
			x: opts.x,
			y: opts.y,
			width: this.rect.width,
			height: this.rect.height
		});
	};

	Bullets.prototype.drawBullets = function() {
		var rect = this.rect;
		var speed = 6;

		this.bullets.forEach(function eachBullet(bullet, index) {
			if ( (bullet.y + bullet.height) <= (this.canvas.height - this.canvas.height) - 1 ) {
				this.bullets.splice(index, 1);
			} else {
				this.ctx.fillRect( bullet.x, bullet.y -= speed, rect.width, rect.height);
			}
		}, this);
	};

	function Player (canvas) {
		this.canvas = canvas;
		this.width = this.canvas.width;
		this.height = this.canvas.height;
		this.ctx = this.canvas.getContext('2d');
		this.playerSize = 20;
		this.rect = {
			x: (this.width/2) - this.playerSize/2,
			y: (this.height - this.playerSize) - this.playerSize / 2,
			width: this.playerSize,
			height: this.playerSize
		};

		this.bullets = new Bullets( this.canvas );
	}

	Player.prototype.update = function() {
		this.drawPlayer();
		this.bullets.update();
	};

	Player.prototype.drawPlayer = function() {
		var rect = this.rect;
		var speed = 7;

		if ( keys.isPressed(keys.LEFT) ) {
			rect.x -= speed;
		}

		if ( keys.isPressed(keys.RIGHT) ) {
			rect.x += speed;
		}

		//boundary detection
		if (rect.x < (this.canvas.width - this.canvas.width) - 1 ) {
			rect.x = (this.canvas.width - this.canvas.width);
		}

		if (rect.x >= (this.canvas.width - this.rect.width) + 1) {
			rect.x = (this.canvas.width - this.rect.width);
		}

		this.ctx.fillStyle="green";

		this.ctx.fillRect( rect.x, rect.y, rect.width, rect.height);

		if ( keys.isPressed(keys.SPACE) ) {
			this.bullets.add({
				x: (rect.x + rect.width / 2),
				y: rect.y
			});
		}
	};

	var keys = {
		LEFT: 37,
		RIGHT: 39,
		SPACE: 32,
		registerEvents: (function registerEvents(argument) {
			document.addEventListener('keydown', function keyDownListener(e) {
				keys.pressed[e.keyCode] = true;
			});

			document.addEventListener('keyup', function keyDownListener(e) {
				keys.pressed[e.keyCode] = false;
			});
		}()),
		pressed: {},
		isPressed: function(code) {
			return keys.pressed[code];
		}
	};


	function start () {
		game = new Game({
			canvas: document.querySelector('.game-canvas')
		});
		game.start();
	}


	if (document.addEventListener) {
		document.addEventListener("DOMContentLoaded", start, false);
	}

}());