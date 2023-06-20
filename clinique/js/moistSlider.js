$(document).ready(function () {

  let count = 2;

  $(".msBtn").click(function () {

    count++
    if (count > 11) { count = 0 }
    $(".msImgTrain").css
      ("transform", "translateX(" + (-8.333 * count) + "%)")

    $(".msTxTrain li").removeClass("on")
    $(".msTxTrain li").eq(count).addClass("on")

  })

  $(".msImgTrain>li").eq(9).css("transition","none")


  })