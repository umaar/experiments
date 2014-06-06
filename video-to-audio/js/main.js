(function() {

	function extractAudio() {
		var context = new webkitAudioContext();
		var video = document.querySelector('video');
		var mediaSourceNode = context.createMediaElementSource(video);
		var analyserNode = context.createAnalyser();
		mediaSourceNode.connect(analyserNode);
		analyserNode.connect(context.destination);

		var rec = new Recorder( analyserNode, {
			workerPath: 'js/recorderWorker.js'
		});

		rec.record();

		video.play();
		setTimeout(function delay() {
			rec.exportWAV(function(blob) {
				Recorder.forceDownload(blob);
			});
			rec.stop();
			rec.clear();
		}, 2000);
	}

	function autorun() {
		extractAudio();
	}

	if (window.addEventListener) window.addEventListener("load", autorun, false);

}());