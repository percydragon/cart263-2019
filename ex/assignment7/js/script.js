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

//http://pages.mtu.edu/~suits/notefreqs.html
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

//these are the musical variables
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
  'xo*',
  ''
];

let patternIndex = 0;

//adding in effect variables

let tremolo;
let lowPassFilter;

//i dont want to apply an effect to every drum, so here we go, lets create a group
let group;




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
      frequency: 220,
      volume:0.3
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

  //adding in effects
  tremolo = new Pizzicato.Effects.Tremolo({
    speed: 7,
    depth: 0.8,
    mix: 0.8
  });

  lowPassFilter = new Pizzicato.Effects.LowPassFilter({
    frequency: 700,
    peak: 20,
    volume: 1.5
});

//making the group pizzicato
group = new Pizzicato.Group([snare,hihat,kick]);

//this effect makes the synth sound kinda more like a piano???
//i think it's cool
synth.addEffect(tremolo);

//ive been able to make the lowPassFilter filter work to make this kinda vaporwave esque sound???
//i kinda like it. It sounds sedated and cool.
group.addEffect(lowPassFilter);


}
//draw loop is not useful at all in this code so i removed it.

function playNote() {
  let frequency = frequencies[Math.floor(Math.random() * frequencies.length)];
  synth.frequency = frequency;
  synth.play();
  //this makes it so that the notes loop
  let duration = Math.floor(random(2,10)) * 120;
  console.log(duration);
  setTimeout(playNote, duration);
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
    //instead of what i originally did
    //i changed it to set timeout, than added another set timeout in playnote, so that way it loops infinitely.
    setTimeout(playNote,100);
    setInterval(playDrum,250);
    //this makes sure that if you click again, it doesn't play again.
    doOnce = true;
  }
}
