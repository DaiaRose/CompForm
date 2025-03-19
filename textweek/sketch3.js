const jabberwocky =
  "Twas brillig, and the slithy toves Did gyre and gimble in the wabe: All mimsy were the borogoves, And the mome raths outgrabe. Beware the Jabberwock, my son! The jaws that bite, the claws that catch! Beware the Jubjub bird, and shun The frumious Bandersnatch He took his vorpal sword in hand; Long time the manxome foe he sought— So rested he by the Tumtum tree And stood awhile in thought. And, as in uffish thought he stood, The Jabberwock, with eyes of flame, Came whiffling through the tulgey wood, And burbled as it came! One, two! One, two! And through and through The vorpal blade went snicker-snack! He left it dead, and with its head He went galumphing back. And hast thou slain the Jabberwock? Come to my arms, my beamish boy! O frabjous day! Callooh! Callay! He chortled in his joy. Twas brillig, and the slithy toves Did gyre and gimble in the wabe: All mimsy were the borogoves, And the mome raths outgrabe."

const seuss =
  "One fish Two fish Red fish Blue fish. Black fish Blue fish Old fish New fish. This one has a little star. This one has a little car. Say! What a lot Of fish there are. Yes. Some are red. And some are blue. Some are old. And some are new. Some are sad. And some are glad. And some are very, very bad. Why are they Sad and glad and bad? I do not know. Go ask your dad. Some are thin. And some are fat. The fat one has A yellow hat. From there to here, from here to there, Funny things Are everywhere.  Here are some Who like to run. They run for fun In the hot, hot sun. Oh me! Oh my! Oh me! Oh my! What a lot Of funny things go by. Some have two feet And some have four. Some have six feet And some have more. Where do they come from? I can’t say. But I bet they have come a long, long way. We see them come. We see them go. Some are fast. And some are slow. Some are high And some are low. Not one of them Is like another. Don’t ask us why. Go ask your mother. Say! Look at his fingers! One, two, three… How many fingers Do I see? One, two, three, four, Five, six, seven, Eight, nine, ten. He has eleven! Eleven! This is something new. I wish I had Eleven, too!";

const geraniums =
"The trouble with geraniums is that they’re much too red! The trouble with my toast is that it’s far too full of bread. The trouble with a diamond is that it’s much too bright. The same applies to fish and stars and the electric light. The troubles with the stars I see lies in the way they fly. The trouble with myself is all self-centred in the eye. The trouble with my looking-glass is that it shows me, me; there’s trouble in all sorts of things where it should never be."

const markovModel = generateModel(jabberwocky, seuss, geraniums);
const output_text = generateText(markovModel);


// creates a markov chain model based on one or more input strings

function generateModel(...args) {
  const words = args.join(" ").split(" ");
  const model = {};

  // loop through all the words except the last one.
  for (let i = 0; i < words.length - 1; i++) {
    const target_word = words[i];
    const next_word = words[i + 1];

    // if the model doesn't contain the target word, add it.
    if (!model[target_word]) {
      model[target_word] = [];
    }

    // add the next word to the possibilities for target_word
    model[target_word].push(next_word);
  }

  return model;
}


function pick(array) {
    const index = Math.floor(Math.random() * array.length);
    return array[index];
  }


function generateText(model, first_word) {
    first_word = first_word ?? pick(Object.keys(model));
  
    let words = [first_word]; // Store words in an array
    let current_word = first_word;
  
    for (let i = 0; i < 120; i++) {
      if (!model[current_word]) break;
  
      current_word = pick(model[current_word]);
  
      words.push(current_word); // Store each new word
  
      if (current_word.endsWith(".")) break;
    }
  
    return words; // Return an array of words instead of a string
  }
  




let words;
let rectangles = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
  
    words = generateText(markovModel); // Generate words
  
    let startX = 50;
    let startY = 50;
    let spacingY = 60; // Vertical spacing between rows
    let spacingX = 10; // Horizontal spacing between words
    let currentX = startX;
    let currentY = startY;
    let maxRowHeight = 0; // Track tallest word in row for spacing
  
    rectangles = []; // Reset rectangles
  
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      
      textSize(16);
      let wordWidth = textWidth(word) + 30; 
      let wordHeight = 40; 
  
      // Check if word fits in current row, if not move to next row
      if (currentX + wordWidth > width - 50) {
        currentX = startX; // Reset x-position
        currentY += maxRowHeight + spacingY; // Move down a row
        maxRowHeight = 0; // Reset max row height
      }
  
      // Create the draggable rectangle
      rectangles.push(new DraggableRect(currentX, currentY, word));
  
      // Update positioning for next word
      currentX += wordWidth + spacingX;
      maxRowHeight = max(maxRowHeight, wordHeight);
      
      // Stop placing words if they exceed the window height
      if (currentY + wordHeight > height - 50) {
        break;
      }
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
  