$(document).ready(function () {
  //прикрепляем клик по заголовкам acc-head
  $("#accordeon .acc-head").on("click", f_acc);
});

function f_acc() {
  //скрываем все кроме того, что должны открыть
  $("#accordeon .acc-body").not($(this).next()).slideUp(100);
  
  // открываем или скрываем блок под заголовоком, по которому кликнули
  $(this).next().slideToggle(100);

  // используем find() для поиска элементов внутри текущего блока
  $(this).find(".faq-open1, .faq-closed1").toggleClass("is-hidden");
}

$(document).ready(function() {
    $(".expandable-text").click(function() {
      $(".hidden-text").slideToggle();
      $(".visible-text").toggleClass("transp");
    });
});

$(document).ready(function () {
  $(".header-burger").on("click", function () {
    $(".mobile-menu").addClass("is-active");
  });
  $(".mobile-menu-close").on("click", function () {
    $(".mobile-menu").removeClass("is-active");
  });
});

const swiper1 = new Swiper(".swiper-whom", {
      loop: true,
      rewind: true,
      speed: 500,
      grabCursor: true,
      slidesPerView: "auto",
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination-wh',   
  }
});
const swiper2 = new Swiper(".swiper-modules", { 
      loop: true,
      rewind: true,
      speed: 500,
      grabCursor: true,
      slidesPerView: "auto",
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination-mod',
      },  
});
  const swiper3 = new Swiper(".swiper-step", { 
      loop: true,
      rewind: true,
      speed: 500,
      grabCursor: true,
      slidesPerView: "auto",
      spaceBetween: 5,
      pagination: {
        el: '.swiper-pagination-step',
      },  
  });
const swiper4 = new Swiper(".swiper-sert-1", { 
    autoplay: {
      delay: 1000,
    },
      loop: true,
      rewind: true,
      speed: 1000,
      grabCursor: true,
      slidesPerView: "auto",
      spaceBetween: 40,     
});
const swiper5 = new Swiper(".swiper-sert-2", { 
    autoplay: {
      delay: 1000,
    },
      loop: true,
      rewind: true,
      speed: 1000,
      grabCursor: true,
      slidesPerView: "auto",
      spaceBetween: 40,     
});
const swiper6 = new Swiper(".swiper-tech-1", { 
    autoplay: {
      delay: 1000,
    },
      loop: true,
      rewind: true,
      speed: 1000,
      grabCursor: true,
      slidesPerView: "auto",
      spaceBetween: 16,     
});
const swiper7 = new Swiper(".swiper-tech-2", { 
    autoplay: {
      delay: 1000,
    },
      loop: true,
      rewind: true,
      speed: 1000,
      grabCursor: true,
      slidesPerView: "auto",
      spaceBetween: 16,     
});
const swiper8 = new Swiper(".swiper-wcomp", { 
    autoplay: {
      delay: 1000,
    },
      loop: true,
      rewind: true,
      speed: 1000,
      grabCursor: true,
      slidesPerView: "auto",
      spaceBetween: 16,     
});

