$('.weekly').owlCarousel({
    loop:true,
    margin:10,
    center:true,
    nav:true,
    animateOut: 'fadeOut',
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

$('.summer').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    center:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
})

var owl = $('.testimonials');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:10000,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})

console.log("hello world")