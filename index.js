// Activate carousel
$('#carouselExample').carousel();

// Auto cycle through slides every 5 seconds
$('#carouselExample').carousel({
    interval: 15
});

// Enable Carousel Indicators
$(".item").click(function(){
  $("#carouselExample").carousel(1);
});

// Enable Carousel Controls
$(".left").click(function(){
  $("#carouselExample").carousel("prev");
});
