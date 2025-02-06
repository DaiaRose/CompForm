var input;
var button;

function setup() {
  createCanvas(480, 120);
  input = createInput();
  input.position(20, 30);
  button = createButton("submit");
  button.position(160, 30);
  button.mousePressed(siteswapCheck);
  
  background(100);
  noStroke();
  text("Enter siteswap", 20, 20);
}


function siteswapCheck() {
  var siteswap = input.value();
  let inputArray = siteswap.split('');
  inputArray = inputArray.map(Number);

  console.log(inputArray);
  
  sum = inputArray.reduce((a, b) => a + b, 0);

  avg = sum / inputArray.length;
  console.log("balls:", avg);
  var invalid = false;

  if (avg % 1 === 0) {
    let values = []

    
    for (var i=0; i < inputArray.length; i++) {
      values.push(inputArray[i]);

      if (new Set(values).size === values.length){

        for (var j = 0; j < values.length; j++) {
          values[j]--;
        }

        continue;
      }
      else {
        console.log("invalid siteswap, crash!");
        invalid = true;
        break;
      } 
    }

    if (invalid == false) {
      console.log("valid siteswap");
      text("valid siteswap", 20, 70);
    }
  }
  
  else {
    console.log("fractional siteswap");
  }
}
