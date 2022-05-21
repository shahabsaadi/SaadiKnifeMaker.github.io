$(document).ready(function(){
  $('.component__carousel').slick({
    slidesToShow: 5,
    variableWidth: true,
    centerMode: true,
    loop: false,
    nextArrow: '<svg class="arrow arrow-next" width="41" height="79" viewBox="0 0 41 79" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.18359 1L39.3674 39.1838L1.18359 77.3675" stroke="black" stroke-width="2" stroke-linecap="round"/></svg>',
        prevArrow: '<svg class="arrow arrow-prev" width="42" height="79" viewBox="0 0 42 79" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M40.1838 1L2.00007 39.1838L40.1838 77.3675" stroke="black" stroke-width="2" stroke-linecap="round"/></svg>',
     responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });
});










let xOffset = 0;
let isMouseIn = false;
const slides = document.getElementById("slides");

setInterval(translate, 0);

function translate() {
  let offsetIncrementor = isMouseIn ? 0.05 : 0.2;
  if (xOffset >= 258 * 7) xOffset = 0;
  else xOffset = xOffset + offsetIncrementor;
  slides.style.transform = "translateX(-" + xOffset + "px)";
}

slides.addEventListener("mouseover", function (event) {
  isMouseIn = true;
});

slides.addEventListener("mouseout", function (event) {
  isMouseIn = false;
});







$('button').click(function() {
  $("article").toggleClass("paused")
});
















