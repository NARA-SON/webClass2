$(document).ready(function () { 

  // let animationTerm = 0.3;
  // let animationDuration = 1;
  // // console.log($(".floatingTxt h1 b").length)
  // //선택한 태그들은 배열형태로 리턴된다
  // //그래서 배열의 원소의 개수를.length를 통해 구해볼 수 있다.

  // for (let i = 0; i < $(".floatingTxt h1 b").length; i++) { 
  //   $(".floatingTxt h1 b:nth-of-type(" + (i + 1) + ")").css("animation", "introAni " + animationDuration + "s ease "+(animationTerm*i)+"s forwards")
  // }

  textAni(".floatingTxt", {
    aniDelay: 0.2,
    aniSpeed: 5,
    textSize:100
  })

  textAni(".txtbox", {
    aniDelay: 0.2,
    aniSpeed: 5,
    textSize:100
  })

})