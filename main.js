status = "";

function setup() {
    canvas = createCanvas(480, 380);
    canvas.center();
    video.hide();
  }

  function start()
{
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Status : Detecting Objects";
  document.getElementById("Id_Of_The_Input_Box").value;
}

function modelLoaded() {
    console.log("Model Loaded!")
    status = true;
}

function draw() {
    image(video, 0, 0, 480, 380);
}