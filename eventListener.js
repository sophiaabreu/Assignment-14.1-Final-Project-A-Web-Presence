// This function adds the start and stop buttons to the page//
function addButtons() {
    console.log("Adding Buttons!");

    // Create an input element of type button for the start button//
    let inputElementStart = document.createElement("input");
    inputElementStart.setAttribute("type", "button");
    inputElementStart.setAttribute("value", "Start");
    inputElementStart.setAttribute("id", "startButton");
    inputElementStart.setAttribute("onclick", "startButton()");

    // Create an input element of type button for the stop button//
    let inputElementStop = document.createElement("input");
    inputElementStop.setAttribute("type", "button");
    inputElementStop.setAttribute("value", "Stop");
    inputElementStop.setAttribute("id", "stopButton");
    inputElementStop.setAttribute("onclick", "stopButton()");
    inputElementStop.setAttribute("disabled", true);
    
    // Append the start and stop buttons to the paragraph with id 'memeParagraph'//
    let parent = document.getElementById("memeParagraph");
    parent.appendChild(inputElementStart);
    parent.appendChild(inputElementStop);
}

// This function is called when the start button is clicked//
function startButton() {
    console.log("Pressed Start!");
    let inputElementStart = document.getElementById("startButton");
    inputElementStart.setAttribute("disabled", "true");

    let inputElementStop = document.getElementById("stopButton");
    inputElementStop.removeAttribute("disabled");

    let memeImage = document.getElementById("memeImage");
    memeImage.style.animationDuration = "3s";
}

// This function is called when the stop button is clicked//
function stopButton() {
    console.log("Pressed Stop!");
    let inputElementStart = document.getElementById("startButton");
    inputElementStart.removeAttribute("disabled");

    let inputElementStop = document.getElementById("stopButton");
    inputElementStop.setAttribute("disabled", "true");

    let memeImage = document.getElementById("memeImage");
    memeImage.style.animationDuration = "0s";
}

//Audio//

//We are going to adjust the volume a to a 20%//
function adjustVolume() {
    var audio = document.getElementById("backgroundAudio");
    if (audio) {
      // Set volume to 20% (0.0 to 1.0)
      audio.volume = 0.2;
    }
  }

var clicked = false;
//To select between the two audio//
window.addEventListener("click", (event) => {
    if(!clicked){
        let audioSources = ["lofi-chill.mp3", "breeze-soothing.mp3"];

        let audioElements = document.getElementById("backgroundAudio");

        audioElements.src = audioSources[Math.floor(Math.random() * audioSources.length)];

        audioElements.play();
        audioElements.loop = true;
        clicked = true;
    }
});