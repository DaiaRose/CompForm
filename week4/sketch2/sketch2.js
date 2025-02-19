
function preload() {
    butterfly= loadImage("images/butterfly.png");
    cheeto = loadImage("images/cheeto.png");
    croissant = loadImage("images/croissant.png");
    donut = loadImage("images/donut.png");
    hat = loadImage("images/hat.png");
    pastry = loadImage("images/pastry.png");
    peach = loadImage("images/peach.png");
    heart = loadImage("images/heart.png");  
    pickle = loadImage("images/pickle.png");
    possum = loadImage("images/possum.png");
    tongue = loadImage("images/tongue.png");
    waffle = loadImage("images/waffle.png");
}

const PARAMS = {
    crescentX: 239,
    crescentY: 461,
    pastryX: 130,
    pastryY: 395,
    decorX: 322,
    decorY: 212,
    background: "possum",
    crescent: "pickle",
    pastry: "croissant",
    decor: "hat",
};

const pane = new Tweakpane.Pane();

pane.addInput(PARAMS, "crescentX", { min: 100, max: 500 });
pane.addInput(PARAMS, "crescentY", { min: 100, max: 500 });

pane.addInput(PARAMS, "pastryX", { min: 100, max: 500 });
pane.addInput(PARAMS, "pastryY", { min: 100, max: 500 });


pane.addInput(PARAMS, "decorX", { min: 100, max: 500 });
pane.addInput(PARAMS, "decorY", { min: 100, max: 500 });

pane.addInput(PARAMS, "background", {
	options: {
		CheetoBush: "cheeto",
		PossumMom: "possum",
		HeartRock: "heart",
	},
});

pane.addInput(PARAMS, "crescent", {
	options: {
		croissant: "croissant",
		peach: "peach",
        pickle: "pickle",
        tongue: "tongue",
	},
});

pane.addInput(PARAMS, "pastry", {
	options: {
		donut: "donut",
		waffle: "waffle",
		pastry: "pastry",
        croissant: "croissant",
	},
});

pane.addInput(PARAMS, "decor", {
	options: {
		hat: "hat",
		pickle: "pickle",
		tongue: "tongue",
        butterfly: "butterfly",

	},
});


function setup () {
    createCanvas(600,600);
}

function draw () {

    background("lightpurple");

	possum.resize(450, 0);
    cheeto.resize(0, 550);
    heart.resize(450, 0);

    croissant.resize(150, 0);
    donut.resize(0, 250);
	waffle.resize(0, 160);
    pastry.resize(250, 0);

	hat.resize(350, 0);
    peach.resize(0, 150);
    pickle.resize(150, 0);
    tongue.resize(250, 0);
    butterfly.resize(150, 0);

	imageMode(CENTER);
	image(eval(PARAMS.background), 300, 300);
	image(eval(PARAMS.crescent), PARAMS.crescentX, PARAMS.crescentY);
	image(eval(PARAMS.pastry), PARAMS.pastryX, PARAMS.pastryY);
    image(eval(PARAMS.decor), PARAMS.decorX, PARAMS.decorY);


}