// Night Flowers v1.1.1
// Animations
// Using Anime.js

// Begin wrap all functions - waits until document loads, then loads js
$(document).ready(function(){

// Animate Set 1

    function animateset() {
        anime({
        targets: '.animate-set1',
        translateX: function() {
            return anime.random(-700, 700);
        },
            translateY: function() {
            return anime.random(-300, 300);
        },
            rotate: function() {
                return anime.random(0, 360);
            },
            scale: function() {
                return anime.random(1, 3);
            },
        duration: 2000,
        complete: animateset,
        });
    }

  animateset();


// Animate Set 2

function fitElementToParent(el, padding) {
  var timeout = null;
  function resize() {
    if (timeout) clearTimeout(timeout);
    anime.set(el, {scale: 1});
    var pad = padding || 0;
    var parentEl = el.parentNode;
    var elOffsetWidth = el.offsetWidth - pad;
    var parentOffsetWidth = parentEl.offsetWidth;
    var ratio = parentOffsetWidth / elOffsetWidth;
    timeout = setTimeout(anime.set(el, {scale: ratio}), 10);
  }
  resize();
  window.addEventListener('resize', resize);
}

var layeredAnimation = (function() {

  var transformEls = document.querySelectorAll('.transform-progress');
  var layeredAnimationEl = document.querySelector('.animate-set2-container');
  var shapeEls = layeredAnimationEl.querySelectorAll('.animate-set2');
  var triangleEl = layeredAnimationEl.querySelector('polygon');
  var trianglePoints = triangleEl.getAttribute('points').split(' ');
  var easings = ['easeInOutQuad', 'easeInOutCirc', 'easeInOutSine', 'spring'];

  fitElementToParent(layeredAnimationEl);

  function createKeyframes(value) {
    var keyframes = [];
    for (var i = 0; i < 30; i++) keyframes.push({ value: value });
    return keyframes;
  }

  function animateShape(el) {

    var animation = anime.timeline({
      targets: el,
      duration: function() { return anime.random(600, 2200); },
      easing: function() { return easings[anime.random(0, easings.length - 1)]; },
      complete: function(anim) { animateShape(anim.animatables[0].target); },
    })
    .add({
      translateX: createKeyframes(function(el) { 
        return el.classList.contains('large') ? anime.random(-300, 300) : anime.random(-520, 520);
      }),
      translateY: createKeyframes(function(el) { 
        return el.classList.contains('large') ? anime.random(-110, 110) : anime.random(-280, 280);
      }),
      rotate: createKeyframes(function() { return anime.random(-180, 180); }),
    }, 0);
  }

  for (var i = 0; i < shapeEls.length; i++) {
    animateShape(shapeEls[i]);
  }

})();









// End wrap all functions
});