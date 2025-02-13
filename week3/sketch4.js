//mountain shapes

function setup () {
  createCanvas(600,600);
  background(163,201,255);

  colors=["#778777", "#fcc59a", "#923f07", "#534453", "#c4655e", "#e88c3d", "#1f4e58"]
  c=0;
  noiseScale = 0.9;
}


function draw () {

  background(163,201,255);
  noStroke();

  for (let h = 200; h < height; h+=60) {
    let y = h;
    beginShape(); 
    fill(colors[c % colors.length]);

    for (let i = 0; i < width; i+=7) {
      let x = i;
      let angle = noise(x*noiseScale , y *noiseScale) * TWO_PI;
      let dir = createVector(cos(angle), sin(angle));

      vertex(x, y); // Draw a point

      // Move along mountain
      x += dir.x ;
      y += dir.y * 5;

    }
    vertex(600, 600);
    vertex(0, 600);

    endShape(CLOSE);
    c++;
  }

}