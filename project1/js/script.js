/*****************

Chaotic Harmony
Percy Dragon

Since Sisyphus can never get the rock to the top,
the uset will never be able to unclutter the screen properly
you have a desktop background full of bullshit images, and
you try to clean out the computer by putting everything in the trash, but only fail miserably.

******************/
 "use strict"

//declaring variables
 let $bin;
 let $drag;
 let crumplePaper;
 let droppedPaper;
 let powerUpSfx;

 $(document).ready(setup);

 function setup() {
   //OKAY SO THIS IS BECAUSE THE PAGE WOULD LOAD IN SO FAST YOU'D SEE THE UGLY STUFF
   // AND I FOUND THIS AMAZING REF ON STACKFLOW THAT MADE IT SUPER EASY FOR ME TO FIX THIS
   // THANK YOU STACKFLOW https://stackoverflow.com/questions/9550760/hide-page-until-everything-is-loaded-advanced

   document.getElementsByTagName("html")[0].style.visibility = "visible";

   //designating variables
   $bin = $('#bin');
   $drag = $('.draggy');


//designating audio variables for sweet audio sfx
   crumplePaper = new Audio('assets/sounds/paper-throw-1.wav');
   droppedPaper = new Audio('assets/sounds/paper-rustle-4.wav');

//NEATO SFX FOR POWER UP

  // powerUpSfx.play();
  // console.log("hello")


//making sure the draggable images don't cause a scrolling off screen effect
   $drag.draggable({scroll:false});

//making the trash can a droppable element
   $bin.droppable( {
    drop: onDrop
  });


  //adding a random change of position for images
  changePosition();
  //adding deletion dialogue popup
  deleteRecycleBin();


  //adding in a fade in and out function between pages
  //because im adding in that sweet sweet boot up sfx
  //found here https://css-tricks.com/forums/topic/fade-out-between-pages/
  $('body').css('display', 'none');
  $('body').fadeIn(1000);

  $('.link').click(function(event) {

  event.preventDefault();

  newLocation = this.href;

  $('body').fadeOut(1000, newpage);

  });

 }

function newpage() {
  window.location = newLocation;
 }

//the drop event code that tells it what to do when it drops
//it removes a class from the images, to track if their are any images left on screen
//if there aren't any left, it goes to the popup dialogue
 function onDrop(event, ui) {
   droppedPaper.play();
   //making the draggable images hide when dropped into trash
   ui.draggable.hide();
   ui.draggable.removeClass('small');
   //changed the image of trash if stuff is in it
   $bin.attr('src','assets/images/hatsune_miku_full_recycle_bin.png');

   if ($('.small').length === 0) {
     $('#dialog-confirm').dialog('open');

   }
 }

//for some reason this was the only way for me to add the small class back???
//no idea why, I've just stuck with it.
 function addClassSmall() {
   //re-adds the small class to the images
   $drag.addClass('small');
 }

//setting random position to the images
 function changePosition() {
   $('.small').each(randomPosition);
 }

//this gives the images a random position on screen
 function randomPosition(){
   $(this).offset({top:Math.random()*600, left:Math.random()*1200});
 }

//so essentially this is the popup dialogue that asks you if you want to delete everything in your bin when you've removed
//everything off screen
//when you delete everything, though, it just pops right back on screen, and the cycle beings a new
 function deleteRecycleBin() {
   $("#dialog-confirm" ).dialog({
     autoOpen: false,
     resizable: false,
     height: "auto",
     width: 400,
     modal: true,
     buttons: {
       "Delete all items": function() {
         $(this).dialog( "close" );
         crumplePaper.play();
         addClassSmall();
         $('.draggy').show();
         $bin.attr('src','assets/images/hatsune_miku_empty_recycle_bin.png');
         changePosition();
       }
     }
   });
 }
