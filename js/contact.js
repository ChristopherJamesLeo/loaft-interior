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



})
// end jquery area

// start wow
new WOW().init();
// end wow
