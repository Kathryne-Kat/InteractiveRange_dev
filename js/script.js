$(document).ready(function () {
  //прикрепляем клик по заголовкам acc-head
  $("#accordeon .acc-head").on("click", f_acc);
  $("#accordeon2 .acct1-head").on("click", f_acct1); 
//   $("#accordeon-menu-mob .accm1-head").on("click", f_accm2);
//   $("#accordeon-menu-mob2 .accm2-head").on("click", f_accm3);   
});

function f_acc() {
  //скрываем все кроме того, что должны открыть
  $("#accordeon .acc-body").not($(this).next()).slideUp(100);
  // открываем или скрываем блок под заголовоком, по которому кликнули
  $(this).next().slideToggle(100);
  $("#accordeon .faq-open1").toggleClass("is-hidden");
  $("#accordeon .faq-closed1").toggleClass("is-hidden");
}
function f_acct1() {
  //скрываем все кроме того, что должны открыть
  $("#accordeon2 .acct1-body").not($(this).next()).slideUp(100);
  // открываем или скрываем блок под заголовоком, по которому кликнули
  $(this).next().slideToggle(100);
  $("#accordeon2 .faq-open2").toggleClass("is-hidden");
  $("#accordeon2 .faq-closed2").toggleClass("is-hidden");
}

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
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination-step',
      },  
  });
const swiper4 = new Swiper(".swiper-sert", { 
    autoplay: {
      delay: 2000,
    },
      loop: true,
      rewind: true,
      speed: 1000,
      grabCursor: true,
      slidesPerView: "auto",
      spaceBetween: 40,     
});
const swiper5 = new Swiper(".swiper-tech", { 
    autoplay: {
      delay: 2000,
    },
      loop: true,
      rewind: true,
      speed: 1000,
      grabCursor: true,
      slidesPerView: "auto",
      spaceBetween: 16,     
});
const swiper6 = new Swiper(".swiper-wcomp", { 
    autoplay: {
      delay: 2000,
    },
      loop: true,
      rewind: true,
      speed: 1000,
      grabCursor: true,
      slidesPerView: "auto",
      spaceBetween: 16,     
});