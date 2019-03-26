"use strict";

/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

$(document).ready(setup);

function setup() {
  $.getJSON("assets/data/data.json", dataLoaded);
}

function dataLoaded(data) {
  console.log(data);
  let condiment = getRandomElement(data.condiments);
  let verb = "is";
  if (condiment.charAt(condiment.length - 1) === "s") {
    verb = "are";
  }

  let cat = getRandomElement(data.cats);
  let room = getRandomElement(data.rooms);
  console.log(verb, condiment);
  console.log(cat);
  console.log(room);
}

function getRandomElement(array) {
  let element = array[Math.floor(Math.random() * array.length)];
  return element;
}
