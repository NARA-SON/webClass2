$(document).ready(function () {

  let count = 0;

  $(".sp1ImgTrain > li").eq(0).clone().appendTo(".sp1ImgTrain");
  $(".sp1ImgTrain > li").eq(1).clone().appendTo(".sp1ImgTrain");
  $(".sp1ImgTrain > li").eq(2).clone().appendTo(".sp1ImgTrain");

  // slideMove(0);

  // 클릭이벤트 : 슬라이드가 아래와같이 작동
  $(".sp1Btn").click(function(){
    count++;
    slideMove(count);
    if (count >3) {
      count=0; 
      setTimeout(turnOffTransition,700)
      setTimeout(function(){slideMove(0)},800);
    }else{
      turnOnTransition();
    }
    console.log(count)
    
    //클릭 후 on클래스가 붙은 이미지만 오른쪽 텍스트칸 400px 비우기, 투명도 정상으로 변경
    $(".sp1ImgTrain li").removeClass("on")
    $(".sp1ImgTrain li").eq(count).addClass("on")

    // 클릭 후 on클래스가 붙은 텍스트만 보인다.
    $(".sp1TxTrain li").removeClass("on")
    $(".sp1TxTrain li").eq(count).addClass("on")

  });//클릭이벤트종료

  //함수 : 기차칸 이동
  function slideMove(slideCount){
    $(".sp1ImgTrain").css("transform","translateX("+(-280*slideCount)+"px)")
  }
  //함수 : 효과중단
  function turnOffTransition(){
    $(".sp1ImgTrain").css("transition","all 0s ease 0s")
  }
  //함수 : 효과시작
  function turnOnTransition(){
    $(".sp1ImgTrain").css("transition","all 0.7s ease 0s")
  }



  })