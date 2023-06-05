window.onload = function () {
  
  let newsSlider = new Swiper(".news_station", {
    
    pagination: {
      el: '.news-pagination',
      clickable: true,
    },
    
    breakpoints: {
      280: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 3
      }
    }

  });

  let noticeSlider = new Swiper(".notice_station", {
    
    breakpoints: {
      280: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 20
      }
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    

  });

}

// function naraSwiper(selector,option){
//   this.lists = document.querySelector(selector).children[0].children.length
//   document.querySelector(selector).children[0].style.width = this.lists*100/option.perview+"%"
//   document.querySelector(selector).children[0].display = "flex"

// }
// naraSwiper(".notice",{
//   perview:2
// })