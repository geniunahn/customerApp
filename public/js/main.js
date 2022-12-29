//   // update
//   $(function () {
//     let textareaAttr = {
//       type: "text",
//       name: "textUpdate",
//       rows: 4,
//       cols: 50,
//       placeholder: "여기에 수정할 글을 작성해 주세요.",
//       maxlength: 255,
//       required: "",
//     };

//     let pwdAttr = {
//       type: "password",
//       name: "pwd_update",
//       placeholder: "비밀번호",
//       maxlength: 4,
//       required: "",
//     };

//     $(".list_update .up_button").on("click", function () {
//       $(this).empty();
//       $(this).prev().empty();
//       $(this).next().prepend("<textarea></textarea>");
//       $(this).next().find("textarea").attr(textareaAttr);
//       $(this).next().find("div").prepend("<input></input>");
//       $(this).next().find("div input").attr(pwdAttr);
//       $(this).next().addClass("active");
//     });
//   });

// delete

$(function () {
  $(".first_del_btn").on("click", function () {
    $(this).addClass("active");
    $(this).next().addClass("active");
  });
});
