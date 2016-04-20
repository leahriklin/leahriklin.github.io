// Smooth scrolling

function smoothScrollTo(section) {

    $('body').animate({

        scrollTop: $(section).offset().top

    }, 750);

}
