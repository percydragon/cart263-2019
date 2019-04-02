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


//code found here
//https://css-tricks.com/snippets/css/typewriter-effect/
//this is for typewriter effect
document.addEventListener('DOMContentLoaded',function(event){
  // array with texts to type in typewriter
  var dataText = ["Hello darling, how do you do on this fine day?", "I know you don't want to stay for long, but let me incentivise you.",
  "Right here is a list of your internet browsing history, do you like that?"];

  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < (text.length)) {
      // add next character to h1
     document.querySelector("h1").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }
  // start a typewriter animation for a text in the dataText array
   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        }, 20000);
     }
     // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
     typeWriter(dataText[i], 0, function(){
       // after callback (and whole text has been animated), start next text
       StartTextAnimation(i + 1);
     });
    }
  }
  // start the text animation
  StartTextAnimation(0);
});
