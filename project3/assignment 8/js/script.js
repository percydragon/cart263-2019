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


$(document).ready(function () {
  addButton("meme");


  // Load the notes data (if there is any)
  let contents = localStorage.getItem('notes');
  // If it's not null, then there's data to display
  if (contents !== null) {
    // Set the HTML of the notepad to the data loaded
    $('#notepad').html(contents);
  }

  // Listen for keypresses in the notepad and save the data each time
  $('#notepad').on('keyup', function () {
    // Grab the current HTML of the notepad
    let currentNotes = $('#notepad').html();
    // Save it to localStorage
    localStorage.setItem('notes',currentNotes);
  });

  typewriter();

  $(document).on('click',changeTextOnClick);


});


//code found here
//https://css-tricks.com/snippets/css/typewriter-effect/
//this is for typewriter effect
var fullText = [
  "There are only 10 types of people in the world:",
  "Those who understand binary, and those who don't",
  "HRE BY KINGDOM COME",
  "idk",
  "mEME"


];

/*var aText = [
"There are only 10 types of people in the world:",
"Those who understand binary, and those who don't"
];*/
var aText = [fullText[0], ""];
var counter = 0;
var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row



function typewriter()
{
 iIndex = 0;
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("typedtext");

 while ( iRow < iIndex ) {
  sContents += aText[iRow++];// + '<br />';
 }
  destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout("typewriter()", 500);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }
}

function changeTextOnClick() {
  $('#typedtext').empty();
   iSpeed = 100; // time delay of print out
   iIndex = 0; // start printing array at this posision
   iArrLength = aText[0].length; // the length of the text array
   iScrollAt = 20; // start scrolling up at this many lines

   iTextPos = 0; // initialise text position
   sContents = '';

counter++;
    aText = [fullText[counter], ""];
  typewriter();
}

//adding in buttons for people to pick and choose different things for
function addButton(label) {
  let button = $('<div class="guess"></div>');
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
