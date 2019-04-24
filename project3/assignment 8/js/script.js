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
         dailyReport();
         break;

      case 4:
          meetingTime();
          break;

      case 5:
          katherineOne();
          break;

      case 6:
          katherineTwo();
          break;

      case 7:
          oh();
          break;

      case 8:
          unfortunate();
          break;

      case 9:
          whatIsUp();
          break;

      case 10:
          notDailyReport();
          break;

      case 11:
          whoAreThey();
          break;

      case 12:
          anythingElse();
          break;

      case 13:
      case 14:
          whyAssigned();
          break;

      case 15:
      case 16:
      case 17:
          changedText();
          break;

      case 18:
          changedText();
          break;

      case 19:
      case 20:
          notMovingOn();
          break;
      case 21:
      case 22:
      case 23:

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
  if (20) {
    addButton("Oh. Okay then, send her my regards if possible.", 5);
    addButton("Katherine never mentioned this passion to me, are you sure of this?", 6);
    addButton("But you said she was terminated.", 2);
  }
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
  addButton("Oh.", 7);
  addButton("That's... unfortunate to hear then.", 8)
}

function dailyReport() {
  //jumps from 3
  $('.guess').remove();
  $('p').empty();
  text = "Yesterday had been a fairly unproductive day for you. Most of your hours had been spent procrastinating on your computer. Your addiction to cat videos is rather concerning.";
  $('p').append(text);
  addButton("Um, what exactly are you talking about, ANNA?", 9);
  addButton("That's not a daily report, ANNA.", 10);
}

function meetingTime() {
  //jumps from 4
  $('.guess').remove();
  $('p').empty();
  text = "I'm sorry, but I cannot do that momentarily. You seem to be the only individual present in the office at the moment.";
  $('p').append(text);
  addButton("I could have sworn I heard Ricky and Sharon when I was walking to my office just earlier...", 11);
  addButton("Oh. Alright then. Is there anything else for me to potentially do today?", 12);
}

function oh() {
  //jumps from 7
  $('.guess').remove();
  $('p').empty();
  text = "Oh? What concerns you? I am a machine, I'm sorry if that concerns you in any way. I cannot understand the emotions you may be feeling, or the things you may be projecting onto me, however, I will try to the best of my abilities to help you.";
  $('p').append(text);
  addButton("Sorry. Just all of this is new and overwhelming to me. I need to take a moment.", 13);
  addButton("Something just doesn't feel right. Why were you assigned to me?", 14);
}

function unfortunate() {
  //jumps from 8
  $('.guess').remove();
  $('p').empty();
  text = "How is it unfortunate? I am simply a machine. I am not Katherine. I meerely report what I've been told. It is as simple as that. Do you understand?";
  $('p').append(text);
  addButton("Yes", 15);
  addButton("Yes", 16);
  console.log("That's not what I want to say");
}

function whyAssigned() {
  //jumps from 14
  $('.guess').remove();
  $('p').empty();
  text = "Because Katherine had been removed.";
  $('p').append(text);
  addButton("Wait, I thought Katherine quit?", 17);
}

function changedText() {
  //jumps from 17
  $('.guess').remove();
  $('p').empty();
  if (18) {
    text = "Oh. Yes. She quit. I'm sorry, my english is not very good. I am a machine after all."
  }
  else {
    text = "Because Katherine had been removed.";
  }
  $('p').append(text);
  addButton("I understand", console.log("but that's not right"), 15);
  addButton("I understand", console.log("Why can't I do anything else?"), 16);
}

function whatIsUp() {
  //jumps from 9
  $('.guess').remove();
  $('p').empty();
  text = "Do you not remember? You spent your entire working hours doing unproductive activities, instead of working on your coding duties. It's quite unfortunate. Katherine too struggled with unproductivity, it was quite unfortunate she needed to be terminated. You can be molded, however.";
  $('p').append(text);
  if (2) {
    addButton("Wait, I thought Katherine quit?", 18);
  }
  else {
    addButton("No. I don't remember that.", 19);
    addButton("Katherine was terminated?", 20);
  }
}

function notDailyReport() {
  //jump from 10
  $('.guess').remove();
  $('p').empty();
  text = "Oh, I'm incredibly sorry about that. However, that is what you spent most of your time doing. Do you not remember?";
  $('p').append(text);
  addButton("Yes. I spent most of my time coding. I honestly have no idea what you're talking about.", 21);
  addButton("ANNA, that's what I did after work, when there aren't.... How do you know what I did after work.", 22);
}

function whoAreThey() {
  //jumps from 11
  $('.guess').remove();
  $('p').empty();
  text = "I'm sorry, but both Ricky and Sharon have left the building meerely moments prior. I believe they have both fallen to passing food poisoning."
  $('p').append(text);
  addButton("Oh, that's unfortunate to hear. I guess give me my daily report than.", 3);
  addButton("I literally just saw them though. How could they have gotten food poisoning in like, the last two minutes that I saw them?", 23);
}

function anythingElse() {
  //jumps from 12
  $('.guess').remove();
  $('p').empty();
  text = "Would you like to see your daily report, or play some relaxing music?"
  $('p').append(text);
  addButton("Report", 3);
  addButton("Music", 24)
}

function relaxingMusic() {
  //jumps from 23 & 24 & 13
  $('.guess').remove();
  $('p').empty();
  if (13) {
    text = "I understand. Here is some relaxing music for your troubles."
  }
  if (24) {
    text = "Music for your worries.";
    addButton ("Thank you.", 25);
  }

  if (23) {
    text = "Do not worry about such things. Here is some music to relax.";
    addButton ("There's nothing you can do. Just forget what you know.");
  }
  $('p').append(text);
}
