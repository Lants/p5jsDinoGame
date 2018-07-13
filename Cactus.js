function Cactus(y, h){

    this.x = width;
    this.y = y - h;
    this.h = h;
    
    this.velocity = 5;

    this.show = function(){
        fill(0, 210, 0);
        rect(this.x, this.y, 20, this.h);
        this.update();
    }

    this.update = function(){
        this.x -= this.velocity;
    }

}