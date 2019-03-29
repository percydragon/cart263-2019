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
];

let synth;
let kick;
let snare;
let hihat;

let pattern = [
  'x',
  'o',
  '*',
  'x*',
  'xo',
  'o*',
  'xo8',
  ''
];

let patternIndex = 0;


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

function playDrum() {
  let symbols = pattern[patternIndex];

  if (symbols.indexOf('x') !== -1) {
    kick.play();
  }

  if (symbols.indexOf('o') !== -1) {
    snare.play();
  }

  if (symbols.indexOf('*') !== -1) {
    hihat.play();
}
patternIndex++;
if (patternIndex >= pattern.length) {
  patternIndex = 0;
  }
}

function mousePressed() {
  // Start an interval for the notes
  setInterval(playNote,500);
  setInterval(playDrum,250);
}
