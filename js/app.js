// Waypoint
var waypoint = new Waypoint({
  element: document.getElementById("trending"),
  handler: function (direction) {
    if (direction === "down") {
      document.querySelector(".navbar").classList.add("navbar-control");
      document.querySelector(".navbar").classList.add("animate__fadeInDown");
      document.querySelector(".navbar").classList.add("shadow-slate-400");
    } else {
      document.querySelector(".navbar").classList.remove("navbar-control");
      document.querySelector(".navbar").classList.remove("animate__fadeInDown");
      document.querySelector(".navbar").classList.remove("shadow-slate-400");
    }
  },
  offset: "80%",
});
// Carousel
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3400,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});
// Isostope
// init Isotope
var $grid = $(".movie-list").isotope({
  // options
});
// filter items on button click
$(".filter-button-group").on("click", "button", function () {
  var filterValue = $(this).attr("data-filter");
  resetFilterBtn();
  $(this).addClass("active-filter-btn");
  $(this).addClass("fw-bolder");
  $(this).removeClass("pdf-text-zinc-500");
  $grid.isotope({ filter: filterValue });
});
var filterBtn = $(".filter-button-group").find("button");
function resetFilterBtn() {
  filterBtn.each(function () {
    $(this).removeClass("active-filter-btn");
    $(this).removeClass("fw-bolder");
    $(this).addClass("pdf-text-zinc-500");
  });
}
// Toggle
$(".item-btn").click(function () {
  $(this).find("i").toggleClass("fas fa-plus-large fas fa-xmark-large");
});
