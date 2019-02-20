/*****************

Percy Dragon
Eat Up



******************/
"use strict"

let $fly;
let $mouth;
let $shark;
let $bothDrag;
let disgustedSFX;

$(document).ready(setup);
function setup() {
  $mouth = $('#mouth');
  $fly = $('#fly');
  $shark = $('#shark');

  disgustedSFX = new Audio('assets/sounds/disgust.mp3');

  $fly.draggable();

  $shark.draggable({
    start: disgustSound,
    revert: true
  });

function disgustSound (event,ui) {
  disgustedSFX.play();
}



  $mouth.droppable( {
    accept: '#fly',
    drop: onDrop
  });
}

function onDrop(event, ui) {
  console.log('Dropped!');
  $fly.remove();

  setInterval(chew,100);
}

function chew() {
  if ($mouth.attr('src') === "assets/images/mouth-open.png") {
    $mouth.attr('src', 'assets/images/mouth-closed.png');
  }

  else {
    $mouth.attr('src', 'assets/images/mouth-open.png');
  }
}
