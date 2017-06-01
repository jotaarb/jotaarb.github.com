window.onload = function() {

	// Video
	var video = document.getElementById("video");

	// Buttons
	//var playButton = document.getElementById("play-pause");
	var muteButton = document.getElementById("mute");
	//var fullScreenButton = document.getElementById("full-screen");

	// Sliders
	//var seekBar = document.getElementById("seek-bar");
	//var volumeBar = document.getElementById("volume-bar");


	// Event listener for the play/pause button
	/*
	playButton.addEventListener("click", function() {
		if (video.paused == true) {
			// Play the video
			video.play();

			// Update the button text to 'Pause'
			playButton.innerHTML = "Pause";
		} else {
			// Pause the video
			video.pause();

			// Update the button text to 'Play'
			playButton.innerHTML = "Play";
		}
	});
	*/

	//Inicializamos en silencio
	video.muted = true;
	muteButton.classList.add("fa-volume-off");
	
	// Detectamos cuando nos pulsan en el boton muteButton
	// Event listener for the mute button
	muteButton.addEventListener("click", function() {
		if (video.muted == false) {	// Si esta en silencio, ponemos sonido y cambiamos texto botón
			// Mute the video
			video.muted = true;

			// Update the button text
			muteButton.classList.remove("fa-volume-up");
			muteButton.classList.add("fa-volume-off");
			
		} else { // Si está sonando, quitamos sonido y cambiamos texto botón 
			// Unmute the video
			video.muted = false;

			// Update the button text
			muteButton.classList.remove("fa-volume-off");
			muteButton.classList.add("fa-volume-up");
		}
	});


	// Event listener for the full-screen button
	/*
	fullScreenButton.addEventListener("click", function() {
		if (video.requestFullscreen) {
			video.requestFullscreen();
		} else if (video.mozRequestFullScreen) {
			video.mozRequestFullScreen(); // Firefox
		} else if (video.webkitRequestFullscreen) {
			video.webkitRequestFullscreen(); // Chrome and Safari
		}
	});
	

	// Event listener for the seek bar
	seekBar.addEventListener("change", function() {
		// Calculate the new time
		var time = video.duration * (seekBar.value / 100);

		// Update the video time
		video.currentTime = time;
	});

	
	// Update the seek bar as the video plays
	video.addEventListener("timeupdate", function() {
		// Calculate the slider value
		var value = (100 / video.duration) * video.currentTime;

		// Update the slider value
		seekBar.value = value;
	});

	// Pause the video when the seek handle is being dragged
	seekBar.addEventListener("mousedown", function() {
		video.pause();
	});

	// Play the video when the seek handle is dropped
	seekBar.addEventListener("mouseup", function() {
		video.play();
	});

	// Event listener for the volume bar
	volumeBar.addEventListener("change", function() {
		// Update the video volume
		video.volume = volumeBar.value;
	});
	*/
}