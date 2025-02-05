let img;
let paths = []; // Store completed strokes
let showImage = true;
let button;
let currentPath = []; // Store the path currently being drawn

function preload() {
  img = loadImage("AnniAlbers.png"); 
}

function setup() {
  createCanvas(600, 700);
  frameRate(30); // High frame rate for smooth drawing

  // Create a button to toggle image visibility
  button = createButton("Toggle Image");
  button.position(10, 10);
  button.mousePressed(() => {
    showImage = !showImage;
  });
}

function draw() {
  if (showImage) {
    background(251, 109, 39);
    image(img, 0, 0, width, height); // Draw image as background
  } else {
    background(251, 109, 39); 
  }

  // Draw all paths in order (new strokes will appear over old ones)
  for (let path of paths) {
    drawPath(path);
  }

  // Draw the current path while the user is drawing
  drawPath(currentPath);
}

// Function to draw a single path (ensuring proper layering)
function drawPath(path) {
  if (path.length < 2) return; 

  noFill();

  // Draw the **thick white stroke first**, covering anything below
  stroke('rgb(227,226,221)');
  strokeWeight(20);
  beginShape();
  for (let p of path) {
    curveVertex(p.x, p.y);
  }
  endShape();

  // **Now draw the black details ON TOP of the white stroke**
  stroke('rgb(51,48,46)');
  strokeWeight(3);

  beginShape();
  for (let p of path) {
    curveVertex(p.x + 2, p.y + 1);
  }
  endShape();

  beginShape();
  for (let p of path) {
    curveVertex(p.x + 6, p.y + 6);
  }
  endShape();

  beginShape();
  for (let p of path) {
    curveVertex(p.x - 5, p.y - 5);
  }
  endShape();
}

// Store the current drawing stroke
function mouseDragged() {
  currentPath.push({ x: mouseX, y: mouseY });
}

// Save the stroke when the mouse is released and start a new one
function mouseReleased() {
  if (currentPath.length > 0) {
    paths.push([...currentPath]); // Store the completed stroke
    currentPath = []; // Start a new stroke
  }
}


