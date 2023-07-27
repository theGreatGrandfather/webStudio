$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger,.header-decorative-container").toggleClass("active");
    $("body").toggleClass("lock");
  });
});
