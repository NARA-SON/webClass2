$(document).ready(function(){

  // --------헤더 스크롤바 부드럽게
  $(window).scroll(function(){

    let winTop = $(window).scrollTop();

    if(winTop>=400){
      $("header").addClass("sma")
    }else{
      $("header").removeClass("sma")
    }
  })

  // -------전체 스크롤바 부드럽게
  $("main>div").on("wheel DOMMouseScroll", function (event) { 
    
    let E = event.originalEvent;
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

  // -------베스트셀러 슬라이더 효과적용
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
        spaceBetween:20,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
      },
    on: {
      slideChange: function () {
        console.log(bestNow.realIndex) 
        $(".bestItem>li").removeClass("inActive")
        $(".bestItem>li").eq(bestNow.realIndex).addClass("inActive")
        $(".bestItem>li").eq(bestNow.realIndex+4).addClass("inActive")
      },
      loop: true,
    }
    })

  $(".bestNow").mouseover(function () { 
    bestNow.autoplay.stop()
  })
  $(".bestNow").mouseout(function () {
    bestNow.autoplay.start()
  })

  //------------모이스춰써지 슬라이더
  // $(".msBtn").click(function () {
  //   if ($(".ms_intro>li").hasClass("on")==false)
  //   {$(".ms_intro>li").addClass("on")}
  //   else{$(".ms_intro>li").removeClass("on")}
  // })

  $(".msBtn").click(function () {
    
    let msimg = $(".ms_img>li").length;
    let count = 0;

    if (count < msimg.length) {
      $(".ms_img").css("transform", "translateX(-400px);")
    }
  })

    // -------TOP버튼
  $(".btnTop").click(function () { 
    $("html, body")
      .animate({ scrollTop: 0 }, 1000)
  })





})