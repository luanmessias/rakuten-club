var windowWidth = window.innerWidth;

function initializeClock() {

    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate() + 1;
    var year = dateObj.getUTCFullYear();

    // Set the date we're counting down to
    var countDownDate = new Date("Nov " + day + ", 2018 00:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="clock"
        // document.getElementById("clock").innerHTML = days + "d " + hours + "h "
        // + minutes + "m " + seconds + "s ";

        //document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours + 1;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;


        // If the count down is finished, write some text 
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("clock").innerHTML = "EXPIRED";
        }
    }, 1000);
}


$(document).ready(function () {

    initializeClock();

    $('.header__mobsearch').click(function () {
        $('.header__mobsearch__bt').toggleClass('active');
        $('.header__search').toggleClass('active');
    });

    $('.cs_mobmenu').click(function () {
        $(this).toggleClass('active');
        $('.cs_menu').toggleClass('active');
    });


    //Thumb
    var thumbsTotal = $(".cs_prod__thumb__item").length;
    var thumbsArrows = 1;
    var thumbsMax = $(".cs_prod__thumb__item").length - 4;
    var thumbsMin = 1;

    $('#arrowUp').click(function () {
        if(thumbsMin != 1){
            $('.cs_prod__thumb__cont').animate({'top': '+=120px'},'slow');
            $(this).removeClass('inactive');
            $('#arrowDown').removeClass('inactive');
            thumbsMin--
        } else {
            $(this).addClass('inactive');
        }
    });


    $('#arrowDown').click(function () {

        if(thumbsMin <= thumbsMax){
            $('.cs_prod__thumb__cont').animate({'top': '-=120px'},'slow');
            $(this).removeClass('inactive');
            $('#arrowUp').removeClass('inactive');
            thumbsMin++
        } else {
            $(this).addClass('inactive');
        }
    });

    $('.cs_prod__thumb__item__img').click(function(){
        var url = $(this).attr('src');
        var url = url.replace('thumb/', '');
        $('.cs_prod__thumb__item').removeClass('active');
        $(this).parent().addClass('active');
        $('.cs_prod__photo__img').attr('src', url);
    });

    
    $('#arrowLeft').click(function () {
        
        if(thumbsArrows >= 1){
            if (thumbsArrows > 1){
                thumbsArrows--
            }
            $('.cs_prod__photo__img').attr('src', 'dist/img/prod1/' + thumbsArrows + '.jpg');
            $('.cs_prod__nav__arrow').removeClass('inactive');
        }

        if (thumbsArrows == 1){
            $(this).addClass('inactive');
        }

    });

    $('#arrowRight').click(function () {
        
        if(thumbsArrows <= thumbsTotal){
            if (thumbsArrows < thumbsTotal){
                thumbsArrows++
            }
            $('.cs_prod__photo__img').attr('src', 'dist/img/prod1/' + thumbsArrows + '.jpg');
            $('.cs_prod__nav__arrow').removeClass('inactive');
        }
        if (thumbsArrows == thumbsTotal){
            $(this).addClass('inactive');
        }
    });

    $('.cs_prod__nav__arrow.active').click(function(){
        eventPreventDefault();
    });

});








