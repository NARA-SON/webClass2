$(document).ready(function () { 

  let perView;
  let stationWidth;
  let trainWidth;

  let winWidth = $(window).width()

    if (winWidth >= 1024) { 
      console.log("pc사이즈 입니다.")
      perView = 2.5
      stationWidth = $(".station").width()
      trainWidth = stationWidth * 5 / perView
      $(".train").width(trainWidth)
    }
    else if (winWidth >= 768) { 
      console.log("tablet사이즈 입니다.")
      perView = 2
      stationWidth = $(".station").width()
      trainWidth = stationWidth * 5 / perView
      $(".train").width(trainWidth)
    }else{
      console.log("mobile사이즈 입니다.")
      perView = 1
      stationWidth = $(".station").width()
      trainWidth = stationWidth * 5 / perView
      $(".train").width(trainWidth)
    }
  

    // train클래스 너비를 변경 => train클래스의 너비를 불러와서 preView로 나눈 후 결과를 다시 적용
  
  $(window).resize(function () { 
    let winWidth = $(window).width()

    if (winWidth >= 1024) { 
      console.log("pc사이즈 입니다.")
      perView = 2.5
      stationWidth = $(".station").width()
      trainWidth = stationWidth * 5 / perView
      $(".train").width(trainWidth)
    }
    else if (winWidth >= 768) { 
      console.log("tablet사이즈 입니다.")
      perView = 2
      stationWidth = $(".station").width()
      trainWidth = stationWidth * 5 / perView
      $(".train").width(trainWidth)
    }else{
      console.log("mobile사이즈 입니다.")
      perView = 1
      stationWidth = $(".station").width()
      trainWidth = stationWidth * 5 / perView
      $(".train").width(trainWidth)
    }
  })


  let count = 0;

  // 넥스트 버튼을 눌렀을 때
  $(".btnNext").click(function (e) {
    count++
    e.preventDefault()
    //기차가 왼쪽으로 500픽셀

    if (count > 4) { count = 0 } //예외처리
    moveSlider(count)
  })

  // 이전 버튼을 눌렀을 때
  $(".btnPrev").click(function (e) {
    count--
    e.preventDefault()

    if (count < 0) { count = 0 } //예외처리
    moveSlider(count)
  })

  function moveSlider(idx) {
    $(".train").css
      ("transform", "translateX(" + (-20 * idx) + "%)")
  }
  // moveSlider(3)

})