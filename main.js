$(window).on("resize scroll", function () {
    var value = $(this).scrollTop();
    if (value > $('header.hero').height()) {
      $("body").addClass("show-banner");
      $("body").removeClass("animate-form");
    } else {
      $("body").removeClass("show-banner");
      $("body").addClass("animate-form");
    }
});
$(window).scroll();

window.addEventListener("load", function () {
  
  var forms = document.getElementsByClassName("needs-validation");
  // Loop over them and prevent submission
  var validation = Array.prototype.filter.call(forms, function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (form.checkValidity() === false) { 
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add("was-validated");
      }, 
      false
    );
  });

  /** Goto position */

  $(".goto-position").click(function () {
    var href = $(this).attr("data-target");
    console.log(href);
    $([document.documentElement, document.body]).animate({scrollTop: $(href).offset().top-100}, 750)
    return false;
  });

  /** Goto form */

  $(".goto-form").click(function () {
    $([document.documentElement, document.body]).animate({ scrollTop: 0 }, 300);
    return false;
  });  
  
});
