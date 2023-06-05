$(document).ready(function () { 

    // 1. 버튼을 클릭하면
   // 2. 글씨가 파란색이 되도록

$(".textFrame").css("margin","20px 0")
  
  $(".btn1").css("border", "1px solid black").css("padding", "5px 20px").css("background","pink")

  $(".btn1").click(function (e) {
    e.preventDefault() //선택한 태그가 갖는 기본기능을 억제함.
    $(".textFrame").css("background", "pink").css("color","black")
  })

  // document.querySelector(".btn1").addEventListener("click", function () {
  //   document.querySelector(".textFrame").style.color="blue"
  // })


  // 마우스를 올리면
  // 밑줄스타일이 들어갈 수 있도록
  $(".textFrame").mouseover(function () { 
    // $("body").css("text-decoration", "underline")
    $(this).css("text-decoration", "underline")
  })

  // 마우스를 바깥으로 빼면
  // 밑줄스타일이 삭제될 수 있도록
  $(".textFrame").mouseout(function () { 
    // $("body").css("text-decoration", "none")
    $(this).css("text-decoration","none")
  })


})