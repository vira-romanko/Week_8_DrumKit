(() => {
	//hook up the Js file
	console.log("fired");


	function playDrumSound(e) {
		// e in round brackets is the event object ->
		// gets generated with every enent and passes some data through
		//debugger;
		// try selecting the matching audio element
		let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
		// the return keyword stops 


		if(!audio) { return; }

		// play the audio tag
		audio.currentTime = 0;
		audio.play();
	}

	window.addEventListener("keydown", playDrumSound);
})();