//to know more https://github.com/sirxemic/jquery.ripples
$(document).ready(function () {
    // toggler btn
    $(".navbar-toggler").click(function () {
        $(".navbar-toggler").toggleClass("change")
        })
    
     //sticky navbar less padding
    $(window).scroll(function () {
        let position = $(this).scrollTop();
        console.log(position)
        if (position >= 718) {
            $(".navbar").addClass("navbar-background");
            $(".navbar").addClass("fixed-top");
        }
        else {
            $(".navbar").removeClass("navbar-background");
            $(".navbar").removeClass("fixed-top");
            } 
        })
    
    //smooth scroll
    $(".nav-item a").click(function (link) {
        link.preventDefault();
        console.log("how")
        let target = $(this).attr("href");
        
        $("html, body").stop().animate({
            scrollTop: $(target).offset().top - 25
        },3000);
    })
    
//    ripples
    $("#header, .info").ripples({
//        takes values from 1 to 20
        dropRadius: 10,
//        takes values form 0 to 1
        perturbance: 0,
    });
    
//    magnific popup
    
    $('.parent-container').magnificPopup({
      delegate: 'a', 
      type: 'image',
        gallery: {
            enabled: true
        }

    });
    
});