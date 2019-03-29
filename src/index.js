// Remove the preloader when all the DOM content has loaded
window.addEventListener("load", function(event) {
  var element = document.getElementById("app-loading");
  element.parentNode.removeChild(element);
  $('body').removeClass('disable-scrolling');
  $('#app-loading').fadeOut(1000);

  // Add animation to skill bars on scroll
  var skillbarAnimationDone = false;
  $(window).scroll(function (event) {
    var skillSectionOffsetTop = parseInt($('#skills-card').offset().top);
    var scrollPos = $(window).scrollTop() + $(window).height();
    if (!skillbarAnimationDone && scrollPos >= skillSectionOffsetTop) {
      skillbarAnimationDone = true;
       $('.skillbar-bar').each(function() {
         var width = $(this).attr('skillbar-width');
         $(this).css({
           'width': width,
           'animation': 'increaseWidth 1.4s ease-in-out 0s backwards'
         });
       });
    }
  });
});
