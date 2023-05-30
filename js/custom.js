// Start jquery area

// Start preloader
$(window).on("load",function(){
    $("#preloader").delay(300).fadeOut("slow");
})
// end Preloader

$(document).ready(function(){
    console.log("hello");

    // start menu btn 
    $(".menubtn").click(function(){
        $(this).toggleClass("active");
        $(".menu").toggleClass("active");
    })
    // end menu btn 

    // Start Banner Section
    $("#banner_carousel").owlCarousel({
        items : 1,
        loop : true,
        dots : false
    })
    
    // End Banner Section

    // Start Latest Workds Carousel 
    $("#latest_works_carousel").owlCarousel({
        items : 3,
        loop : true
    })
    // End Latest Works Carousel
    // Start Gallery section
    $(".gallery_img").magnificPopup({
        type: 'image',
        mainClass: 'mfp-with-zoom', // this class is for CSS animation below
        gallery: {
            enabled: true, // set to true to enable gallery
          
            preload: [0,2], // read about this option in next Lazy-loading section
          
            navigateByImgClick: true,
          
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button
          
            tPrev: 'Previous (Left arrow key)', // title for left button
            tNext: 'Next (Right arrow key)', // title for right button
            tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
        },
        zoom: {
          enabled: true, // By default it's false, so don't forget to enable it
      
          duration: 300, // duration of the effect, in milliseconds
          easing: 'ease-in-out', // CSS transition easing function
      
          // The "opener" function should return the element from which popup will be zoomed in
          // and to which popup will be scaled down
          // By defailt it looks for an image tag:
          opener: function(openerElement) {
            // openerElement is the element on which popup was initialized, in this case its <a> tag
            // you don't need to add "opener" option if this code matches your needs, it's defailt one.
            return openerElement.is('img') ? openerElement : openerElement.find('img');
          }
        }
      
    });
    //   end gallery section

    // Start Client Say Section
    $("#client_carousel").owlCarousel({
        items : 1,
        nav : false,
        dots : false,
        loop : true
    })
    // End Client Say Section


})
// end jquery area

// Start Counter division
const counterUp = window.counterUp.default;
const callback = entries => {
    entries.forEach( entry => {
        const el = entry.target
        if ( entry.isIntersecting )  {
            counterUp( el, {
                duration: 4000,
                delay: 50,
            } )
        }
    } )
}
const IO = new IntersectionObserver( callback, { threshold: 1 } )
const getprojects = document.querySelector( '#projects' )
const getmembers = document.querySelector( '#members' )
const getachieve = document.querySelector( '#achieve' )
IO.observe( getprojects );
IO.observe( getmembers );
IO.observe( getachieve );
// end counter division

// start wow
new WOW().init();
// end wow