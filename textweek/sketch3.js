let words = ["Hello", "p5.js", "Interactive", "Draggable", "Visualization", "woahhh"];
let rectangles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  let startX = 100;
  let startY = 100;
  let spacing = 60; // Vertical spacing between rectangles

  // Generate rectangles from the words array
  for (let i = 0; i < words.length; i++) {
    rectangles.push(new DraggableRect(startX, startY + i * spacing, words[i]));
  }
}

function draw() {
  background(240);

  for (let rect of rectangles) {
    rect.update();
    rect.show();
  }
}

function mousePressed() {
  for (let rect of rectangles) {
    rect.pressed();
  }
}

function mouseReleased() {
  for (let rect of rectangles) {
    rect.released();
  }
}

class DraggableRect {
    constructor(x, y, label) {
      this.x = x;
      this.y = y;
      this.label = label;
      this.h = 40; // Fixed height
      this.padding = 15; // Padding around text
  
      // Calculate width dynamically based on text size
      textSize(16);
      this.w = textWidth(this.label) + this.padding * 2;
      
      this.dragging = false;
      this.offsetX = 0;
      this.offsetY = 0;
    }
  
    update() {
      if (this.dragging) {
        this.x = mouseX + this.offsetX;
        this.y = mouseY + this.offsetY;
      }
    }
  
    show() {
      noStroke();
      fill(this.dragging ? 200 : 255);
      rect(this.x, this.y, this.w, this.h, 5); // Draw main rectangle
  
      // Thin stroke for top and left
      stroke(0);
      strokeWeight(1);
      line(this.x, this.y, this.x + this.w, this.y); // Top border
      line(this.x, this.y, this.x, this.y + this.h); // Left border
  
      // Thicker stroke for bottom and right
      strokeWeight(2.5);
      line(this.x+1, this.y + this.h-1, this.x + this.w, this.y + this.h-1); // Bottom border
      line(this.x + this.w, this.y+1, this.x + this.w, this.y + this.h-2); // Right border
  
      // Draw text
      noStroke();
      fill(0);
      textSize(16);
      textAlign(CENTER, CENTER);
      text(this.label, this.x + this.w / 2, this.y + this.h / 2);
    }
  
    pressed() {
      if (
        mouseX > this.x &&
        mouseX < this.x + this.w &&
        mouseY > this.y &&
        mouseY < this.y + this.h
      ) {
        this.dragging = true;
        this.offsetX = this.x - mouseX;
        this.offsetY = this.y - mouseY;
      }
    }
  
    released() {
      this.dragging = false;
    }
  }
  