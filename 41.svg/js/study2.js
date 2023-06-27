$(document).ready(function(){

  //btn클래스를 클릭하면 아래를 실행한다.
  $(".btn").click(function () {
    //li태그에 on클래스가 없다면 아래를 실행한다.
    if ($(this).parent().hasClass("on") == false) {
      //li태그에 on클래스를 추가한다.
      $(this).parent().addClass("on")
      //(변수-숫자처리)skill클래스에 모든 per클래스의 내용을 바꾸어준다.
      let per = Number($(this).parent().find(".per").text())
      //(변수)skill클래스의 모든 circle 태그 선택
      let circle = $(this).parent().find("circle")
      //(변수)skill클래스의 모든 per태그 선택
      let percetTag = $(this).parent().find(".per")
      //(변수)count=0
      let count = 0;
      //(변수)0.3초마다 count는 더해지고, skill클래스의 모든 per태그들은 내용이 count%로 바뀐다.
      //모든 circle태그는 dasharray가 0으로 가까워진다.
        let timer = setInterval(function(){
            count++
            percetTag.text(count+"%")
            circle.css("stroke-dashoffset",314-(314*(count/100)))
          if (count >= per) {
              //만약 count가 per값보다 크다면 timer 동작을 멈춘다.
                clearInterval(timer)
            }
        },30)
    }
    
  })

})