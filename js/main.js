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


		// select the parent div and animate it
		// rty selecting the matching parent div element
		let key = document.querySelector(`div[data-key="${e.keyCode}"]`);
		key.classList.add("playing");
	}

	function removePlayingClass(e) {
		// listen  for a CSS  transition to finish the reste the element
		//by removing the playing class
		//debugger;

		if (e.propertyName !== "transform"){
			return;
		} else{
			console.log("do some stuff here.transition is done");
			e.currentTarget.classList.remove("playing");
		}
	}

	window.addEventListener("keydown", playDrumSound);
	// grab all of the keyboard keys that have the .key class applied
	const keys = Array.from(document.querySelectorAll(".key"));

	//add a transition end to each key 
	keys.forEach(key => key.addEventListener("transitionend", removePlayingClass));
})();