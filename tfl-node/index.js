
var stream = require('stream');
var util = require('util');

var request = require("request");
var credentials = require("./credentials");
var username = credentials.username;
var password = credentials.password;
var url = "http://countdown.api.tfl.gov.uk/interfaces/ura/stream_V1";

var options = {
	url: url,
	auth: {
		user: username,
		pass: password,
		sendImmediately: false
	}
};

function handleData(data) {
	data = data.toString().split("\n");
	data.pop();
	data.shift();
	data.forEach(function(item) {
		var arr = item.replace(/\[|\]|"/g, "").split(",");
		if (item.length) {
			var data = {
				type: arr[0],
				place: arr[1],
				bus: arr[2],
				time: arr[3].replace(/(\r\n|\n|\r)/gm,"")
			};
			console.log(data);
		}
	});
}

function StringStream() {
	stream.Stream.call(this);
	this.writable = true;
}

util.inherits(StringStream, stream.Stream);

StringStream.prototype.write = function(data) {
	if (data && data.length) {
		this.emit('data', data);
	}
};

StringStream.prototype.end = function(data) {
	this.emit('end');
};

var stream = new StringStream();

stream.on('data', handleData);

stream.on('end', function() {
	console.log("End");
});

request(options).pipe(stream);
