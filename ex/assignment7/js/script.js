"use strict";

/*****************

Music Box
Percy Dragon

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

//i was trying to go over the top with silences/rests
//than i remembered I play music and basically a rest is a lack of frequency
//so i just add a 0 frequency to the frequencies array. Easy!
let frequencies = [
  0,
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

//adding in a variable that will allow mousePressed to work only once
let doOnce = false;

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

  if (mousePressed && doOnce === false) {
    setInterval(playNote,500);
    setInterval(playDrum,250);
    //this makes sure that if you click again, it doesn't play again.
    doOnce = true;
  }
}
