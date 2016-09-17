
var mr_trump; //this is global variable
var ms_hillary;

function preload() {
  mr_trump = loadImage("./img-politics/stacked-a.png");
  ms_hillary = loadImage("./img-politics/stacked-b.png");
}

function setup() {
  canvas_context=createCanvas(900,300);
  background(255,200,0);
  frameRate(120);
}

function draw(){
  //keep on keeping on = infinite loop
  var i = frameCount;
  if (mouseIsPressed) {
    image(mr_trump,i%900,0,106,300+mouseY);
  }
  else {
    image(ms_hillary,i%900,0,106,300+mouseY);
  }
}

function mouseClicked() {
}

function keyPressed() {
  if (keyCode === 83) {
    save(canvas_context, "trillary.jpg")
  } else if (keyCode === RIGHT_ARROW) {
    console.log("Key: Right Arrow");
  }
}
