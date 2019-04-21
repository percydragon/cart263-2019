"use strict";

/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/
let answer;
let text;
$(document).ready(function () {
  //im gonna put in switch states here
  beginning();
});

function addButton(label , seq) {
  let button = $('<div class="guess"></div>');
  button.text(label);
  button.button();
  button.on('click', function() {
    switch (seq) {
      case 1:
          movingOn();
          break;
      case 2:
          notMovingOn();
          break;
      default:

    }
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
  addButton(dokie, 1);
  addButton("hello", 2);
}

function movingOn() {
  $('.guess').remove();
  $('p').empty();
  text = "Ah, cool, good to hear that then. I'm glad you're enjoying your stay here. I hope you have a wonderful time"
  $('p').append(text);
  addButton("meme");
  addButton("Hello")
}

function notMovingOn() {
  $('.guess').remove();
  $('p').empty();
  text = "Oh... Okay then I guess. I'm not really happy with these sorts of things, but I guess I can live with that."
  $('p').append(text);
  addButton("Meme");
}
