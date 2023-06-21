$(document).ready(function(){

  var count = 1;

  $(".train > li").eq(0).clone().appendTo(".train");
  $(".train > li").eq(4).clone().prependTo(".train");
  slideMove(1);

  $(".btnNEXT").click(function(){
    count++;
    slideMove(count%7);
    if(count%6 == 0){
      setTimeout(turnOffTransition,700)
      setTimeout(function(){slideMove(1)},700);
      count = 1;
    }else{
      turnOnTransition();
    }
    console.log(count)

  });

  $(".btnPREV").click(function(){
    count--;
    if(count < 0){count=4;}
    slideMove(count);
  });

  function slideMove(slideCount){
    $(".train").css("transform","translateX("+-14.285714*slideCount+"%)");
  }

  function turnOffTransition(){
    $(".train").css("transition","all 0s ease 0s");
  }
  function turnOnTransition(){
    $(".train").css("transition","all 0.7s ease 0s");
  }
  // auto

  // 자바스크립트가 내가 다음버튼을 누를때 하는일을 일정한 시간마다 실행

  // var timer = setInterval(function(){
  //   // console.log("TEST");
  //   count++;
  //   if(count > 4){
  //     count=0;
  //   }
  //   $(".train").css("transform","translateX("+-20*count+"%)");
  // },2000);
  //
  // $(".station").mouseover(function(){
  //   clearInterval(timer);
  // });
  //
  // $(".station").mouseout(function(){
  //   timer = setInterval(function(){
  //     // console.log("TEST");
  //     count++;
  //     if(count > 4){
  //       count=0;
  //     }
  //     $(".train").css("transform","translateX("+-20*count+"%)");
  //   },2000);
  // });





});
