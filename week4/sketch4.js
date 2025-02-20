//ORIGINAL CODE BY https://sketches2022spring.compform.net/users/QREfAG7Giw9TjGXqE

var w = 100; //controlled by density in tweakpane
var h = 100; //has slight random variation
var d = 5; //cc distance. random each frame

const params = {
  density: 200,
  speed: 2.5,
  stripyness: 0.5,
  color1: "#FFE5B1",
  color2: "#0E1F3F",
};

const pane = new Tweakpane.Pane();
pane.addInput(params, "density", {
  step: 20,
  min: 140,
  max: 260,
});
pane.addInput(params, "speed", {
  step: 0.5,
  min: 0.5,
  max: 5,
});
pane.addInput(params, "stripyness", {
  step: 0.1,
  min: .2,
  max: 1,
});
pane.addInput(params, "color1", {
  picker: "inline",
  expanded: true,
});
pane.addInput(params, "color2", {
  picker: "inline",
  expanded: true,
});

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  clear();
  background(255);
  frameRate(params.speed);
  noStroke();

  w = params.density;
  h = w + random([-5, 0, 5]);
  d = random([10, 12, 14, 16, 18, 20]);

  for (let j = 0; j < height + h; j += h / 4) {
    push();
    if (((j / h) * 4) % 2 == 0) {
      translate(0, j);
      iHorizontal();
    } else {
      translate(w / 2, j);
      iHorizontal();
    }
    pop();
  }
}

// a horizontal line of circles
function iHorizontal() {
  for (let i = 0; i < width + w; i += w) {
    cCircle(i + random(6), 0 , w, h, d);
  }
}

// concentricCircle
function cCircle(a, b, w, h, d) {
  // a&b for translate, w&h for ellipse, d for circle distance
  push();
  translate(a, b);
  color = [params.color1, params.color2];
  s= params.stripyness;
  
  color1 = random(color);

    if (random() < 1-(s-.1)) {
        color2 = color1; //not stripy
    }
    else
        color2 = random(color);
   
  for (let i = 0; (d * i < w) & (d * 1 < h); i++) { //not exceeding the circle width and height
    if (i % 2 == 0) {
      fill(color1);
      ellipse(0, 0, w - d * i, h - d * i);
    } else {
      fill(color2);
      ellipse(0, 0, w - d * i, h - d * i);
    }
  }
  pop();
}

