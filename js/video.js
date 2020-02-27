var video;
var volume;

function getVid(){
	video = document.querySelector("#myVideo");
}

function playVid() {
	video.play();
	console.log("Play Video");
	console.log(video)
	volume=document.querySelector("#volume")
	console.log(volume);
	volume.innerHTML = (video.volume * 100) + "%"; //returns number 1-10
}

function pauseVid() {
	video.pause();
	console.log("Pause Video");
}

function decreaseSpeed() {
		video.playbackRate -=.1
  	console.log("Speed is "+ video.playbackRate);
}

function increaseSpeed() {
	video.playbackRate +=.1
	console.log("Speed is "+ video.playbackRate);
}

function skipAhead() {
	if (video.currentTime + 60 < video.duration){
			video.currentTime = video.currentTime + 60;
	}
	else{
		video.currentTime = 0;
		video.playbackRate = 1;
		playVid();
	}
	console.log("Current location is " + video.currentTime);
}

function mute() {
	console.log(video.muted)
	if(video.muted){
		video.muted=false
				console.log("Changing to Unmuted");
				button = document.querySelector("#mute")
				button.innerHTML = "Mute"
		}
		else{
				video.muted = true
      	console.log("Changing to Muted");
				button = document.querySelector("#mute")
				button.innerHTML = "Unmute"
			}
			var button = document.querySelector("#mute");


}

function changeVolume() {
	let slider = document.querySelector("#volumeSlider");
	console.log(slider.value);
	video.volume = slider.value/100;
	console.log("Volume is " + video.volume);
	volume.innerHTML = (video.volume * 100) + "%";
}


function gray() {
	video.className="grayscale"
	console.log("In grayscale")
}

function color() {
	video.className = !"grayscale"
	console.log("In color")
}
