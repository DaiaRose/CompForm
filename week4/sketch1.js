//SPRIOGRAPH

const PARAMS = {
    r1:0, //length of first arm
    r2:0, //length of second arm
    a1Inc:0, //how fast angle 1 increases
    a2Inc:0, //how fast angle 2 increases
    speed:0, //how many lines to draw per frame
    color: "#c8a5eb", //starting stroke
};

const pane = new Tweakpane.Pane();

pane.addInput(PARAMS, 'r1', {min: 0, max: 200});
pane.addInput(PARAMS, 'r2', {min: 0, max: 200});
pane.addInput(PARAMS, 'a1Inc', {min: 0.1, max: 5});
pane.addInput(PARAMS, 'a2Inc', {min: 0.1, max: 5});
pane.addInput(PARAMS, 'speed', {min: 1, max: 100});
pane.addInput(PARAMS, 'color');

pane.addButton({ title: 'Redraw' }).on('click', () => {
    clear(); 
    background(0); 
});


var a1 = 0 //angle of arm that increases over time
var a2 = 0 //angle of second arm that increases over time

let prevX  //previous x position to draw continuous line
let prevY  //previous y position to draw continuous line


function setup (){
    createCanvas(800,800);
    background(0);
    angleMode(DEGREES);

    PARAMS.r1 = random(50, 200)
    PARAMS.r2 = random(50, 200)

    PARAMS.a1Inc = random(0.1, 5)
    PARAMS.a2Inc = random(0.1, 5)

    PARAMS.speed = random(1, 10)

}

function draw(){
    stroke(PARAMS.color);
    translate(width/2, height/2); //center on canvas

    for (var i = 0; i <PARAMS.speed; i++) {
        var x1 = PARAMS.r1 * cos(a1);
        var y1 = PARAMS.r1 * sin(a1);

        var x2 = x1 + PARAMS.r2 * cos(a2);
        var y2 = y1 + PARAMS.r2 * sin(a2);


        line(prevX, prevY, x2, y2);

        prevX = x2;
        prevY = y2;

        a1 += PARAMS.a1Inc;
        a2 += PARAMS.a2Inc;
    }

}