$(document).ready(function(){

  // each는 반복문이라고 생각하면 됨
    $(".list>li").each(function(){
      let red = Math.random() * 255;
      // 0~255 사이에 숫자가 저장됨
      // Math.random은 0~1 을 의미함
        let green = Math.random()*255;
      let blue = Math.random() * 255;
      $(this).css("background", "rgb(" + red + "," + green + "," + blue + ")")


        let tagTop = $(this).offset().top
        $(this).text("저는 전체문서기준 위에서 "+tagTop+" 떨어진 곳에 있습니다.")


        $(this).addClass("on")
    })
    // $(".list>li").addClass("on")


})