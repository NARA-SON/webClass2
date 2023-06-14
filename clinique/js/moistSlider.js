$(document).ready(function () {

    let count = 0;

  $(".msBtn").click(function () {

    count++
    if (count > 4) { count = 0 }
    $(".msImgTrain").css
      ("transform", "translateX(" + (-20 * count) + "%)")

    if ($(".msTxTrain>li").hasClass("on")==false)
    {$(this).addClass("on")}
    else{$(this).removeClass("on")}
    })



  })