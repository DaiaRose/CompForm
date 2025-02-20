let dragging = null;
let offsetX = 0, offsetY = 0;
let selectedImage = "crescent"; // Default selection to drag, resize

function preload() {
    butterfly = loadImage("images/butterfly.png");
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
    crescentX: 110, crescentY: 341, crescentSize: 200,
    pastryX: 130, pastryY: 395, pastrySize: 250,
    decorX: 222, decorY: 120, decorSize: 400,
    background: "possum",
    crescent: "pickle",
    pastry: "croissant",
    decor: "hat",
    color: "#c8a5eb",
};

const pane = new Tweakpane.Pane();

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

pane.addInput(PARAMS, "color");

pane.addButton({ title: 'Random' }).on('click', () => {
    PARAMS.crescentX = random(50, 550);
    PARAMS.crescentY = random(50, 550);
    PARAMS.crescentSize = random(100, 400);

    PARAMS.pastryX = random(50, 550);
    PARAMS.pastryY = random(50, 550);
    PARAMS.pastrySize = random(100, 400);

    PARAMS.decorX = random(50, 550);
    PARAMS.decorY = random(50, 550);
    PARAMS.decorSize = random(100, 400);

    PARAMS.crescent = random(["croissant", "peach", "pickle", "tongue"]);
    PARAMS.pastry = random(["donut", "waffle", "pastry", "croissant"]);
    PARAMS.decor = random(["hat", "pickle", "tongue", "butterfly"]);
    PARAMS.background = random(["cheeto", "possum", "heart"]);
});


// Universal Size Slider that Adjusts the Selected Image
let sizeSlider = pane.addInput(PARAMS, "crescentSize", { min: 50, max: 400 });

// Update Slider When a New Image is Clicked
function updateSlider() {
    let key = selectedImage + "Size";
    sizeSlider.dispose(); // Remove previous slider
    sizeSlider = pane.addInput(PARAMS, key, { min: 50, max: 400 });
}

function setup () {
    createCanvas(600,600);
}

function draw () {
    background(PARAMS.color);

    imageMode(CENTER);
    possum.resize(450, 0);
    cheeto.resize(0, 550);
    heart.resize(450, 0);
	image(eval(PARAMS.background), 200, 200);

    drawImage("crescent");
    drawImage("pastry");
    drawImage("decor");
}

function drawImage(key) {
    let img = eval(PARAMS[key]);
    let size = PARAMS[key + "Size"];
    image(img, PARAMS[key + "X"], PARAMS[key + "Y"], size, size);
}

// Detect Click on Images
function mousePressed() {
    let items = [
        { key: "crescent", x: PARAMS.crescentX, y: PARAMS.crescentY, size: PARAMS.crescentSize },
        { key: "pastry", x: PARAMS.pastryX, y: PARAMS.pastryY, size: PARAMS.pastrySize },
        { key: "decor", x: PARAMS.decorX, y: PARAMS.decorY, size: PARAMS.decorSize }
    ];

    for (let item of items) {
        let w = item.size / 2;
        let h = item.size / 2;

        if (mouseX > item.x - w && mouseX < item.x + w &&
            mouseY > item.y - h && mouseY < item.y + h) {
            dragging = item.key;
            selectedImage = item.key;  // Update selected image
            offsetX = mouseX - item.x;
            offsetY = mouseY - item.y;

            updateSlider();  // Update slider to control the new selected image
            break;
        }
    }
}

// Move Dragged Image
function mouseDragged() {
    if (dragging) {
        PARAMS[dragging + "X"] = mouseX - offsetX;
        PARAMS[dragging + "Y"] = mouseY - offsetY;
    }
}

// Stop Dragging
function mouseReleased() {
    dragging = null;
}
