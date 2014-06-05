(function main() {

	function startSocket() {
		var socket = io('http://localhost:9997');
		socket.on('update', function(data) {
			console.log(data);
		});
	}

	startSocket();

}());