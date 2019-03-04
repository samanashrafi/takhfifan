$(document).ready(function() {
  var ios = 0,
    android = 0;

  $(".section-one").click(function(e) {
    $(".section-one").addClass("active");
  });
  $(".download-box").click(function(e) {
    e.stopPropagation();
  });

  $(".btn").click(function(e) {
    $(".section-two").addClass("active");
  });

  $("#android .header").click(function(e) {
    if (android == 0) {
      $("#android .list").slideDown();
      android = 1;
    } else {
      $("#android .list").slideUp();
      android = 0;
    }
  });
  $("#ios .header").click(function(e) {
    if (ios == 0) {
      $("#ios .list").slideDown();
      ios = 1;
    } else {
      $("#ios .list").slideUp();
      ios = 0;
    }
  });
});
