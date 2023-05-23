//예약함수,html을 끝까지 해석하고난 다음 실행됨
window.onload = function () {
  let menuState = false
   //윈도우온로드에 들어갈 필요는 없지만. 가독성을 위해 안에 담음
  let btnMenu = document.querySelector(".btnMenu")
  let navTag = document.querySelector("nav")
   //변수저장하고나면 마음대로 제어할 수 있음.
  btnMenu.addEventListener("click", function () { 
    //세줄박스는 클릭하면 아래 기능이 나오게끔 하기
    //조건문 시작. 메뉴가 닫혀있는 경우
    if (menuState == false) {
      //실행되는 코드 : 세줄박스는 닫히고, 메뉴단은 보여진다.
      btnMenu.classList.add("close")
      //세줄박스에 close클래스 추가
      navTag.classList.add("show")
      //메뉴단에 show클래스 추가
      menuState = true
      //상태는 열림으로 변경
    }
    else {
      // 메뉴가 열려있는 경우 실행되는 코드
      btnMenu.classList.remove("close")
      //세줄박스에 close클래스 삭제
      navTag.classList.remove("show")
      //메뉴단에 show클래스 삭제
      menuState = false
      //상태는 닫힘으로 변경
    }
  })
}


// window.onload = function () { 
//   let menuState = false
//   let btnMenu = document.querySelector(".btnMenu")
//   let navTag = document.querySelector("nav")
//   btnMenu.addEventListener("click", function () { 
//     if (MenuState == false) {
//       btnMenu.classList.add("close")
//       navTag.classList.add("show")
//     }
//     else { 
//       btnMenu.classList.remove("close")
//       navTag.classList.remove("show")
//     }
//   })
// }