let sq; // Square size

function setup() {
  createCanvas(600, 600);
  frameRate(8); 
  sq = 100; // Square size

}

function draw() {
  background(244, 225, 133); // Light yellow background
  
  for (let y = 0; y < 6; y++) {
    for (let x = 0; x < 6; x++) {
      fill(244, 225, 133);
      rect(x * sq, y * sq, sq, sq);

      // Add moving dot lines
      dotLines(x * sq, y * sq, sq);
    }
  }
  scanlines();
}

// Function to draw moving dot lines inside squares
function dotLines(x, y, sq) {
  stroke(1, 176, 210); // bright blue stroke
  strokeWeight(8);
  
  for (let i = 0; i < sq; i += 2) { // Dotted lines
    if (random() > 0.5) {
      point(x + i, y + (frameCount % sq)); // Vertical movement effect
    }
    if (random() > 0.5) {
      point(x + (frameCount % sq), y + i); // Horizontal movement effect
    }
  }
}

// Function to create dotted scanlines with flickering points
function scanlines() {
  for (let y = 0; y < height; y += 4) { // Scanline spacing
    for (let x = 0; x < width; x += 1) { // Break scanline into dots
      let flicker = random() > 0.5 ? color(1, 176, 210) : color(244, 225, 133); // Two flickering colors
      stroke(flicker);
      strokeWeight(1.5);
      point(x, y); // Draw flickering dot
    }
  }
}


