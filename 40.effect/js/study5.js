$(document).ready(function () { 

    // 마우스를 움직이면 cursor클래스가 따라다니도록
    // css에서 커서영역은 포인터이벤트를 반드시 꺼야한다.

  $(document).mousemove(function (event) { 
        // console.log(event.clientX)
    let posX = event.clientX-20
    let posY = event.clientY-20
        console.log(posX,posY)
    $(".cursor").css("left", posX + "px")
    $(".cursor").css("top", posY + "px")
    $(".cursor").addClass("on")

    $(".cursorGuideBox").css("left", (posX+150) + "px")
    $(".cursorGuideBox").css("top", posY + "px")
  })

  $(".slider").mouseover(function () { 
    $(".cursor").addClass("big")
    let txt = $(".slider").attr("data-desc")
    $(".cursorGuideBox").text(txt)
  })

  $(".slider").mouseout(function () { 
    $(".cursor").removeClass("big")
  })

})