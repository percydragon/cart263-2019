class Food extends Agent {
  constructor (x,y,vx,vy,size,minSize,maxSize,maxSpeed,c,alive){
    super(x,y,random(minSize,maxSize),c,undefined);
    this.vx = vx;
    this.vy = vy;
    this.minSize = minSize;
    this.maxSize = maxSize;
    this.maxSpeed = maxSpeed;
  }

  update() {
    this.x += constrain(this.vx,-this.maxSpeed,this.maxSpeed);
    this.y += constrain(this.vy,-this.maxSpeed,this.maxSpeed);

    this.vx *= 1.02;
    this.vy *= 1.02;

    let r = random(0,1);
    if (r < 0.5) {
      this.vx *= -2;
    }

    let r2 = random(0,1);
    if (r2 < 0.5) {
      this.vy *= -2;
    }





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
    randoColours = color(random(254),random(254),random(254));
    this.x = random(width);
    this.y = random(height);
    this.c = randoColours;

    this.size = random(this.minSize,this.maxSize)
    this.vx *= random(-1.02,1.02);
    this.vy *= random(-1.02,1.02);

  }
}
