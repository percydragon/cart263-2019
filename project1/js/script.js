/*****************

Chaotic Harmony
Percy Dragon

Since Sisyphus can never get the rock to the top,
the uset will never be able to unclutter the screen properly
you have a desktop background full of bullshit images, and
you try to clean out the computer by putting everything in the trash, but only fail miserably.

******************/
 "use strict"

 let $bin;
 let $drag;

 $(document).ready(setup);

 function setup() {
   $bin = $('#bin');
   $drag = $('.draggy');

   $drag.draggable();

   $bin.droppable( {
    drop: onDrop
  });

 }

 function onDrop(event, ui) {
   ui.draggable.hide();
   ui.draggable.removeClass('small');

   if ($('.small').length === 0) {
     addClass();
     $('.draggy').show();
   }
   $bin.attr('src','assets/images/hatsune_miku_full_recycle_bin.png');
 }

 function addClass() {
   $drag.addClass('small');
 }
