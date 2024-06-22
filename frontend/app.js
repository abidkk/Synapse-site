
  

$(document).ready(function() {
  $('.menu-icon').click(function() {
    var header = $('.synapse-header');
    if (header.css("margin-top") === "0px") {
      header.animate({ "margin-top": "-500px" }, 500);
    } else {
      header.animate({ "margin-top": "0px" }, 500);
    }
  });
  

  // $(function () {
  //   $('[data-toggle="popover"]').popover()
  // })

  // $(function () {
  //   $('.example-popover').popover({
  //     container: 'body'
  //   })
  // })


  $('.accordion-header').on('click', function() {
    // Close other open accordions
    $('.accordion-content').not($(this).next()).slideUp();
    // Toggle the current accordion
    $(this).next().slideToggle();
});

});

