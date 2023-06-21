$(document).ready(function(){

  let result = "";
  for (i = 1; i <= 20; i++) {
    
    result+=`<li>
    <img class="small" src="./img/s${i}.jpg" alt="작은이미지${i}">
    <img class="big" src="./img/pic${i}.jpg" alt="큰이미지${i}">
    <h2 class="title">Artwork ${i}</h2>
    <p>Artwork description comes here.<br>2023.06.20</p>
    <span class="btnClose">Close</span>
    </li>`
    
  }
  $(".train").html(result)

  //-----------------------
  //클릭한 리스트에 해당하는 슬라이더로 이동해줌
  $(".stationMenu>li").click(function () {
    let idx = $(this).index()
    count=idx*5 //정해진 순번에 5를 곱한 값을 전역벽수 count에 저장함으로써 휠을 내렸을 때 이동되는 기능이 정상적으로 작동되게끔 해주는 코드
    $(".train")
      .css("transform", "translateX("+(-1000*idx)+"px)")
  })

  let count = 0;
  //-----------------------
  //휠을 내리면 하나씩 이미지 이동함
    $(".station").on("wheel DOMMouseScroll", function (event) { 
    
    let E = event.originalEvent
    let delta = 0;

    if (E.detail) {
      delta = E.detail * -40
    }
    else { 
      delta = E.wheelDelta
    }
      
      if (delta < 0) {
        //마우스휠을 내렸을 때
        console.log(count)
        count++;
        console.log(count)
        if(count>15){count=15}
      $(".train")
      .css("transform", "translateX("+(-200*count)+"px)")
      } else {
        //마우스휠을 올렸을 때
        count--;
        if (count < 0) { count=0}
        $(".train")
      .css("transform", "translateX("+(-200*count)+"px)")
    }
    return false
    })
  
  //클릭한 리스트(기차칸)의 활성화 스타일 기능
  $(".train>li").click(function () { 
    $(".train>li").removeClass("on")
    $(this).addClass("on")
    let idx = $(this).index()
    count=idx //동기화시킴
    $(".train")
      .css("transform", "translateX("+(-200*idx)+"px)")
      })

  //닫는버튼 기능
  $(".btnClose").click(function () { 
    $(".train>li").removeClass("on")
    return false
    //상위태그로 클릭이벤트가 전달되지 않게(버블링되지 않게) 설정
  })


})