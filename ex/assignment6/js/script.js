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

    //adding in extra descriptive element

    let adj = getRandomElement(data.adjs);
    console.log(adj);

//declaring article
let article = "a";
//adding in an if statement that dictates if the first letter is a vowel, it will be an 'an' instead of an 'a'


// added adjs to the description
  let description =  `${condiment} ${verb} like a ${adj} ${cat} in a ${room}`;
  console.log(description);
  $('body').append(description)
}

function getRandomElement(array) {
  let element = array[Math.floor(Math.random() * array.length)];
  return element;
}
