
//DOT CHALLENGE

// require https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.js

// Dot Challenge Starting Point

function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(50);
  
    noStroke();
    ellipseMode(CENTER);
  
    let noiseFrequency = .5;
    let colors = ['#FF0000','#FF6300', '#FFAC00', '#FFF900','#80ff00' , '#00FF15','#00FFDB', '#00E9FF', '#0700FF', '#3700FF', '#7B00FF', '#9800FF']
    
    for (let i = 0; i < 100; i++) {
      // these points are not scattered in the same way
      // how can you make the arrangement match the challenge?
      let x = noise(i * noiseFrequency, 0) * width;
      let y = noise(i * noiseFrequency, 100) * height;
  
      // the diameter shouldn't always be 10, it needs to vary
      let diameter = Math.round(noise(i * 1,10)*12)+5; //output 5..17
  
      // the colors also need to change
      // what colorMode would be easiest to work with?
      let col = colors[diameter - 5];
      fill(col);
  
      ellipse(x, y, diameter, diameter);
    }
  
    noLoop();
  }


  //BETTER (referenced katherines) WITH HUE VALUES and color flip


  function draw() {
    background(20);
  
    noStroke();
    ellipseMode(CENTER);
    
    colorMode(HSB, 360, 100, 100);
  
    let noiseFrequency = .5;
  
    for (let i = 0; i < 100; i++) {
  
      let x = noise(i * noiseFrequency, 0) * width;
      let y = noise(i * noiseFrequency, 100) * height;
  
      let diameter = Math.round(noise(i * 1,10)*12)+5; //output 5..17
  
      if (dist(mouseX, mouseY, x, y) < diameter / 2){
          let hueVal = map(diameter, 5, 17,340,0)
          fill(hueVal, 100, 100);
          diameter=diameter+15
          }
      else {
          let hueVal = map(diameter, 5, 17,0,340)
          fill(hueVal, 100, 100);
      }
      ellipse(x, y, diameter, diameter);
    }
    
  }
  


  //very interesting play

// require https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.js

let startX = 0;
let startY = 150;
let endX = 460;
let endY = 150;


function setup() {
  createCanvas(500, 300);
  
  colorMode(HSB, 360, 100, 100);
}

function draw() {
  background(0);
  ellipseMode(CENTER);

  let amplitude = 60;
  let frequency = 50;
  let speed = 20 * millis()*0.0001;

  noiseDetail(1, 0.5);

  fill(255);
  noStroke();

  for (i = 0; i < 1; i += 0.02) {
    let x = lerp(startX, endX, i);
    let y = lerp(startY, endY, i);

    // hint: drive offsetX and offsetY with noise() instead of random()
    let offsetX = noise(i * frequency + speed) * amplitude * 6;
    let offsetY = noise(i * frequency + speed) * amplitude * 6;

    fill(i*50,100,100);
    ellipse(x + offsetX, y + offsetY, 10, 10);

  }
  
  for (i = 0; i < 1; i += 0.02) {
    let x = lerp(startX, endX, i);
    let y = lerp(startY, endY, i);

    // hint: drive offsetX and offsetY with noise() instead of random()
    let offsetX = noise(i * frequency + speed) * amplitude * 6;
    let offsetY = noise(i * frequency + speed) * amplitude * -6;
    
    fill(i*50+150,100,100);
    ellipse(x + offsetX, y + offsetY, 10, 10);
  }
}


//fairly effective line

// require https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.js


// let amplitude_slider;

// let startX = 50;
// let startY = 250;
// let endX = 450;
// let endY = 50;

// let frequency_slider;

// let speed_slider;


function setup() {
  createCanvas(500, 300);
  
  createP("Frequency");
  frequency_slider = createSlider(0, 100, 50);

  createP("Amplitude");
  amplitude_slider = createSlider(0, 100, 50);
  
  createP("Time Speed");
  speed_slider = createSlider(0, 100, 50);
}

function draw() {
  background(50);
  ellipseMode(CENTER);

  let amplitude = amplitude_slider.value()/100;
  let frequency = frequency_slider.value();
  let speed = speed_slider.value() * millis()*0.0001;

  noiseDetail(1, 0.5);

  fill(255);
  noStroke();

  // study this loop. do you understand how the line of ellipses is created?
  for (i = 0; i < 1; i += 0.02) {
    let x = lerp(startX, endX, i);
    let y = lerp(startY, endY, i);

    // hint: drive offsetX and offsetY with noise() instead of random()
    let offsetX = noise(i * frequency + speed) * amplitude * 80;
    let offsetY = noise(i * frequency + speed) * amplitude * 80;

    ellipse(x + offsetX, y + offsetY, 10, 10);
  }
}