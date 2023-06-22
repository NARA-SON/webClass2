jQuery(document).ready(function(){
   
    $(".subMenu").hide();

    $(".mainMenu>li").mouseover(function(){
        $(this).find(".subMenu").stop().slideDown(300);
    }).mouseout(function(){
        $(this).find(".subMenu").stop().slideUp(300);
    });

    var idx = 0;

    function imgSlide(){
        if(idx < 2){
            idx++;
        }else{
            idx = 0;
        }

        $(".imgSlide ul").animate({left: -100 * idx + "%"}, 1000);
    };
    
    setInterval(imgSlide,3000);


    $(".noticeWrap>ul>li:first-child").click(function(){
        $(".popupWrap").show();
    });

    $(".popup button").click(function(){
        $(".popupWrap").hide();
    });

});//ready end