window.onload = function () {
  let btn1 = document.querySelector(".btnClick")
  btn1.addEventListener("click", function () { 
      // 클릭했을 때 실행되는 소스코드
    document.querySelector(".txtbox").style.color="black"
  })
  //클릭이벤트핸들러를 추가했다.

  let btnOpen = document.querySelector(".btnPopup")
  btnOpen.addEventListener("click", function () { 
    document.querySelector(".hiddenPopup").classList.add("show")
  })
  // 메뉴열기버튼을 누르면 팝업메뉴가 보여진다.

  let btnClose = document.querySelector(".btnPopupClose")
  btnClose.addEventListener("click", function () { 
    document.querySelector(".hiddenPopup").classList.remove("show")
  })
  // 메뉴닫기버튼을 누르면 팝업메뉴가 지워진다.
}