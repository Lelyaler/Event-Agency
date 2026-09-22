$(function() {
  

   var header = $("#header"),
       introH = $("#intro").innerHeight(),
       scrollOffset = $(window).scrollTop();

/* Fixed Header */

   function checkScroll(scrollOffset) {
        if( scrollOffset >= introH ) {
         header.addClass("fixed");
        } else {
         header.removeClass("fixed");
        }
   }

   checkScroll($(window).scrollTop());

   window.addEventListener("scroll", function() {
       checkScroll(window.pageYOffset || document.documentElement.scrollTop);
   }, { passive: true });


/* Smooth scroll */

    $("[data-scroll]").on("click", function(event) {
      event.preventDefault();

      var $this =$(this),
          blockId = $this.data('scroll'),
          blockOffset = $(blockId).offset().top;

      $("#nav a").removeClass("active");
      $this.addClass("active");

    $("html, body").animate({
       scrollTop: blockOffset 
     }, 900);
 });

/* Menu nav toggle */

$("#nav_toggle").on("click",function(event){
  event.preventDefault();

  $(this).toggleClass("active");
  $("#nav").toggleClass("active");
});

/* Collapse */

$("[data-collapse]").on("click", function(event) {
   event.preventDefault();
  
   var $this = $(this),
       blockId = $this.data('collapse');
   
   $this.toggleClass("active");  
});

/* Modal */
$(document).ready(function() {
   $(".team__image, .portfolio__photo").on("click", function() {
     var imgSrc = $(this).attr("src");
     $("#modal_content").attr("src", imgSrc);
     $("#modal").fadeIn();
   });
 
   $("#modal, #modal_close, #modal_content").on("click", function(event) {
     if (event.target === this || $(event.target).hasClass("modal__close")) {
       $("#modal").fadeOut();
     }
   });
 });

/* Confetti */

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    function launchConfetti() {
      if (typeof confetti !== "function") return;
      var duration = 2.5 * 1000;
      var animationEnd = Date.now() + duration;
      var defaults = { startVelocity: 45, spread: 360, ticks: 80, zIndex: 0 };

      var interval = setInterval(function() {
        var timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        var particleCount = 40 * (timeLeft / duration);
        confetti(Object.assign({}, defaults, { particleCount: particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
        confetti(Object.assign({}, defaults, { particleCount: particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
      }, 350);
    }

    setTimeout(launchConfetti, 500);



// Dots
const reviews = document.querySelectorAll('.reviews__item');
const dots = document.querySelectorAll('.reviews__dot');

let activeReviewIndex = 0;

function showReview(index) {
  reviews.forEach((review, i) => {
    if (i === index) {
      review.style.display = 'block';
    } else {
      review.style.display = 'none';
    }
  });

  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    activeReviewIndex = index;
    showReview(activeReviewIndex);
  });
});

showReview(activeReviewIndex);

 
 });


 