"use strict";

/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/
let answer;
let text;
let button = $('<div class="guess"></div>');
const NUM_OPTIONS = 2;
$(document).ready(function () {
  //im gonna put in switch states here
  beginning();
});

function addButton(label) {
  button.text(label);
  button.button();
  button.on('click', function() {
    // if ($(this).text() === ) {
    //   console.log("Correct!");
    //   $('.guess').remove();
    //   setTimeout(newRound,500);
    // }
    // else {
    //   console.log("Wrong!");
    //   $(this).effect('shake');
    // }
  });
  $('body').append(button);
}

// so here the story stuff begins

function beginning() {
  let okay;
  let no;
  let dokie = [
    "hello",
    "cat"]
  text = "Hello, my name is KATHERINE. Welcome to your stay at []";
  $('p').append(text)
  addButton(dokie)
}

function movingOn() {
  let thanks;
  let noThx;
  $('p').empty();
  text = "Ah, cool, good to hear that then. I'm glad you're enjoying your stay here. I hope you have a wonderful time"
  $('p').append(text);
}

function notMovingOn() {
  $('p').empty();
  text = "Oh... Okay then I guess. I'm not really happy with these sorts of things, but I guess I can live with that."
  $('p').append(text);
  addButton("Meme")
}
