(function() {

var camera, scene, renderer;
var geometry, material, mesh;
var cubes = [];
var group = new THREE.Object3D();

var init = function () {
	renderer = new THREE.CanvasRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );

	camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

	camera.position.z = 500;
	scene = new THREE.Scene();
	createCubes(4);
};


function createCubes(cubeCount) {
	var cubeSize = getScreenWidth() * 0.05;
	var cubePadding = cubeSize * 0.9;
	for (var i=0; i<cubeCount; i++) {
		for (var j=0; j<cubeCount; j++) {
			var geometry = new THREE.CubeGeometry( cubeSize, cubeSize, cubeSize );
			var material = new THREE.MeshBasicMaterial( { color: 0x000000, wireframe: true, wireframeLinewidth: 2 } );
			var x = ( (i * cubePadding) + i * cubeSize);
			var y = - ( (j* cubePadding) + j * cubeSize);
			var mesh = new THREE.Mesh( geometry, material );
			mesh.position.x =  x;
			mesh.position.y = y ;
			cubes.push(mesh);
			group.add(mesh);
		}
	}
	group.position.x = -100;
	group.position.y = 100;
	scene.add( group );
}

function getScreenWidth() {
	return window.innerWidth;
}

var iterator = 0;

var animate = function () {
	iterator++;
	for (var i=0; i<cubes.length; i++) {
		var cube = cubes[i];
		cube.rotation.y = Date.now() * 0.0002;
		var z = Math.sin(i + iterator) - Math.cos(i + iterator);
		cube.position.z =  z;
	}

	renderer.render( scene, camera );
	requestAnimationFrame( animate );
};



function start() {
	init();
	animate();
}

window.onload = start;

}());