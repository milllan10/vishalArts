$(document).ready(function () {
	$("#mobile-menu-toggle").click(function () {
		$("#mobile-menu").animate({ right: "0" }, 200);
		$("#mobile-menu-toggle").hide(); // Hide menu button
		$("#close-btn").show(); // Show close button
	});

	$(document).on("click", "#close-btn", function () {
		$("#mobile-menu").animate({ right: "-200px" }, 200);
		$("#close-btn").hide(); // Hide close button
		$("#mobile-menu-toggle").show(); // Show menu button
  	});
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 5000,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
$(".bandwsection, .colorsection, .oilpainsection").on("click", function () {
  var allITags = $(
    ".bandwsection i.fa-chevron-down, .colorsection i.fa-chevron-down, .oilpainsection i.fa-chevron-down"
  );
  $(".bandwprice").not($(this).siblings(".bandwprice")).slideUp();
  $(this).siblings(".bandwprice").slideToggle();
  var nearestITag = $(this).find("i.fa-chevron-down");
  if (nearestITag.length > 0) {
    nearestITag.addClass("rotatearrow");
    setTimeout(function () {
      nearestITag.toggleClass("rotate180");
    }, 10);
  }
  allITags.not(nearestITag).each(function () {
    $(this).removeClass("rotatearrow rotate180");
  });
});
