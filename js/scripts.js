jQuery(function($) {

  'use strict';

  // Selectors.
  const mainImg = document.querySelectorAll('.main-image');
  const thumbnail = document.querySelectorAll('.thumbnails img');

  // To make sure images stay solid we set height / width inline.
  $('.thumbnails img').height(thumbnail[0].height).width(thumbnail[0].width);
  $('.main-image').height(mainImg[0].height).width(mainImg[0].width);

  //== Click functions.
  //
  //## 3 on.click functions that we connect with changeImg functions.

  // on.click arrow left.
  $(document).on('click', '.img-wrapper .arrow-left', function() {
    const inFocus = document.getElementsByClassName('focus')[0];
    const focusPrev = inFocus.previousElementSibling;
    if (!focusPrev) {} else {
      changeImg(focusPrev);
    };

  });

  // on.click arrow right.
  $(document).on('click', '.img-wrapper .arrow-right', function() {
    const inFocus = document.getElementsByClassName('focus')[0];
    const focusNext = inFocus.nextElementSibling;
    if (!focusNext) {} else {
      changeImg(focusNext);
    };
  });

  // on.click thumbnail.
  $(document).on('click', '.thumbnails img', function() {
    const thumb = $(this);
    changeImg(thumb);
  });

  // Our image switch function where we push all <img> element.
  function changeImg(targetImg) {

    // Get high res src from data-src.
    const e = $(targetImg).attr("data-src");

    // Find the none faded thumbnail and remove css class with opacity.
    const focus = document.querySelector('.focus');
    focus.classList.remove('focus');

    // Fade out main img and change it's src for thumbnails data-src that
    // contains url to high resolution variant of thumbnail.

    $('.main-image').fadeOut(300, function() {
      $(this).attr("src", e);
      $(this).fadeIn(300);
    });

    // Optional: Switch thumbnail to high resolution image.
    $(targetImg).attr("src", e);

    // Toggle thumbnail class
    $(targetImg).toggleClass('focus');
  }
});
