
function setup() {
  createCanvas(600, 600);
  background(220,80,60);
  frameRate(2);
}

function draw() {
  background(220,80,60);
  stroke('#fae3cf');
  strokeWeight(3);

  r = random(30, 80);
  m = random(50, 80);
  n = random(30, 100);

  if (mouseIsPressed === true) {
    fill('#6734eb'); //purple
  } else {
    fill('#fae3cf');
  }
  
  if (mouseX < 100) {
    background('#6734eb');//purple
  }
  else {
    background(220,80,60); //orange
  }

  //circles drawn by mouse position, random radius
  circle(mouseX, mouseY, r);
  circle(mouseX-50, 100, m);
  circle(mouseY+30, mouseX+30, n);
  circle(mouseX+130, mouseY/3, r);
  circle(mouseY/2, mouseX+100, n);
  circle(440, mouseY+20, m);
  circle(mouseX, mouseY/2 + 20, r);
}
