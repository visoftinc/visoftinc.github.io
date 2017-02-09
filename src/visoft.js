// Smooth Scroll
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// "What We Do" Carousel
$(function() {
  $('#whatwedo .vslider').slick({
    autoplay: true,
    arrows: false,
    infinite: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    vertical: true
  });
});

// "Welcome" Carousel
$(function() {
  $('.welcome .backgrounds').slick({
    autoplay: true,
    arrows: false,
    dots: false,
    draggable: false,
    infinite: true,
    pauseOnFocus: false,
    pauseOnHover: false
  });
});

// Blog Posts
$.getJSON('http://blogs.visoftinc.com/feeds/feed.json', function(data) {
  var post, count, $posts;
  count = 0;
  $posts = $('#blog .posts');
  $posts.empty();
  while ((count += 1) <= 6) {
    post = data[count - 1];
    $posts.append(Handlebars.templates.blog(post));
  }
});

