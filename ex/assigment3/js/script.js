"use strict";

/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/
let foundSecrets = 0;

$(document).ready(setup);
function setup() {
  setInterval(update,500)
  // This code will run when the document is ready!
  $('.redacted').click(redactedClicked);
  $('.secret').on('mouseover', mouseOver);
}

function update(){
  console.log("Update!");
  $('.redacted').each(updateSpan);
}

function updateSpan(){
  console.log("Update Span!")

  let r = Math.random();

  if (r < 0.2) {
    $(this).removeClass('redacted');
    $(this).addClass('revealed');

  }
}

function redactedClicked() {
  $(this).removeClass('revealed');
  $(this).addClass('redacted');

}

function mouseOver(){
  $(this).removeClass('secret');
  $(this).addClass('found');
  foundSecrets ++;
  $('#secrets-found').text(foundSecrets);
  $(this).off('mouseover');

}
$(document).ready(function(){

});
