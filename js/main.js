$(function() {
  

   var header = $("#header"),
       introH = $("#intro").innerHeight(),
       scrollOffset = $(window).scrollTop();

/* Fixed Header */

   checkScroll(scrollOffset);

   $(window).on("scroll", function() {

       scrollOffset = $(this).scrollTop();
    
       checkScroll(scrollOffset);

   });

   function checkScroll(scrollOffset) {
        if( scrollOffset >= introH ) {
         header.addClass("fixed");
        } else {
         header.removeClass("fixed");
        }
   }


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

var duration = 15 * 1000;
    var defaults = { startVelocity: 70, spread: 360, ticks: 120, zIndex: 0 };
    var animationEnd; // Объявляем переменную как глобальную

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    function launchConfetti() {
      var timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        animationEnd = Date.now() + duration; // Обновляем animationEnd для следующей анимации
      }

      var particleCount = 200 * (timeLeft / duration);
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));

      // Запуск анимации через 2 секунды
      setTimeout(launchConfetti, 2000);
    }

    function startConfettiAnimation() {
      animationEnd = Date.now() + duration;
      launchConfetti();
    }

    // Запустить анимацию при загрузке страницы
    startConfettiAnimation();



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


 