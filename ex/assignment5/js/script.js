"use strict";

/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

let animals = ["aardvark",
      "alligator",
      "alpaca",
      "antelope",
      "ape",
      "armadillo",
      "baboon",
      "badger",
      "bat",
      "bear",
      "beaver",
      "bison",
      "boar",
      "buffalo",
      "bull",
      "camel",
      "canary",
      "capybara",
      "cat",
      "chameleon",
      "cheetah",
      "chimpanzee",
      "chinchilla",
      "chipmunk",
      "cougar",
      "cow",
      "coyote",
      "crocodile",
      "crow",
      "deer",
      "dingo",
      "dog",
      "donkey",
      "dromedary",
      "elephant",
      "elk",
      "ewe",
      "ferret",
      "finch",
      "fish",
      "fox",
      "frog",
      "gazelle",
      "gila monster",
      "giraffe",
      "gnu",
      "goat",
      "gopher",
      "gorilla",
      "grizzly bear",
      "ground hog",
      "guinea pig",
      "hamster",
      "hedgehog",
      "hippopotamus",
      "hog",
      "horse",
      "hyena",
      "ibex",
      "iguana",
      "impala",
      "jackal",
      "jaguar",
      "kangaroo",
      "koala",
      "lamb",
      "lemur",
      "leopard",
      "lion",
      "lizard",
      "llama",
      "lynx",
      "mandrill",
      "marmoset",
      "mink",
      "mole",
      "mongoose",
      "monkey",
      "moose",
      "mountain goat",
      "mouse",
      "mule",
      "muskrat",
      "mustang",
      "mynah bird",
      "newt",
      "ocelot",
      "opossum",
      "orangutan",
      "oryx",
      "otter",
      "ox",
      "panda",
      "panther",
      "parakeet",
      "parrot",
      "pig",
      "platypus",
      "polar bear",
      "porcupine",
      "porpoise",
      "prairie dog",
      "puma",
      "rabbit",
      "raccoon",
      "ram",
      "rat",
      "reindeer",
      "reptile",
      "rhinoceros",
      "salamander",
      "seal",
      "sheep",
      "shrew",
      "silver fox",
      "skunk",
      "sloth",
      "snake",
      "squirrel",
      "tapir",
      "tiger",
      "toad",
      "turtle",
      "walrus",
      "warthog",
      "weasel",
      "whale",
      "wildcat",
      "wolf",
      "wolverine",
      "wombat",
      "woodchuck",
      "yak",
      "zebra"];
let $clickMe;
let correctAnimal;
let answers = [];
let correctButton;
const NUM_OPTIONS = 3;

$(document).ready(setup);

function setup() {
  $clickMe = $('#click');

  $clickMe.click(startGame);
}

function startGame() {
  if (annyang) {
  // Let's define our first command. First the text we expect, and then the function it should call
  let commands = {
    'I give up': giveUp,
    'Say it again': repeatReverse,
    'I think it is *animal': checkAnimal,
    '*animal': checkAnimal,
  };

  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening. You can call this here, or attach this call to an event, button, etc.
  annyang.start();
}
  $clickMe.remove();
  newRound();
}

function addButton(label) {
  let button = $('<div class="guess"></div>');
  button.text(label);
  button.button();
  button.on('click', function() {
    if ($(this).text() === correctAnimal) {
      console.log("Correct!");
      $('.guess').remove();
      setTimeout(newRound,500);
    }
    else {
      console.log("Wrong!");
      $(this).effect('shake');
      speakAnimal(correctAnimal);
    }
  });
  $('body').append(button);
}

function newRound() {
  $('.guess').remove();
  answers = [];
  for (var i = 0; i < NUM_OPTIONS; i++) {
    let answer = animals[Math.floor(Math.random() * animals.length)];
    addButton(answer);
    answers.push(answer);
  }
  correctAnimal = answers[Math.floor(Math.random() * answers.length)];
  speakAnimal(correctAnimal);
}

function speakAnimal(name) {
  let reverseName = name.split('').reverse('').join('');
  let options = {
    rate: 0.002,
    pitch: -1
  }
  responsiveVoice.speak(reverseName, 'Japanese Female');
}

function giveUp () {
  $(".guess").each(function () {
    if ($(this).text() === correctAnimal) {
      $(this).effect('shake');
      // $('.guess').remove();
      setTimeout(newRound,500);
    }
  });

}

function repeatReverse() {
  speakAnimal(correctAnimal);

}

function checkAnimal(animal) {

  if (animal === correctAnimal) {
    responsiveVoice.speak("Correct!", 'Japanese Female');
    $('.guess').remove();
    setTimeout(newRound,500);
  }
  else {
    responsiveVoice.speak("Wrong!", 'Japanese Female');
    $(".guess").each(function () {
      if ($(this).text() === animal) {
        $(this).effect('shake');
      }
    });

    $(this).effect('shake');
    speakAnimal(correctAnimal);
  }



}
