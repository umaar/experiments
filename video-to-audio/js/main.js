(function() {

	function startRecord() {
		this.record();
	}

	function exportReady(blob) {
		Recorder.forceDownload(blob);
		this.stop();
		this.clear();
	}

	function stopRecord() {
		this.exportWAV(exportReady.bind(this));
	}

	function attachVideoEvents(video, recorder) {
		video.addEventListener('play', startRecord.bind(recorder));
		video.addEventListener('pause', stopRecord.bind(recorder));
	}

	function initRecorder(video) {
		var context = new webkitAudioContext();
		var mediaSourceNode = context.createMediaElementSource(video);
		var analyserNode = context.createAnalyser();
		mediaSourceNode.connect(analyserNode);
		analyserNode.connect(context.destination);
		return new Recorder(analyserNode, {
			workerPath: 'js/recorderWorker.js'
		});
	}

	function videoToAudio() {
		var video = document.querySelector('video');
		var recorder = initRecorder(video);
		attachVideoEvents(video, recorder);
	}

	function autorun() {
		videoToAudio();
	}

	if (window.addEventListener) window.addEventListener("load", autorun, false);

}());