window.onload = function () {
  
  let newsSlider = new Swiper(".news_station", {
    
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
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

  let noticeSlider = new Swiper(".notice", {
    
    pagination: {
      el: '.swiper-pagination2',
      // type: 'bullets',
    },
    
    breakpoints: {
      280: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 4
      }
    }

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