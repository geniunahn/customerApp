// delete

$(function () {
  $(".first_del_btn").on("click", function () {
    $(this).addClass("active");
    $(this).next().addClass("active");
  });
});
