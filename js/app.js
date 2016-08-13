// Code addapted from Marius Craciunoiu
// https://medium.com/@mariusc23
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('nav').outerHeight();
// on scroll, let the interval function know the user has scrolled
$(window).scroll(function(event){
  didScroll = true;
  console.log(didScroll)
});
// run hasScrolled() and reset didScroll status
setInterval(function() {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);
function hasScrolled() {
  // do stuff here...
  var scroll_position = $(this).scrollTop();
  if (Math.abs(lastScrollTop - scroll_position) <= delta)
  return;
  // If current position > last position AND scrolled past navbar...
  if (scroll_position > lastScrollTop && scroll_position > navbarHeight){
    // Scroll Down
    $('nav').removeClass('nav-down').addClass('nav-up');
  } else {
    // Scroll Up
    // If did not scroll past the document (possible on mac)...
    if(scroll_position + $(window).height() < $(document).height()) {
      $('nav').removeClass('nav-up').addClass('nav-down');
    }
  }
  lastScrollTop = scroll_position;
}
