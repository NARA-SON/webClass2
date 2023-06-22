
$(document).ready(function () { 

  let count = 0;
  setInterval(function () {
    count++
    if (count > 2) { count = 0 }
    $(".train").css("transform","translateX("+(-33.333*count)+"%)")

  }, 2500)
  

  $(".btnPop").click(function () { 
    $(".blackcover").addClass("on")
  })

  $(".btnClose").click(function (){
    $(".blackcover").removeClass("on")
   })

})