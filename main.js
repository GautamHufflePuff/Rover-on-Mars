canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
images_array = [
  "mars.jpg",
  "Mars 1.jpg",
  "Mars 2.jpg",
  "Mars 3.jpg",
  "Mars 4.jpg",
];
random_number = Math.floor(Math.random() * 5);
console.log(random_number);
rover_width = 100;
rover_height = 90;
background_image = images_array[random_number];
rover_image = "rover.png";
rover_x = 10;
rover_y = 10;
function add() {
  background_imgTag = new Image(); //defining a variable with a new image
  background_imgTag.onload = uploadBackground; // setting a function, onloading this variable
  background_imgTag.src = background_image; // load image

  rover_imgTag = new Image(); //defining a variable with a new image
  rover_imgTag.onload = uploadrover; // setting a function, onloading this variable
  rover_imgTag.src = rover_image; // load image
}

function uploadBackground() {
  ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
  ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
  keyPressed = e.keyCode;
  console.log(keyPressed);
  if (keyPressed == "38") {
    up();
    console.log("up");
  }
  if (keyPressed == "40") {
    down();
    console.log("down");
  }
  if (keyPressed == "37") {
    left();
    console.log("left");
  }
  if (keyPressed == "39") {
    right();
    console.log("right");
  }
}
function up() {
  if (rover_y >= 0) {
    rover_y = rover_y - 10;
    console.log(
      "When Up Arrow Key is pressed, X= " + rover_x + " | y = " + rover_y
    );
    uploadBackground();
    uploadrover();
  }
}
function down() {
  if (rover_y <= 500) {
    rover_y = rover_y + 10;
    console.log(
      "When Down Arrow Key is pressed, X= " + rover_x + " | y = " + rover_y
    );
    uploadBackground();
    uploadrover();
  }
}
function left() {
  if (rover_x >= 0) {
    rover_x = rover_x - 10;
    console.log(
      "When Left Arrow Key is pressed, X= " + rover_x + " | y = " + rover_y
    );
    uploadBackground();
    uploadrover();
  }
}
function right() {
  if (rover_x <= 700) {
    rover_x = rover_x + 10;
    console.log(
      "When Right Arrow Key is pressed, X= " + rover_x + " | y = " + rover_y
    );
    uploadBackground();
    uploadrover();
  }
}
