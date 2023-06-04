$(document).ready(function(){
  //문서가 쭉 읽힌 뒤 실행될 소스코드
  $("p").css("color","green")
  $("p").css("font-weight","bold")
  $("p").css("color","navy").css("font-weight","normal")
  //체이닝기법으로도 메서드를 활용할 수 있다.

$(".naverLink").attr("href","http://www.naver.com")
let link = $(".naverLink").attr("href")
  console.log(link)
  
$(".textframe>p:nth-of-type(1)").html("<i>text()함수</i>는 선택한 태그의 안에 들어가는 내용을 새로운 내용으로 교체할 수 있다.")
// document.querySelector(".textframe").children[0].innerHTML="<i>text()함수</i>는 선택한 태그의 안에 들어가는 내용을 새로운 내용으로 교체할 수 있다."

let textP = $(".textframe>p:nth-of-type(2)").text()
console.log(textP)

$("#a").addClass("on")
document.querySelector("#a").classList.add("on")
$("#a").removeClass("on")
document.querySelector("#a").classList.remove("on")


$(".list>li").css("border-bottom","1px solid black")

$(".list").children().css("color","blue")
// 위 한 줄은 아래 자바스크립트 언어와 같다.
// let listArray = document.querySelector(".list")?.children
// for(let i=0;i<listArray?.length;i++){
//   listArray[i].style.color="red"
// }

$(".list>li").parent().css("background","skyblue")
$(".list>li:nth-of-type(2)").next().css("text-align","center")
  $(".list>li:nth-of-type(2)").prev().css("text-align", "right")
  
let num = Number(prompt("몇번째 리스트를 활성화 시키실래요?"))

$(".listNum>li").eq(0).css("color","red")





})


