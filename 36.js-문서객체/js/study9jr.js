// let nextBtn = document.querySelector(".btnNext")
//   let prevBtn = document.querySelector(".btnPrev")
//   let train = document.querySelector(".train")
//   let trainList = train.children
//   let pageList = document.querySelectorAll(".pagination>li")
// let count = 0
  
//   nextBtn.addEventListener("click", function () {
//     count++
//     if(count>3){count=0}
//     train.style.transform = `translateX(-${25 * count}%)`
//     // "translateX(-"+25*count+"%)"
//     for (let i = 0; i < trainList.length; i++){
//       trainList[i].classList.remove("on")
//       pageList[i].classList.remove("on")
//     }
//     trainList[count].classList.add("on")
//     pageList[count].classList.add("on")
//   })


$(document).ready(function () { 

  let count = 0;
  //다음버튼을 눌렀을 때
  $(".btnNext").click(function () {
    count++;
    if (count > 3) { count=0}
    // $(".train").css("transform", "translateX(-" + (count * 25) + "%)")
    slideMove(count)
    $(".train>li").removeClass("on")
    $(".train>li").eq(count).addClass("on")
    $(".pagination>li").removeClass("on")
    $(".pagination>li").eq(count).addClass("on")
  })

  //이전버튼을 눌렀을 때
  $(".btnPrev").click(function () { 
    count--;
    if (count < 0) { count=3}
    // $(".train").css("transform", "translateX(-" + (count * 25) + "%)")
    slideMove(count)
    $(".train>li").removeClass("on")
    $(".train>li").eq(count).addClass("on")
    $(".pagination>li").removeClass("on")
    $(".pagination>li").eq(count).addClass("on")
  })

  function slideMove(idx) { 
    $(".train").css("transform", "translateX(-" + (idx * 25) + "%)")
  }

})