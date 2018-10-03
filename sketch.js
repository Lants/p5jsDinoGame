var dino;
var floorY;
var count;
var cacti = [];
var cactiCount;
var xVel;

function setup() {
	createCanvas(600, 400);

	floorY = 350;
	count = 0;
	cactiCount = 0;
	xVel = 5;

	dino = new Dino();
}

function draw() {
	count++;
	background(0);

	if (dino.y < floorY){
		dino.update();
	}
	else{
		dino.y = floorY;
	}


	fill(150);
	rect(0, floorY, width, height - floorY);
	dino.show();

	if (cacti.length != 0){ //for every cactus in cacti
		for (var i = cacti.length - 1; i >= 0; i--){
			cacti[i].show();
			// if (cacti[i].x < 10) {
			// 	cacti.splice(i);
			// }
		}
	}

	if (count == 200){
		count = round(random(80, 140));
		cacti.push(new Cactus(floorY, 45, xVel));
		xVel++;
	}

	
}

function keyPressed(){
	if (key == ' ' && !(dino.y < floorY)){
		dino.y = floorY;
		dino.jump();
	}
}