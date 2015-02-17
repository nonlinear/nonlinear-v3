// bootstrap tooltip and popover functions

$('[data-toggle=tooltip]').tooltip();
$('[data-toggle=popover]').popover();

// flexslider functions

$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide"
  });
});
// smoothstate functions

// ;(function($) {
//   'use strict';
//   var $body = $('html, body'),
//       content = $('#main').smoothState({
//         // Runs when a link has been activated
//         onStart: {
//           duration: 250, // Duration of our animation
//           render: function (url, $container) {
//             // toggleAnimationClass() is a public method
//             // for restarting css animations with a class
//             content.toggleAnimationClass('is-exiting');
//             // Scroll user to the top
//             $body.animate({
//               scrollTop: 0
//             });
//           }
//         }
//       }).data('smoothState');
//       //.data('smoothState') makes public methods available
// })(jQuery);

// scroll animation

$(window).scroll(function() {
// 100 = The point you would like to fade the nav in.
  if ($(window).scrollTop() > 150 ){
    $('html').addClass('trans');
  } else {
    $('html').removeClass('trans');
  };
});
// $('.scroll').on('click', function(e){
//     e.preventDefault()
//   $('html, body').animate({
//       scrollTop : $(this.hash).offset().top
//     }, 1500);
// });
