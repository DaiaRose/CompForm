
//pond ripples

// function setup() {
//   createCanvas(600, 600);
//   ellipseMode(CENTER);
//   noStroke();
// }

// function draw() {
//   background(33,63,74);
//   let n;
//   let m;

//   for (let y = 15; y < height-15; y += 10) {
//     for (let x = 15; x < width-15; x += 10) {
    
//       // vary over distance from center
//       n = noise(dist(200, 200, x, y) * .03 +  millis() * -.001);
//       let diameter = n * 35;

//       let opacity = n * 255;
//       fill(77,155,158,opacity);
//       ellipse(x, y, diameter, diameter);

//     }
//   }

//   for (let y = 15; y < height-10; y += 10) {
//     for (let x = 15; x < width-10; x += 10) {
    
//       // vary over distance from center
//       m = noise(dist(400, 400, x, y) * .03 +  millis() * -.001);

//       let diameter = m * 30;

//       let opacity = m * 255;
//       fill(148,177,179,opacity);
//       ellipse(x, y, diameter, diameter);

//     }
//   }
// }



// neon mode
function setup() {
  createCanvas(600, 600);
  ellipseMode(CENTER);
  noStroke();
}

function draw() {
  background(33,63,74);
  let m;

  for (let y = 15; y < height-10; y += 8) {
    for (let x = 15; x < width-10; x += 8) {
    
      // vary over distance from center
      m = noise(dist(400, 400, x, y) * .03 +  millis() * -.01);

      let diameter = m * 30;

      let opacity = m * 255;
      fill(218,107,259,opacity);//neon pink
      ellipse(x, y, diameter, diameter);

    }
  }

  for (let y = 15; y < height-15; y += 8) {
    for (let x = 15; x < width-15; x += 8) {
    
      // vary over distance from center
      m = noise(dist(200, 200, x, y) * .03 +  millis() * .01);
      let diameter = m * 35;

      let opacity = m * 255;
      fill(77,155,158,opacity);//teal
      ellipse(x, y, diameter, diameter);

    }
  }

  for (let y = 15; y < height-15; y += 8) {
    for (let x = 15; x < width-15; x += 8) {
    
      // vary over distance from center
      m = noise(dist(200, 400, x, y) * .03 +  millis() * -.01);
      let diameter = m * 20;

      let opacity = m * 255;
      fill(239,155,58,opacity-70);//neon orange
      ellipse(x, y, diameter, diameter);

    }
  }

  for (let y = 15; y < height-10; y += 8) {
    for (let x = 15; x < width-10; x += 8) {
    
      // vary over distance from center
      m = noise(dist(400, 200, x, y) * .03 +  millis() * .01);
      let diameter = m * 20;

      let opacity = m * 255;
      fill(211,235,89,opacity-90);//neon orange
      ellipse(x, y, diameter, diameter);

    }
  }

}