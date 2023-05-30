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


    // Start Latest Workds Carousel 
    $("#latest_works_carousel").owlCarousel({
        items : 3,
        loop : true
    })
    // End Latest Works Carousel

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