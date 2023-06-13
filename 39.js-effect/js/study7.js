$(document).ready(function () {
  
      let count = 0;
    $(".btnNext").click(function(e){
        e.preventDefault()
        count++;
        if(count>4){count=0}
        moveSlider(count)
})

    $(".btnPrev").click(function(e){
        e.preventDefault()
        count--;
        if(count<0){count=4}
        moveSlider(count)
})

    let timer = setInterval(function(){
        count++;
        if(count>4){count=0}
        moveSlider(count)
},2500)

    $(".station").mouseover(function(){
        clearInterval(timer)
    })

    $(".station").mouseout(function(){
        timer = setInterval(function(){
            count++;
            if(count>4){count=0}
            moveSlider(count)
        },2500)
    })

  function moveSlider(idx) {
    $(".train>li").removeClass("on")
    $(".train>li").eq(idx).addClass("on")
  }

})