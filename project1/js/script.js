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

   $drag.draggable({scroll:false});

   $bin.droppable( {
    drop: onDrop
  });
  changePosition();
  deleteRecycleBin();

  // for (let i = 1; i < 100; i++) {
  //   let $image = $('<img class="dragy" src="assets/images/' + i + '.png">');
  //   $('body').append($image);
  // }
  //

 }

 function onDrop(event, ui) {
   //making the draggable images hide when dropped into trash
   ui.draggable.hide();
   ui.draggable.removeClass('small');
   //changed the image of trash if stuff is in it
   $bin.attr('src','assets/images/hatsune_miku_full_recycle_bin.png');

   if ($('.small').length === 0) {
     $('#dialog-confirm').dialog('open');

   }
 }

 function addClassSmall() {
   //re-adds the small class to the images
   $drag.addClass('small');
 }

//setting random position to the images
 function changePosition() {
   $('.small').each(randomPosition);
 }

 function randomPosition(){
   $(this).offset({top:Math.random()*600, left:Math.random()*1200});
 }

 function deleteRecycleBin() {
   $("#dialog-confirm" ).dialog({
     autoOpen: false,
     resizable: false,
     height: "auto",
     width: 400,
     modal: true,
     buttons: {
       "Delete all items": function() {
         $( this ).dialog( "close" );
         addClassSmall();
         $('.draggy').show();
         $bin.attr('src','assets/images/hatsune_miku_empty_recycle_bin.png');
         changePosition();
       }
     }
   });
 }
