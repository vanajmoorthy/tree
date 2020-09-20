let angle = 0;
let slider;

let w;
let h;

let lengthOfBranchOfTree = 200;

function setup() {
	w = windowWidth;
	h = windowHeight - 50;

	if (w < 800) {
		lengthOfBranchOfTree = 100;
	}

	console.log(lengthOfBranchOfTree);

	createCanvas(w, h);
	slider = createSlider(0, TWO_PI, PI / 4, 0.01);
}

function draw() {
	background(26, 82, 97);
	angle = slider.value();
	stroke(255);
	translate(width / 2, height);
	branchOfTree(lengthOfBranchOfTree);
}

function branchOfTree(lengthOfBranch) {
	line(0, 0, 0, -lengthOfBranch);
	translate(0, -lengthOfBranch);

	if (lengthOfBranch > 4) {
		push();
		rotate(angle);
		branchOfTree(lengthOfBranch * 0.67);
		pop();
		push();
		rotate(-angle);
		branchOfTree(lengthOfBranch * 0.67);
		pop();
	}
}
