function Cactus(y, h, v) {

    this.x = width;
    this.y = y - h;
    this.velocity = v;
    this.h = h;
    this.w = round(random(20, 100));
    

    this.show = function(){
        fill(0, 210, 0);
        rect(this.x, this.y, this.w, this.h);
        this.update();
    }

    this.update = function(){
        this.x -= this.velocity;

    }

}