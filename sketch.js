var dino;
var floorY;
var count;
var cacti = [];
var cactiCount;

function setup() {
	createCanvas(600, 400);

	floorY = 350;
	count = 0;
	cactiCount = 0;

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
	if (cacti.length != 0){
		for (var i = 0; i < cacti.length; i++){
			cacti[i].show();
		}
	}

	if (count == 200){
		count = round(random(80, 140));
		cacti[cactiCount] = new Cactus(floorY, 45);
		cactiCount++;

	}
	
}

function keyPressed(){
	if (key == ' ' && !(dino.y < floorY)){
		dino.y = floorY;
		dino.jump();
	}
}