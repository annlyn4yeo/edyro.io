$('.center-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  arrows: true,
  dots: false,
  speed: 300,
  centerPadding: '20px',
  infinite: true,
  autoplaySpeed: 5000,
  autoplay: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        arrows: false,
        centerPadding: '15px',
      }
    }
  ]
});

$('.navbar-brand').click(function (e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, 'slow');
})

customValidation($('#contactus-form'));

function customValidation($form) {
  jQuery.validator.addMethod("mobilenoOnly", function (value, element) {
    return /^(6|7|8|9)[0-9]\d{8}$/i.test(value);
  });
  jQuery.validator.addMethod("numbersOnly", function (value) {
    return /^[0-9]+$/i.test(value);
  });
  jQuery.validator.addMethod("charactersOnly", function (value) {
    return /^[a-zA-Z&\s]+$/i.test(value);
  });
  jQuery.validator.addMethod("emailOnly", function (value) {
    return /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i.test(value);
  });

  $form.validate({
    ignore: [],
    rules: {
      fullname: {
        required: true,
        charactersOnly: true,
      },
      mobileno: {
        required: true,
        numbersOnly: true,
        mobilenoOnly: true,
      },
      emailId: {
        required: true,
        emailOnly: {
          depends: function (elem) {
            return $form.find('[name="emailId"]').val().length != 0
          }
        },
      },
    },
    messages: {
      fullname: {
        required: $('[name="fullname"]').data("validation-msg-req"),
        charactersOnly: $('[name="fullname"]').data(
          "validation-msg-format"
        ),
      },
      mobileno: {
        required: $('[name="mobileno"]').data("validation-msg-req"),
        numbersOnly: "Please enter numbers only",
        mobilenoOnly: $('[name="mobileno"]').data("validation-msg-format"),
      },
      emailId: {
        emailOnly: $('[name="emailId"]').data("validation-msg-format"),
      },
    },
  });
}

$('#emailDiv').click(function () {
  var emailAddress = 'edyrooverseas@gmail.com';
  var subject = 'Service Enquiry';
  var mailtoLink = 'mailto:' + encodeURIComponent(emailAddress) + '?subject=' + encodeURIComponent(subject);
  window.location.href = mailtoLink;
});
