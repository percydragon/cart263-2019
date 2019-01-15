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
  vx:0,
  vy:0,
  tx:0,
  ty:0,
  size:40,
  color:"#8099fa"
}

let noiseSpeed;

//SETUP() MY DUDES
function setup() {
  createCanvas(windowWidth,windowHeight);
  food.x = random(0,width);
  food.y = random(0,height);
  noCursor();

  food.vx = random(5);
  food.vy = random(5);

  setInterval(function(){
    food.vx = random(-10,10);
    food.vy = random(-10,10);
  }, 1500);
}

//DRAW() MY DUDES
function draw() {
  //making bg
  background("#890192");
if (!avatar.alive) {
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

  avatar.size = avatar.size - .2;
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

//LET'S UPDATE THE FOOD MY DOODS
//ngl i was gonna use perlin noise from the beginning
function updateFood() {
  // noiseSpeed = 90;
  //
  // food.x = noiseSpeed * noise(food.tx);
  // food.y = noiseSpeed * noise(food.ty);
  //
  // food.tx += 0.05;
  // food.ty -= 0.05;

  food.x += food.vx;
  food.y += food.vy;

  // food.vx +=5 ;
  // food.vy +=5 ;


  // Wrap when player goes off the canvas
  if (food.x < 0) {
    food.x += width;
  }
  else if (food.x > width) {
    food.x -= width;
  }

  if (food.y < 0) {
    food.y += height;
  }
  else if (food.y > height) {
    food.y -= height;
  }
}
