$(document).ready(function(){

  // --------  Header Scroll bar
  $(window).scroll(function(){
  let winTop = $(window).scrollTop()
  if (winTop >= 400) {
    $("header").addClass("sma")
  }
  else {
    $("header").removeClass("sma")
  }
  })

  // -------- Total Scroll Bar
  $("main>div").on("wheel DOMMouseScroll", function (event) { 
    
    let E = event.originalEvent
    let delta = 0;

    if (E.detail) {delta = E.detail * -40}
    else {delta = E.wheelDelta}
      
    if (delta < 0) {
      if ($(this).next().length != 0)
      {let posTop = $(this).next().offset().top
      $("html,body").stop().animate({ scrollTop: posTop }, 1000)}
      } else {
      if ($(this).prev().length != 0)
      {let posTop = $(this).prev().offset().top
      $("html,body").stop().animate({ scrollTop: posTop }, 1000)}
      }
      return false
  })

  // --------  Main - BestNow Slider 
    let bestNow = new Swiper('.bestNow', {
    loop: true,
    direction: 'horizontal',
    autoplay: {delay: 1000},
    speed: 1000,
    breakpoints: {
      320: {
        slidesPerView:1,
        spaceBetween:0,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 5,
      },
      1024: {
        slidesPerView:5,
        spaceBetween:10,
      },
      }
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    
    })

  $(".bestNow").mouseover(function () { 
    bestNow.autoplay.stop()
  })
  $(".bestNow").mouseout(function () {
    bestNow.autoplay.start()
  })

})