"use strict";

/*****************

Music Box
Percy Dragon

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

let frequencies = [
  220.00,
  246.94,
  277.18,
  293.66,
  329.63,
  369.99,
  415.30
]

let synth;
let kick;
let snare;
let hithat;


// preload()
//
// Description of preload

function preload() {

}


// setup()
//
// Description of setup

function setup() {
  synth = new Pizzicato.Sound({
    source: 'wave',
    options: {
      type: 'sine',
      frequency: 220
    }
  });

  kick = new Pizzicato.Sound({
    source: 'file',
    options: {
      path: 'assets/sounds/kick.wav'
    }
  });

  snare = new Pizzicato.Sound({
    source: 'file',
    options: {
      path: 'assets/sounds/snare.wav'
    }
  });

  hihat = new Pizzicato.Sound({
    source: 'file',
    options: {
      path: 'assets/sounds/hihat.wav'
    }
  });

}


// draw()
//
// Description of draw()

function draw() {

}

function playNote() {
  let frequency = frequencies[Math.floor(Math.random() * frequencies.length)];
  synth.frequency = frequency;
  synth.play();
}

function mousePressed() {
  // Start an interval for the notes
  setInterval(playNote,500);
}
