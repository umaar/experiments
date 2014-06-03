
var request = require("request");
var credentials = require("./credentials");
var username = credentials.username;
var password = credentials.password;
var url = "http://countdown.api.tfl.gov.uk/interfaces/ura/stream_V1";

// var request = http.request(options, function handleResponse(response) {
// 	console.log("## Response: \n\n", response.statusCode);

// 	response.setEncoding("utf8");

// 	response.on("data", function onChunk(chunk) {
// 		console.log("### Chunk: \n\n", chunk);
// 	});
// });

// request.on("error", function onError(err) {
// 	console.log("## Error: \n\n", err);
// 	console.log("err.message", err.message)
// });

// request.end();

var options = {
	url: url,
	auth: {
		user: username,
		pass: password,
		sendImmediately: false
	}
};

console.log("making http request");

// request(options, function(error, response, body) {
// 	console.log('what');
// 	console.log(error, response, body);
// });

var s = require('stream').Readable;

s.on("data", function function_name (argument) {
	console.log("data");
});

request(options).pipe(s);