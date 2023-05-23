window.onload = function () { 
  let dtList = document.querySelectorAll(".tabMenu>dt")
  
  for (i = 0; i < dtList.length; i++) { 
    dtList[i].addEventListener("click", function () { 

      for (j = 0; j < dtList.length; j++) { 
        dtList[j].classList.remove("on")
      }

      this.classList.add("on")
    })
  }
}

//dtList 변수에 모든 dt들을 선택해준다.

//조건문을 실행한다.

//조건문 1 - (i가 dt숫자만큼) - dt들을 클릭하면 해당 기능을 실행한다. 조건문 추가~!

//조건문 2 - (j가 dt숫자만큼 - on클래스를 제거한다.)