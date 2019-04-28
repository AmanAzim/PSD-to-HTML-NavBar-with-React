$(document).ready(function(){
    $(".header-area").sticky({topSpacing:0});

    $(".smooth-menu").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior

        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;
        var h='70'

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top - h + 'px'
        }, 1000, function(){

            // Add hash (#) to URL when done scrolling (default click behavior)

        });
        // End if
    });


    $("body").scrollspy({
        target: '.navbar',
        offset: 10
    });

    //to activate parallex effect //but making problem and without it the parallex effect is working
    //$('.paralax-bg').scrolly({bgParallax: true});
});



