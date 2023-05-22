window.onload = function () {
  let menuState = false
  let btnMenu = document.querySelector(".btnMenu")
  let navTag = document.querySelector("nav")
  btnMenu.addEventListener("click", function () { 
    if (menuState == false) {
      //메뉴가 닫혀있는 경우 실행되는 코드
      btnMenu.classList.add("close")
      navTag.classList.add("show")
      menuState = true
    }
    else {
      // 메뉴가 열려있는 경우 실행되는 코드
      btnMenu.classList.remove("close")
      navTag.classList.remove("show")
      menuState=false  }
  })


}