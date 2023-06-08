$(document).ready(function () {


  
  $(window).scroll(function () { 
    let winst = $(window).scrollTop()
    let con2top = $(".con2").offset().top
    if (winst >= con2top) {
      $(".con2").addClass("on")
    } else {$(".con2").removeClass("on") }
  })


  
  // $(".wrap>div").click(function () { })
  $(".wrap>div").on("wheel DOMMouseScroll", function (event) { 
    // console.log(event)

    // 사용자의 이벤트 안에 오리지널이벤트
    let E = event.originalEvent
    let delta = 0;

    //만약 파이어폭스라면 detail값에 -40을 곱해주고
    //파이어폭스가 아니라면 
    if (E.detail) {
      delta = E.detail * -40
    }
    else { 
      delta = E.wheelDelta
    }
      
    if (delta < 0) {

      if ($(this).next().length != 0) {
        let posTop = $(this).next().offset().top
      $("html,body").stop().animate({ scrollTop: posTop }, 1000)
      }
      //마우스 휠을 내렸을 때
      //다음형제의 top값을 계산한다.
    } else {

      if ($(this).prev().length != 0) { 
        let posTop = $(this).prev().offset().top
      $("html,body").stop().animate({ scrollTop: posTop }, 1000)
      }
    }
    return false

  })


})