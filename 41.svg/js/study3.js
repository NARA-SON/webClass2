$(document).ready(function () {

  // //btn클래스를 클릭하면 아래를 실행한다.
  // $(".btn").click(function () { 

  //   //skill클래스에 on클래스가 없다면(It's true)
  //   if ($(".skill").hasClass("on") == false) { 
  //     //skill클래스에 on 클래스를 붙인다.
  //     $(".skill").addClass("on")
  //     //skill클래스의 리스트는 각각 아래기능적용
  //     $(".skill>li").each(function () { 
  //     //(변수)list = skill클래스의 list들
  //     let list = $(this)
  //     //(변수)percent = skill클래스 자식들 중 per클래스의 내용을 여기에 저장한다.
  //     let percent = $(this).find(".per").text()
  //     //(변수)count=0
  //     let count = 0
  //     //(변수)circle = skill클래스의 circle태그들
  //     let circle = $(this).find("circle")
      
  //     //(변수)timer = 0.01초마다 반복될 기능
  //       let timer = setInterval(function () {
  //       //count는 계속 더해진다.
  //       count++;
  //       //skill클래스의 list들 중 자식 per클래스의 내용은 count%로 바뀌게 된다.
  //         list.find(".per").text(count + "%")
  //       //skill클래스의 circle태그들은 선이 점점 채워진다.
  //         circle.css("stroke-dashoffset", 314 - (314 * (count / 100)))
  //       //만약 count수가 skill클래스 자식들 중 per클래스의 수보다 같거나 크면, 동작을 멈춘다.
  //       if (count >= percent) { clearInterval(timer)}
  //     },10)
  //   })
  //   }
  // })
  
  $(window).scroll(function () { 

  let scrollWin = $(window).scrollTop()
  let offsetSkill = $(".skill").offset().top
  let heightSkill = $(window).height()*0.5

    if (scrollWin + heightSkill >= offsetSkill) {
      if ($(".skill").hasClass("on") == false) {
        $(".skill").addClass("on")
        $(".skill>li").each(function () {
          let list = $(this)
          let percent = $(this).find(".per").text()
          let count = 0
          let circle = $(this).find("circle")
      
          let timer = setInterval(function () {
            count++;
            list.find(".per").text(count + "%")
            circle.css("stroke-dashoffset", 314 - (314 * (count / 100)))
            if (count >= percent) { clearInterval(timer) }
          }, 10)
      
        })

      }
    }

  })


})