$(document).ready(function () { 

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