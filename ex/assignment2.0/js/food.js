class Food extends Agent {
  constructor (x,y,vx,vy,size,minSize,maxSize,c,alive){
    super(x,y,random(minSize,maxSize),c,undefined);
    this.vx = vx;
    this.vy = vy;
    this.minSize = minSize;
    this.maxSize = maxSize;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;


    // Wrap when player goes off the canvas
    if (this.x < 0) {
      this.x += width;
    }
    else if (this.x > width) {
      this.x -= width;
    }

    if (this.y < 0) {
      this.y += height;
    }
    else if (this.y > height) {
      this.y -= height;
    }
  }


  reset() {
    this.x = random(width);
    this.y = random(height);

    this.size = random(this.minSize,this.maxSize)

  }
}
