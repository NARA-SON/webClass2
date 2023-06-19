$(document).ready(function(){

  // 팝업창 닫기를 누르면 없어지기
  $(".exit").click(function(e){
    e.preventDefault()
    $(".popUp").css("display","none")
  })

  //배너 슬라이드
  let count = 0;
  setInterval(function(){
    count++;
    if(count>2){count=0}
    $(".train>li").css("transform","translateY("+(-300*count)+"px)")
  },3000)
  
  $(".tabMenu>dt").click(function(){
    $(".tabMenu>dt")NaNpxoveClass("on")
    $(this).addClass("on")
  })



})
