let degreeSelected = 0;

$(document).ready(() => {
    let degreeSlides = $('.degree');
    let degreeDots = $('.dot');
    let nextButton = $('.next');
    let previousButton = $('.previous');
    $(degreeSlides[degreeSelected]).css('opacity', '1');
    ScrollReveal().reveal(degreeSlides[degreeSelected], {
        duration: 2000
    });

    nextButton.click(() => {
        clearSlide();
        if (degreeSelected < 3) {
            degreeSelected++;
        } else {
            degreeSelected = 0;
        }
        prepareSlide();
        reveal('right', '150px');
    });

    previousButton.click(() => {
        clearSlide();
        if (degreeSelected > 0) {
            degreeSelected--;
        } else {
            degreeSelected = 3;
        }
        prepareSlide();
        reveal('left', '100px');
    });

    degreeDots.each(index => {
        $(degreeDots[index]).click(() => {
            clearSlide();
            degreeSelected = index;
            prepareSlide();
            reveal('top', '125px');
        })
    })

    function clearSlide() {
        $(degreeSlides[degreeSelected]).css('opacity', '0');
        $(degreeDots[degreeSelected]).removeClass('selected');
        $(degreeSlides[degreeSelected]).removeClass('displayed');
    }

    function prepareSlide() {
        $(degreeSlides[degreeSelected]).addClass('displayed');
        $(degreeDots[degreeSelected]).addClass('selected');
        $(degreeSlides[degreeSelected]).removeAttr("style");
        $(degreeSlides[degreeSelected]).css('opacity', '1');
    }

    function reveal(origin, distance) {
        ScrollReveal().reveal(degreeSlides[degreeSelected], {
            origin: origin,
            distance: distance,
            duration: 1000
        });
    }
});