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
  //taken from stackoverflow on how to reload page
  // https://stackoverflow.com/questions/5404839/how-can-i-refresh-a-page-with-jquery
  $(this).click(function() {
    location.reload();
});
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
let article2 = "a"
//adding in an if statement that dictates if the first letter is a vowel, it will be an 'an' instead of an 'a'
if (adj.charAt(0) === "a" || adj.charAt(0) ===  "e" || adj.charAt(0) === "i" || adj.charAt(0) ===  "o" || adj.charAt(0) ===  "u") {
  article = "an";
}

if (room.charAt(0) === "a" || room.charAt(0) === "e" || room.charAt(0) === "i" || room.charAt(0) === "o" || room.charAt(0) === "u") {
  article2 = "an";
}


// added adjs to the description
//added article to description
  let description =  `${condiment} ${verb} like ${article} ${adj} ${cat} in ${article2} ${room}`;
  console.log(description);
  $('body').append(description)
  letsTalk(description);
}

function getRandomElement(array) {
  let element = array[Math.floor(Math.random() * array.length)];
  return element;
}

//i want to add in responsive voice because i think its fun
function letsTalk(words) {
  let options = {
    rate: 1.02,
    pitch: 0.9
  }
  responsiveVoice.speak(words, 'UK English Female', options);
}
