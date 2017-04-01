function setup() {
    createCanvas(windowWidth,windowHeight);
    frameRate(60);
}


function draw() {
  noStroke()
  fill(random(255),random(255),random(255))
  ellipse(pmouseX,pmouseY,90,90);
}

function mouseClicked() {
  clear();
}


  
