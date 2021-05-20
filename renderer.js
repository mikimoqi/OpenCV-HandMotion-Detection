// references to HTML elements
var muteIndicator = document.getElementById("mute-indicator");
var musicPlayer = document.getElementById("music-player");

// check the state of the gesture every 20ms
setInterval(checkGesture, 20);

// update when we react to the gesture for the first time
var alreadyResponded = false;

// function will be called at set intervals to check the gesture state
function checkGesture() {
  if (!alreadyResponded) {
    // we haven't encountered a gesture yet
    if (gestureOccuring) {
      // a gesture has just occured for the first time
      // call method to change the state
      // ...

      muteOrUnmute();

      // update state variable to say we have responded to current gesture
      alreadyResponded = true;
    }
  } else if (!gestureOccuring) {
    // we already responded and now gesture has ended
    // reset to say we haven't yet encountered a new gesture
    alreadyResponded = false;
  }
}

// this function handles volume setting
// mutes or unmutes the music and displays the corresponding graphic
function muteOrUnmute() {
  if (musicPlayer.muted == true) {
    muteIndicator.style.display = "none";
    musicPlayer.muted = false;
  } else {
    muteIndicator.style.display = "block";
    musicPlayer.muted = true;
  }
}
