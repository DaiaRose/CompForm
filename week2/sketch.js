
function setup() {
  createCanvas(600, 700);
  background(251,109,39);
  // img1 =loadImage("AnniAlbers.png")

  frameRate(3);

}


function draw() {

  stroke('rgb(227,226,221)');
  strokeWeight(24);
  line(mouseX, mouseY, pmouseX, pmouseY);
  
  
  stroke('rgb(51,48,46)');
  strokeWeight(3);
  line(mouseX+2, mouseY+1, pmouseX+1, pmouseY+1);


  stroke('rgb(51,48,46)');
  strokeWeight(3);
  line(mouseX+6, mouseY+6, pmouseX+6, pmouseY+6);

  stroke('rgb(51,48,46)');
  strokeWeight(3);
  line(mouseX-5, mouseY-5, pmouseX-5, pmouseY-5);
}



// just of interest. this puts dots where line stops


// function draw() {
//   // img1.resize(600, 0)
//   // image(img1,-5,-60)

//   stroke('rgb(227,226,221)');
//   strokeWeight(24);
//   if (12> abs(mouseX-pmouseX) && 12 > abs(mouseY-pmouseY)) {
//     line(mouseX, mouseY, pmouseX, pmouseY);
//   }
  
//   stroke('rgb(51,48,46)');
//   strokeWeight(3);
//   line(mouseX+2, mouseY+1, pmouseX+1, pmouseY+1);


//   stroke('rgb(51,48,46)');
//   strokeWeight(3);
//   line(mouseX+6, mouseY+6, pmouseX+6, pmouseY+6);

//   stroke('rgb(51,48,46)');
//   strokeWeight(3);
//   line(mouseX-5, mouseY-5, pmouseX-5, pmouseY-5);
// }
