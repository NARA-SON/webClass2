$(document).ready(function(){

  $(".list>li").addClass("mrtl")

  $(".list>li")each(function(){
    let result = Math.round(Math.random())
    if(result)
    {$(this).addClass("mltr")}
    else
    {$(this).addClass("mrtl")}
  })

  $(window).scroll(function(){
    let winst = $(window).scrollTop()
    // 스크롤바 위에서 얼만큼 내려왔는지 계산
    let winHeight = $(window).height()*0.75
    // 브라우저 화면의 높이를 계산

    $(".mltr,.mrtl").each(function(){
      if(winst+winHeight>$(this).offset().top){
        $(this).addClass("on")
      }
      else{
        $(this).removeClass("on")
      }
    })

    // 만약 스크롤바 위에서 얼만큼 내려왔는지 계산한 값과 브라우저 화면의 높이의 0.75곱한 후 이 둘을 더한 값이, .mltr,.mrtl클래스의 탑값보다 크다면,

    // .mltr,.mrtl클래스에 on클래스를 추가하고

    // 만약 스크롤바 위에서 얼만큼 내려왔는지 계산한 값과 브라우저 화면의 높이의 0.75곱한 후 이 둘을  더한 값이, .mltr,.mrtl클래스의 탑값보다 작다면,

    // .mltr,.mrtl클래스에 on클래스를 삭제한다.

  })

})