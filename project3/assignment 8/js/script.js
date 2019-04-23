"use strict";

/*****************

Typewriters are evil
Percy Dragon

So I guess I kinda wanna make an interactive evil typewriter that talks to you?
I'm gonna go about this kinda slowly, but I feel like it would be an interesting
idea to implement, idk? Like some evil 80s MySpace or something.
ID LOVE TO MAKE IT LIKE STACKOVERFLOW'S APRIL FOOLS THAT'D BE GREAT
******************/

//gonna impliment the note pad aspect, than I'll try to combine notepad and typeWriter
// in a sort of responsive manner

//this is the notepad code, but it's not reacting appropriately with the typewriter code, so maybe there's more to this than originally thought?
//maybe its the fact that its a different type of js? which may be the case,
//nonetheless, ill have to figure out how to fix such a thing

let text;
$(document).ready(function () {
  // Load the notes data (if there is any)
  // let contents = localStorage.getItem('notes');
  // // If it's not null, then there's data to display
  // if (contents !== null) {
  //   // Set the HTML of the notepad to the data loaded
  //   $('#notepad').html(contents);
  // }
  //
  // // Listen for keypresses in the notepad and save the data each time
  // $('#notepad').on('keyup', function () {
  //   // Grab the current HTML of the notepad
  //   let currentNotes = $('#notepad').html();
  //   // Save it to localStorage
  //   localStorage.setItem('notes',currentNotes);
  // });

  // typewriter();
  beginning();

  // $(document).on('click',changeTextOnClick);


});


//code found here
//https://css-tricks.com/snippets/css/typewriter-effect/
//this is for typewriter effect
// var fullText = [
//   "There are only 10 types of people in the world:",
//   "Those who understand binary, and those who don't",
//   "HRE BY KINGDOM COME",
//   "idk",
//   "mEME"


/*var aText = [
"There are only 10 types of people in the world:",
"Those who understand binary, and those who don't"
];*/
// var aText = [fullText[0], ""];
// var counter = 0;
// var iSpeed = 100; // time delay of print out
// var iIndex = 0; // start printing array at this posision
// var iArrLength = aText[0].length; // the length of the text array
// var iScrollAt = 20; // start scrolling up at this many lines
//
// var iTextPos = 0; // initialise text position
// var sContents = ''; // initialise contents variable
// var iRow; // initialise current row
//
//
//
// function typewriter()
// {
//  iIndex = 0;
//  sContents =  ' ';
//  iRow = Math.max(0, iIndex-iScrollAt);
//  var destination = document.getElementById("typedtext");
//
//  while ( iRow < iIndex ) {
//   sContents += aText[iRow++];// + '<br />';
//  }
//   destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
//  if ( iTextPos++ == iArrLength ) {
//   iTextPos = 0;
//   iIndex++;
//   if ( iIndex != aText.length ) {
//    iArrLength = aText[iIndex].length;
//    setTimeout("typewriter()", 500);
//   }
//  } else {
//   setTimeout("typewriter()", iSpeed);
//  }
// }
//
// function changeTextOnClick() {
//   $('#typedtext').empty();
//    iSpeed = 100; // time delay of print out
//    iIndex = 0; // start printing array at this posision
//    iArrLength = aText[0].length; // the length of the text array
//    iScrollAt = 20; // start scrolling up at this many lines
//
//    iTextPos = 0; // initialise text position
//    sContents = '';
//
// counter++;
//     aText = [fullText[counter], ""];
//   typewriter();
// }

//adding in buttons for people to pick and choose different things for
//so here is the beginning of the story code
//essentially here is where most of the code will be
function addButton(label , seq) {
  let button = $('<div class="guess"></div>');
  button.text(label);
  button.button();
  button.on('click', function() {
    //were using switch states to switch between the functions
    //with the buttons
    //think of it as jumps in a Renpy visual novel
    //but instead of jump
    //we have switch cases
    switch (seq) {
      case 1:
          movingOn();
          break;
      case 2:
          notMovingOn();
          break;
      case 3:

      case 4:

      case 5:
          katherineOne();
          break;
      case 6:
          katherineTwo();

      default:

    }
  });
  $('body').append(button);
}

// so here the story stuff begins
//different functions to jump between the story and stuff

function beginning() {
  text = "Welcome to Chartreuse Industries. My name is Artificial Neural Network Assistant, or ANNA for short.\n I will be your assisstant moving on.";
  $('p').append(text)
  addButton("It's nice to meet you ANNA", 1);
  addButton("What happened to Katherine?", 2);
}

function movingOn() {
  //this jumps from 1
  $('.guess').remove();
  $('p').empty();
  text = "It's nice to meet you too. Would you like to go over your daily report today?"
  $('p').append(text);
  addButton("Yes, that sounds good.", 3);
  addButton("No, I'd like to set up a meeting.", 4)
}

function notMovingOn() {
  //this jumps from 2
  $('.guess').remove();
  $('p').empty();
  text = "Katherine has given her untimely resignation to her secretary position. She had stated she wanted to follow her life passion of orchestral performance."
  $('p').append(text);
  addButton("Oh. Okay then, send her my regards if possible.", 5);
  addButton("Katherine never mentioned this passion to me, are you sure of this?", 6);
}

function katherineOne() {
  // this jumps from 5
  $('.guess').remove();
  $('p').empty();
  text = "I'll send my best regards to her now... Is there anything you would like to do today?";
  $('p').append(text);
  addButton("Give me my daily report.", 3);
  addButton("I'd like to set up a meeting, if possible.", 4);
}

function katherineTwo() {
  //this jumps from 6
  $('.guess').remove();
  $('p').empty();
  text = "Yes. I only report what I have been told. I am meerly an artificial assissant. There is no reason to not trust what I tell you.";
  $('p').append(text);
  addButton("Oh.");
  addButton("That's... unfortunate to hear then.")
}

function dailyReport() {
  //jumps from three
  $('.guess').remove();
  $('p').empty();

}
