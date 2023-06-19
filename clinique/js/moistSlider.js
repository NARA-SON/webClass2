$(document).ready(function () {

    let count = 0;

  $(".msBtn").click(function () {

    count++
    if (count > 4) { count = 0 }
    $(".msImgTrain").css
      ("transform", "translateX(" + (-20 * count) + "%)")

    // if ($(".msTxTrain li").hasClass("on")==false)
    // {$(".msTxTrain li").addClass("on")}
    // else {$(".msTxTrain li").removeClass("on")}

    // 5개의 리스트의 on클래스를 싹다 지우고
    // 증가하는 카운트의 수에 맞는 .msTxTrain li 번째 리스트가 on클래스가 추가되어야 함
    // eq()함수를 사용


    })

  })