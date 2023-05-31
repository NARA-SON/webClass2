let tabDescription = [`<h3>title1</h3>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe enim doloribus illo voluptas accusamus porro
        eligendi minima reprehenderit quae, aperiam quasi sunt eum quas impedit tempore accusantium nihil rem velit?</p>`
    ,`<h3>title2</h3>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe enim doloribus illo voluptas accusamus porro
        eligendi minima reprehenderit quae, aperiam quasi sunt eum quas impedit tempore accusantium nihil rem velit?</p>`
    ,`<h3>title3</h3>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe enim doloribus illo voluptas accusamus porro
        eligendi minima reprehenderit quae, aperiam quasi sunt eum quas impedit tempore accusantium nihil rem velit ?</p > `]
        
$(document).ready(function () { 

  $(".tabTit>li").click(function () { 

    $(".tabTit>li").removeClass("on")
    $(this).addClass("on")
    let idx = $(this).index()
    //index()함수는 앞에 선택된 태그의 부모태그기준 순번을 리턴함
    $(".tabDes").html(tabDescription[idx])
  })

})