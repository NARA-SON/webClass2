$(document).ready(function () {

  let menuState = false;

  $(".btnMenu").click(function () {
    
    if (menuState == false) {
      $(".btnMenu").addClass("close")
      $("nav").addClass("show")
      menuState = true
    }

    else {
      $(".btnMenu").removeClass("close")
      $("nav").removeClass("show")
      menuState = false
    }
  })

})