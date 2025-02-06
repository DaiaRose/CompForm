
let recentValue = null;

let deck = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180];
const buckets = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; // 18 buckets
let position = 0;


function valueFromDeck() {
  let v = deck[position];
  position++;
  if (position > deck.length) {
    deck = shuffle(deck);
    v = deck[0];
    position = 0;
  }
  return v;
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  deck = shuffle(deck);
  frameRate(5);
}

function draw() {
  var r = random(100);

  if (r < 20) {
    flash();
  } else if (r < 40) {
    tri();
  } else {
    dot();
  }
}

function dot() {
  // pick a number
  let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'pink', 'black', 'white', 'gray', 'brown', 'purple', 'cyan', 'magenta', 'lime', 'teal', 'lavender']; 
  let m = windowWidth
  let n = windowHeight

   for(i=0; i< 50; i++){
      let c = random(colors);
      colorNow= colors.indexOf(c);
      buckets[colorNow]++;

      fill(c);
      translate(random(-m,m), random(-n,n));
      circle(0,0,12);
  }
}

function tri() {
  let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'pink', 'black', 'white', 'gray', 'brown', 'purple', 'cyan', 'magenta', 'lime', 'teal', 'lavender']; 
  let m = windowWidth
  let n = windowHeight
  recentValue = valueFromDeck();

  for(i=0; i< 50; i++){
    let c = random(colors);
    colorNow= colors.indexOf(c);
    buckets[colorNow]++;

    fill(c);
    translate(random(-m,m), random(-n,n));
    rotate(degrees(recentValue));
    triangle(10, 0, 20, 30, 30, 30);
  }
}

function flash() {
  let mostColor = max(buckets);
  let mostColorIndex = buckets.indexOf(mostColor);
  let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'pink', 'black', 'white', 'gray', 'brown', 'purple', 'cyan', 'magenta', 'lime', 'teal', 'lavender'];

  background(colors[mostColorIndex]);
  console.log(buckets);
}