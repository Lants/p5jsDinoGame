
function Dino(){
    this.x = 64;
    this.y = height - 50;

    this.gravity = .3;
    this.velocity = 0;

    this.show = function(){

        fill(100,100,255);
        noStroke();
        triangle(this.x, this.y - 15, this.x + 10, this.y - 5, this.x + 15, this.y - 35);
        rect(this.x - 10, this.y - 5, 5, 5);
        rect(this.x + 5, this.y - 5, 5, 5);
        rect(this.x - 10, this.y - 15, 20, 10);
        triangle(this.x - 10, this.y - 15, this.x - 10, this.y - 5, this.x - 20, this.y - 25);
        ellipse(this.x + 17, this.y - 29, 20, 10);
    }

    this.jump = function(){
        this.velocity = -8;
        this.update();
    }

    this.update = function(){
        this.y += this.velocity;
        this.velocity += this.gravity;
    }




}