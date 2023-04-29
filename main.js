// Get the current date and time
var now = new Date();

// Set the opening hours for Njoy Games & Comics
var openTime = new Date();
openTime.setHours(12, 0, 0); // 12:00 PM
var closeTime = new Date();
closeTime.setHours(17, 30, 0); // 5:30 PM

// Check if the current time is between the opening and closing times
if (now.getTime() >= openTime.getTime() && now.getTime() <= closeTime.getTime()) {
  document.getElementById("status").innerHTML = "Njoy Games & Comics is currently open!";
}

else {
  document.getElementById("status").innerHTML = "Njoy Games & Comics is currently closed.";
}

//this is for the pokemon theme song
var audio = document.getElementById("audio");

function playAudio() {
  audio.ariaCurrentTime = 0;
  audio.play();
}

function pauseAudio() {
  audio.pause();
}

//this is coin noise
var mario = document.getElementById("mario");

function mplayAudio() {
  mario.ariaCurrentTime = 0;
  mario.play();
}

function mpauseAudio() {
  mario.pause();
}

// enlarge firesale pics
function enlargeImage(image) {
  var enlargedImage = document.createElement("div");
  var newImage = document.createElement("img");
  newImage.src = image.src;
  enlargedImage.appendChild(newImage);

  enlargedImage.className = "enlarged";
  document.body.appendChild(enlargedImage);

  //allows user to click out of enlarge pics
  enlargedImage.addEventListener('click', function (event) {
    if (event.target === enlargedImage) {
      document.body.removeChild(enlargedImage);

    }
  });
}