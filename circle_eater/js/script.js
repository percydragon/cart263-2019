/*****************

Circle Eater
Percy Dragon

Circle canabilism my dudes
******************/

//SET UP MY dudes

"use strict";
let avatar = {
  x: 0,
  y: 0,
  maxSize:64,
  size: 64,
  alive: true,
  color: "#103955"
}

let food = {
  x:0,
  y:0,
  size:24,
  color:"#8099fa"
}

//SETUP() MY DUDES
function setup() {
  createCanvas(windowWidth,windowHeight);
  food.x = random(0,width);
  food.y = random(0,height);
  noCursor();
}

//DRAW() MY DUDES
function draw() {
  //making bg
  background("#890192");
if (!avatar.active) {
  return;
}
  //displaying avatar
  displayAvatar();
  updateAvatar();

//displaying food
  displayFood();
  updateFood();

  checkCollision();
}

//LET'S UPDATE THE AVATART MY DUDES
function updateAvatar () {
  avatar.x = mouseX;
  avatar.y = mouseY;

  avatar.size = avatar.size - .5;
  avatar.size = constrain(avatar.size,0,avatar.maxSize);

  if (avatar.size === 0) {
    avatar.alive = false;
  }
}

//AVATAR display
function displayAvatar() {
  push();
  noStroke();
  fill(avatar.color);
  ellipse(avatar.x,avatar.y,avatar.size,avatar.size);
  pop();
}

//LET'S CHECK COLLISION MY DUDES
function checkCollision () {
  let d = dist(avatar.x,avatar.y,food.x,food.y);
  if (d < avatar.size/2 + food.size/2) {
    food.x = random(width);
    food.y = random(height);
    avatar.size += 25;
    avatar.size = constrain(avatar.size,0,avatar.maxSize);
  }

}

//Food display
function displayFood() {
  push();
  noStroke();
  fill(food.color);
  ellipse(food.x,food.y,food.size,food.size);
  pop();
}
