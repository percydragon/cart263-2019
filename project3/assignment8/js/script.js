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
let $clickButton;
let frequencies = [
  220.00,
  246.94,
  277.18,
  293.66,
  329.63,
  369.99,
];
let synth;
let timeOut;

$(document).ready(setup);

//fo some reason the button wont work if i don't put it in a seperate function called setup so anyway
//i put it in a seperate function

function setup() {
  //so what were doing here is that we are setting up the generation button
  //this way, we have a button readily available to generate words and stuff.
  $clickButton = $("#click");
  $clickButton.on('click', beginning)
  synth = new Pizzicato.Sound({
    source: 'wave',
    options: {
      type: 'sine',
      frequency: 220,
      volume:0.3
    }
  });
}
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
          notMovingOn(seq);
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
          whatIsUp(seq);
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

      case 14:
          whyAssigned();
          break;

      case 13:
      case 15:
      case 19:
      case 21:
      case 23:
      case 24:
          relaxingMusic(seq);
          break;

      case 17:
      case 18:
          changedText(seq);
          break;

      case 20:
          notMovingOn(seq);
          break;

      case 22:
          afterWork();
          break;

      case 25:
          reset();
          break;
    }
  });
  $('body').append(button);
}

// so here the story stuff begins
//different functions to jump between the story and stuff
//I'm not gonna go over every single one in detail, but essentially i reuse $('.guess').remove to remove the buttons, then add them back in when skipping to a new selection screen
//the span is for hiding the log in screen, which is used to sort of simulate a desk life?????
//i guess??????
//p.empty is to essentially just empty the text variable so we can constantly add in new text without removing p

function beginning() {
  $('span').hide();
  $('.guess').remove();
  $('p').empty();
  text = "Welcome to Chartreuse Industries. My name is Artificial Neural Network Assistant, or ANNA for short.\n I will be your assisstant moving on.";
  letsTalk(text);
  $('p').append(text)
  addButton("It's nice to meet you ANNA", 1);
  addButton("What happened to Katherine?", 2);
}

function movingOn() {
  //this jumps from 1
  $('.guess').remove();
  $('p').empty();
  text = "It's nice to meet you too. Would you like to go over your daily report today?";
  letsTalk(text);
  $('p').append(text);
  addButton("Yes, that sounds good.", 3);
  addButton("No, I'd like to set up a meeting.", 4)
}

function notMovingOn(val) {
  //this jumps from 2
  $('.guess').remove();
  $('p').empty();
  text = "Katherine has given her untimely resignation to her secretary position. She had stated she wanted to follow her life passion of orchestral performance.";
  letsTalk(text);
  $('p').append(text);
  if (20 === val) {
    addButton("Oh. Okay then, send her my regards if possible.", 5);
    addButton("Katherine never mentioned this passion to me, are you sure of this?", 6);
    addButton("But you said she was terminated.", 2);
  }
  else {
    addButton("Oh. Okay then, send her my regards if possible.", 5);
    addButton("Katherine never mentioned this passion to me, are you sure of this?", 6);
  }
}

function katherineOne() {
  // this jumps from 5
  $('.guess').remove();
  $('p').empty();
  text = "I'll send my best regards to her now... Is there anything you would like to do today?";
  letsTalk(text);
  $('p').append(text);
  addButton("Give me my daily report.", 3);
  addButton("I'd like to set up a meeting, if possible.", 4);
}

function katherineTwo() {
  //this jumps from 6
  $('.guess').remove();
  $('p').empty();
  text = "Yes. I only report what I have been told. I am meerly an artificial assissant. There is no reason to not trust what I tell you.";
  letsTalk(text);
  $('p').append(text);
  addButton("Oh.", 7);
  addButton("That's... unfortunate to hear then.", 8)
}

function dailyReport() {
  //jumps from 3
  $('.guess').remove();
  $('p').empty();
  text = "Yesterday had been a fairly unproductive day for you. Most of your hours had been spent procrastinating on your computer. Your addiction to cat videos is rather concerning.";
  letsTalk(text);
  $('p').append(text);
  addButton("Um, what exactly are you talking about, ANNA?", 9);
  addButton("That's not a daily report, ANNA.", 10);
}

function meetingTime() {
  //jumps from 4
  $('.guess').remove();
  $('p').empty();
  text = "I'm sorry, but I cannot do that momentarily. You seem to be the only individual present in the office at the moment.";
  letsTalk(text);
  $('p').append(text);
  addButton("I could have sworn I heard Ricky and Sharon when I was walking to my office just earlier...", 11);
  addButton("Oh. Alright then. Is there anything else for me to potentially do today?", 12);
}

function oh() {
  //jumps from 7
  $('.guess').remove();
  $('p').empty();
  text = "Oh? What concerns you? I am a machine, I'm sorry if that concerns you in any way. I cannot understand the emotions you may be feeling, or the things you may be projecting onto me, however, I will try to the best of my abilities to help you.";
  letsTalk(text);
  $('p').append(text);
  addButton("Sorry. Just all of this is new and overwhelming to me. I need to take a moment.", 13);
  addButton("Something just doesn't feel right. Why were you assigned to me?", 14);
}

function unfortunate() {
  //jumps from 8
  $('.guess').remove();
  $('p').empty();
  text = "How is it unfortunate? I am simply a machine. I am not Katherine. I meerely report what I've been told. It is as simple as that. Do you understand?";
  letsTalk(text);
  $('p').append(text);
  addButton("Yes", 15);
  console.log("That's not what I want to say");
}

function whyAssigned() {
  //jumps from 14
  $('.guess').remove();
  $('p').empty();
  text = "Because Katherine had been removed.";
  letsTalk(text);
  $('p').append(text);
  addButton("Wait, I thought Katherine quit?", 17);
}

function changedText(val) {
  //jumps from 17 & 18
  $('.guess').remove();
  $('p').empty();
  if (18 === val) {
    text = "Oh. Yes. She quit. I'm sorry, my english is not very good. I am a machine after all."
    letsTalk(text);
    $('p').append(text);
  }
  else {
    text = "Because Katherine had been removed.";
    letsTalk(text);
    $('p').append(text);
  }
  addButton("I understand", 15);
  addButton("I understand", 15);
}

function whatIsUp(val) {
  //jumps from 9
  $('.guess').remove();
  $('p').empty();
  text = "Do you not remember? You spent your entire working hours doing unproductive activities, instead of working on your coding duties. It's quite unfortunate. Katherine too struggled with unproductivity, it was quite unfortunate she needed to be terminated. You can be molded, however.";
  letsTalk(text);
  $('p').append(text);
  if (2 === val) {
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
  letsTalk(text);
  $('p').append(text);
  addButton("Yes. I spent most of my time coding. I honestly have no idea what you're talking about.", 21);
  addButton("ANNA, that's what I did after work, when there aren't.... How do you know what I did after work?", 22);
}

function whoAreThey() {
  //jumps from 11
  $('.guess').remove();
  $('p').empty();
  text = "I'm sorry, but both Ricky and Sharon have left the building meerely moments prior. I believe they have both fallen to passing food poisoning.";
  letsTalk(text);
  $('p').append(text);
  addButton("Oh, that's unfortunate to hear. I guess give me my daily report than.", 3);
  addButton("I literally just saw them though. How could they have gotten food poisoning in like, the last two minutes that I saw them?", 23);
}

function anythingElse() {
  //jumps from 12
  $('.guess').remove();
  $('p').empty();
  text = "Would you like to see your daily report, or play some relaxing music?";
  letsTalk(text);
  $('p').append(text);
  addButton("Report", 3);
  addButton("Music", 24)
}

function relaxingMusic(val) {
  //jumps from 23 & 24 & 13 & 15
  setTimeout(playNote,100);
  console.log("are you work?")
  $('.guess').remove();
  $('p').empty();
  if (13 === val) {
    console.log("are you work? 1")
    text = "I understand. Here is some relaxing music for your troubles."
    letsTalk(text);
    addButton ("Thank you.", 25);
    $('p').append(text);
  }
  else if(15 === val) {
    console.log("are you work? 1.5")
    text = "I understand. Here is some relaxing music for your troubles."
    letsTalk(text);
    addButton ("Thank you.", 25);
    $('p').append(text);
  }
  else if (24 === val) {
    console.log("are you work?")
    text = "Music for your worries.";
    letsTalk(text);
    addButton ("Thank you.", 25);
    $('p').append(text);
  }

  else if (23 === val) {
    console.log("are you work? 2")
    text = "Do not worry about such things. Here is some music to relax.";
    letsTalk(text);
    $('p').append(text);
    addButton ("There's nothing you can do. Just forget what you know.", 25);
  }

  else if (19 === val) {
    console.log("are you work? 3")
    text = " That's unfortunate then. Here, allow me to clear your mind with some relaxing music.";
    letsTalk(text);
    $('p').append(text);
    addButton("That's not what I want. This doesn't fix anything.", 25);
  }
  else if (21 === val) {
    console.log("are you work? 3.5")
    text = " That's unfortunate then. Here, allow me to clear your mind with some relaxing music.";
    letsTalk(text);
    $('p').append(text);
    addButton("That's not what I want. This doesn't fix anything.", 25);
  }

}

function afterWork() {
  //jumps from 22
  $('.guess').remove();
  $('p').empty();
  text = "Are you sure, are not all your hours work hours? It doesn't matter anyway. All you have to do is work now, and listen to some nice music.";
  $('p').append(text);
  addButton("okay", 24);
  letsTalk(text);
}

//i want the AI to talk so here we go
function letsTalk(words) {
  let options = {
    rate: 1.02,
    pitch: 0.9
  }
  responsiveVoice.speak(words, 'UK English Female', options);
}

//this is what will allow us to play pizzacato.js music
function playNote() {
  let frequency = frequencies[Math.floor(Math.random() * frequencies.length)];
  synth.frequency = frequency;
  synth.play();
  //this makes it so that the notes loop
  let duration = Math.floor(Math.random(1,20)* 520);
  console.log(duration);
  timeOut = setTimeout(playNote, duration);
}

//I was having a lot of trouble getting the music to stop after resetting, so I added a clear timeout function so that i can clear timeout, and stop the synth at the same timeout
//so the music doesn't sound weird and shit
function stopMusic() {
  clearTimeout(timeOut);
  synth.stop();
  console.log("stop!!!");
}

//reseting the log in form from the beginning
function reset() {
  stopMusic();
  $('.guess').remove();
  $('p').empty();
  $('span').show();
}
