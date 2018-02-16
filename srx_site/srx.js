var lastScrollTop = 0;

var sliderLength = $('.slider div').length;
setInterval(function(){
  if ($('.slider').scrollLeft() == ($('.slider')[0].scrollWidth - $('.slider').outerWidth())) {
    $('.slider').animate({
      scrollLeft: 0
    }, 800);
  } else {
    $('.slider').animate({
      scrollLeft: $('.slider').scrollLeft() + ($('.slider')[0].scrollWidth / sliderLength)
    }, 800);
  }
}, 5000);

if (!getCookie("flyer")) {
  $('#dialog').addClass('active-dlg');
}

$('#offers').click(function(){
  $('#dialog').addClass('active-dlg');
})

$('#dlg-close').click(function(){
  $('#dialog').removeClass('active-dlg');
  setCookie('flyer', 'true', 30);
});

$(window).on('load', function () {
  $('#load-overlay').fadeOut();
});

$.scrollify({
  setHeights: false,
  section: ".section"
});

$('.bottom-menu li span').click(function () {
  $('.bottom-menu li span').removeClass('active-span')
  $('#description').css({ 'opacity': 0, 'filter': 'blur(10px)' })
  var tht = this
  $(tht).addClass('active-span')
  setTimeout(function () {
    $('#description').text($(tht).data('desc'))
    $('#description').css({ 'opacity': 1, 'filter': 'blur(0px)' })
    $('#desc-img').css('background-image', 'url(' + $(tht).data('image') + ')')
  }, 300)
})

$('.bottom-menu li span').hover(function(){
  $(this).attr('title', 'Read about ' + $(this).text());
});

$('#menu-toggle').click(function(){
  $(this).toggleClass('menu-tgl')
  $('#menu-container').toggleClass('showed-menu')
  $('.section').toggleClass('showed-sect')
})

// Cookie Functions
function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function eraseCookie(name) {
  document.cookie = name + '=; Max-Age=-99999999;';
}

// JSmoothScroll
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function () {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });