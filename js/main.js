const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    560: {
        items: 2
    },
    960: {
        items: 3
    }
}


$(document).ready(function(){
    $nav=$('.nav');
    
/*----click event----*/
$('.toggle-collapse').click(function(){
    $nav.toggleClass("collapse");
})



/*------------OWL CAROUSEL-----*/
$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    responsive:responsive
});

// click to scroll top
$('.move-up span').click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
})

// AOS Instance
AOS.init();


//DARK THEME
$('.dark').click(function(){
    $nav.toggleClass("dark-theme");
    alert('Switching To Dark THEME');
})
});