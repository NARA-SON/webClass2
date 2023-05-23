// window.onload = function () { 
//   let dtList = document.querySelectorAll(".tabTop>dt")
  
//   for (let i = 0; i < dtList.length; i++) { 
//     dtList[i].addEventListener("click", function () { 

//       for (let j = 0; j < dtList.length; j++) { 
//         dtList[j].classList.remove("on")
//       }

//       this.classList.add("on")
//     })
//   }

//   //---------------------
//   let dtList2 = document.querySelectorAll(".tabMenu>dt")

//   for (let k = 0; k < dtList2.length; k++) { 
//     dtList2[k].addEventListener("click", function () { 

//       for (let l = 0; l < dtList2.length; l++) { 
//         dtList2[l].classList.remove("on")
//       }

//       this.classList.add("on")
//     })
//   }
// }

// function tab(classname) { 
//   let tab = document.querySelectorAll("." + classname + ">dt")
//   for (let i = 0; i < tab.length; i++) { 
//     tab[i].addEventListener("click", function () { 
//       for (let k = 0; k < tab.length; k++) { 
//         tab[k].classList.remove("on")
//       }
//       this.classList.add("on")
//     })
//   }
// }
//함수의 정의부 (window.onload로 감싸줄 필요가 없음. 정의만 해주는 것이기 때문)

window.onload = function () { 
  tab("tabTop")
  tab("tabMenu")
  //함수의 실행부, 호출부 (window.onload로 감싸줘야함)
}