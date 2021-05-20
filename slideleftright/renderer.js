// references to HTML elements
var knob = document.querySelector(".circle");
var volumeDisplay = document.getElementById("volume-display");
var musicPlayer = document.getElementById("music-player");

// check the state of the gesture every 20ms
setInterval(checkGesture, 20);

// holds the most recently sampled gesture value
var currGestureValue = -1;

// function will be called at set intervals to check the gesture state
function checkGesture() {
  // if a gesture is occuring, sample gesture parameter values
  if (gestureOccuring) {
    if (currGestureValue != xValue) {
      currGestureValue = xValue;
      if (currGestureValue <= 50) {
        setVolume(0);
      } else if (currGestureValue >= 250) {
        setVolume(100);
      } else {
        let volume = (currGestureValue - 50) / 2; //convert to a percentage
        setVolume(volume);
      }
    }
  }
}

// this function handles volume setting
// translates the desired volume into the actual pixel placement of the slider
function setVolume(volume) {
  volume = volume / 100;
  musicPlayer.volume = volume;
  volumeDisplay = volume;

  //set knob position
  //slide total length is 295px
  //volume/100 * 295 will produce the offset of knob

  //get bounding box pixel position
  var slider = document.getElementById("slider-bar");
  imgBoundingBox = slider.getBoundingClientRect();
  var leftSlider = imgBoundingBox.left + 250;
  var rightSlider = imgBoundingBox.right + 500;
  console.log(imgBoundingBox.left + 500);
  knob.style.left = volume * 295 + leftSlider + "px";
  // knob.style.left = pix + (volume / 100) * 295 + "px";
}
