//FIND THE MACARONI

var num = 500; // Adjust for density
var noiseScale = 800, noiseStrength = 3;
var particleLength = 80; // How long each arc is

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
  // background(163,201,255);
  background(242, 188, 94);
  noFill();
  stroke(245, 213, 140, 80); //pasta
  strokeWeight(7);

  arc(random(10,windowWidth-10), random(10,windowHeight-10), 30, 30,0, PI + QUARTER_PI, "open", 5);

  for (let i = 0; i < num; i++) {
    drawFlowArc(random(width), random(height));
  }

  let reloadButton = createButton('Retry');
  reloadButton.position(10, 10); 
  reloadButton.mousePressed(() => location.reload());
}

function drawFlowArc(x, y) {
  beginShape();
  for (let j = 0; j < particleLength; j++) {
    let angle = noise(x / noiseScale, y / noiseScale) * TWO_PI * noiseStrength;
    let dir = createVector(cos(angle), sin(angle));

    vertex(x, y); // Draw a point in the curve

    // Move forward along the flow
    x += dir.x * 10;
    y += dir.y * 10;
  }
  endShape();
}

