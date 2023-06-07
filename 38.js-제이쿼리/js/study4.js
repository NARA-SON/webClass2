$(document).ready(function () { 

  $(window).scroll(function () { 
    let winSCT = $(window).scrollTop()
    console.log(winSCT)

    if (winSCT > 400) { 
      $("body").addClass("dark")
    }
    else{$("body").removeClass("dark")}
  })


})