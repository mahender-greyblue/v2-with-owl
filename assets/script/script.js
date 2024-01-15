// smooth scrolling

// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true,
//    });


// Shery.textAnimate("#" , {
  
//   style: 1,
//   debug: true,
//   y: 10,
//   delay: 0.1,
//   duration: 2,
//   ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//   multiplier: 0.1,
// });





/* TT Billboard by Csaba Kurucz 2014 */
$(document).ready(function(){
  var firstSlides = $("#slideshow-list li"),
      secondSlides = $("#slideshow-nav li"),
      nbSlides = firstSlides.length,
      slideTime = 6000,
      nextSlide = 0,
      timer;
 
  function slideshow() {
      secondSlides.eq(nextSlide).addClass('active').siblings().removeClass('active');
      firstSlides.eq(nextSlide).addClass('active').siblings().removeClass('active'); 
      nextSlide = (nextSlide + 1) % nbSlides;
      timer = setTimeout(slideshow, slideTime);
  }
 
  slideshow();
 
  $('#slideshow-nav li').click(function () {
      $('#billboard').addClass('clicked');
    $('.play').fadeIn();
      clearInterval(timer);clearTimeout(slideTime);
      var clickIndex = $(this).index();
      $('#slideshow-list li').eq(clickIndex).addClass('active').siblings().removeClass('active');
    secondSlides.eq(clickIndex).addClass('active').siblings().removeClass('active');nextSlide = (clickIndex + 1) % nbSlides;
   
  });
  
  
  
 $('body').on('click','.play',function(){
 $('#billboard').removeClass('clicked');
 $('.play').fadeOut();
 setTimeout(function(){
 clearInterval(timer);clearInterval(slideTime);slideshow();
 },2000);
 });
 
 
 });










const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.site-navbar ul');
const navLinks = document.querySelectorAll('.site-navbar a');

// load all event listners
allEventListners();

// functions of all event listners
function allEventListners() {
  // toggler icon click event
  navToggler.addEventListener('click', togglerClick);
  // nav links click event
  navLinks.forEach( elem => elem.addEventListener('click', navLinkClick));
}

// togglerClick function
function togglerClick() {
  navToggler.classList.toggle('toggler-open');
  navMenu.classList.toggle('open');
}

// navLinkClick function
function navLinkClick() {
  if(navMenu.classList.contains('open')) {
    navToggler.click();
  }
}









// Check for valid email syntax
function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function closeForm() {
  document.contactform.name.value = '';
  document.contactform.email.value = '';
  document.contactform.message.value = '';

  $('.email').removeClass('typing');
  $('.name').removeClass('typing');
  $('.message').removeClass('typing');

  $('.cd-popup').removeClass('is-visible');
  $('.notification').addClass('is-visible');
  $('#notification-text').html("Thanks for contacting us!");
}

$(document).ready(function($) {

  /* ------------------------- */
  /* Contact Form Interactions */
  /* ------------------------- */
  $('#contact').on('click', function(event) {
    event.preventDefault();

    $('#contactblurb').html('Questions, suggestions, and general comments are all welcome!');
    $('.contact').addClass('is-visible');

    if ($('#name').val().length != 0) {
      $('.name').addClass('typing');
    }
    if ($('#email').val().length != 0) {
      $('.email').addClass('typing');
    }
    if ($('#message').val().length != 0) {
      $('.message').addClass('typing');
    }
  });

  //close popup when clicking x or off popup
  $('.cd-popup').on('click', function(event) {
    if ($(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup')) {
      event.preventDefault();
      $(this).removeClass('is-visible');
    }
  });

  //close popup when clicking the esc keyboard button
  $(document).keyup(function(event) {
    if (event.which == '27') {
      $('.cd-popup').removeClass('is-visible');
    }
  });

  /* ------------------- */
  /* Contact Form Labels */
  /* ------------------- */
  $('#name').keyup(function() {
    $('.name').addClass('typing');
    if ($(this).val().length == 0) {
      $('.name').removeClass('typing');
    }
  });
  $('#email').keyup(function() {
    $('.email').addClass('typing');
    if ($(this).val().length == 0) {
      $('.email').removeClass('typing');
    }
  });
  $('#message').keyup(function() {
    $('.message').addClass('typing');
    if ($(this).val().length == 0) {
      $('.message').removeClass('typing');
    }
  });

  /* ----------------- */
  /* Handle submission */
  /* ----------------- */
  $('#contactform').submit(function() {
    var name = $('#name').val();
    var email = $('#email').val();
    var message = $('#message').val();
    var human = $('#human:checked').val();

    if (human) {
      if (validateEmail(email)) {
        if (name) {
          if (message) {

// Handle submitting data somewhere
// For a tutorial on submitting the form to a Google Spreadsheet, see:
// https://notnaturaltutorials.wordpress.com/2016/03/20/submit-form-to-spreadsheet/

/*
            var googleFormsURL = "https://docs.google.com/forms/d/1dHaFG67d7wwatDtiVNOL98R-FwW1rwdDwdFqqKJggBM3nFB4/formResponse";
            // replace these example entry numbers
            var spreadsheetFields = {
              "entry.212312005": name,
              "entry.1226278897": email,
              "entry.1835345325": message
            }
            $.ajax({
              url: googleFormsURL,
              data: spreadsheetFields,
              type: "POST",
              dataType: "xml",
              statusCode: {
                0: function() {

                },
                200: function() {

                }
              }
            });
*/
            
            closeForm();

          } else {
            $('#notification-text').html("<strong>Please let us know what you're thinking!</strong>");
            $('.notification').addClass('is-visible');
          }
        } else {
          $('#notification-text').html('<strong>Please provide a name.</strong>');
          $('.notification').addClass('is-visible');
        }
      } else {
        $('#notification-text').html('<strong>Please use a valid email address.</strong>');
        $('.notification').addClass('is-visible');
      }
    } else {
      $('#notification-text').html('<h3><strong><em>Warning: Please prove you are a human and not a robot.</em></strong></h3>');
      $('.notification').addClass('is-visible');
    }

    return false;
  });
});


    // <script>
    //     // drop down menu script
    //     var menu = document.getElementById("menu");
    //     menu.style.maxHeight = "0px";
    //     function togglemenu() {
    //         if (menu.style.maxHeight == "0px") {
    //             menu.style.maxHeight = "390px";
    //         }
    //         else {
    //             menu.style.maxHeight = "0px";
    //         }
    //     }
    // </script>




// Shery.textAnimate(".impact-text h2" , {
   
//     style: 1,
//     y: 10,
//     delay: 0.1,
//     duration: 1,
//     ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    
//   });

// Shery.mouseFollower({
    
//     skew: true,
//     ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//     duration: .1,
//   });