$('.slider-top').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                arrows: false,
            }
        },
        {
            breakpoint: 767,
            settings: {
                arrows: false,
                dots: false,
            }
        }
    ]
});

$('.slider-brands').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToScroll: 3,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                arrows: false,
                adaptiveHeight: true,
                slidesToShow: 3,

            }
        }
    ]
});


/*
$('.image-photo-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.image-photo-slider-nav'
});
$('.image-photo-slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.image-photo-slider',
    dots: false,
    centerMode: false,
    focusOnSelect: true
});
*/

//tabs load
if ($("#myTabContent .tab-pane").length) {
    var wrapTab = document.getElementById("myTabContent");
    var elemTab = wrapTab.getElementsByClassName("tab-pane");

    setTimeout(function () {
        for (var i = 0; i < elemTab.length; i++) {
            elemTab[i].style.display = "";
        }
    }, 1000);
}

//fancybox
$(document).ready(function () {

    $(document).on("keydown", "form[name=WorkForm] input", function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
            $(this).next().click();
        }
    });

    $("a.gallery").fancybox({
        'titlePosition': 'outside',
        'overlayColor': '#000',
        'overlayOpacity': 0.5
    });


    var analogs = $('.leader-positiions-wrap');
    if (analogs) {
        var analogCount = analogs.data("count");
        $('.leader-positiions-wrap').slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: (analogCount < 4 ? analogCount : 4),
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        arrows: false,
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        arrows: false,
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        arrows: false,
                        slidesToShow: 1,
                        centerMode: true,
                    }
                }
            ]
        });
    }
});

//sub-menu
/*
var sectionCatalog = document.getElementsByClassName('assort-section');
var subMenu = document.getElementsByClassName('sub-menu');
for (var i = 0; i < sectionCatalog.length; i++) {
    sectionCatalog[i].addEventListener('mouseenter', showSub, false);
    sectionCatalog[i].addEventListener('mouseleave', hideSub, false);
}

function showSub(e) {
    this.childNodes[3].classList.add('active');
    
    
}

function hideSub(e) {
    if(this.childNodes[3].classList.contains("subMenu") ) {
        this.childNodes[3].classList.remove('active');
    } else {
       return false;
    }
}
*/

/*
$( function() {
    $( "#menu" ).menu();
});


$( "#menu" ).menu({
    position: { 
        my: "left top", 
        at: "right-5 top+5" 
    }
});

// Getter
//var position = $( "#menu" ).menu( "option", "position" );
 
// Setter
//$( "#menu" ).menu( "option", "position", { my: "left top", at: "right-5 top+5" } );
*/

//$( function() {
//$( "#menu" ).menu();
//});
/*
$(".sub-menu").position({
    my: "left top",  // место на позиционируемом элементе
    at: "left top",  // место на элементе относительно которого будет позиционирование
    of: ".home-page-menu-wrap"        // элемент относительно которого будет позиционирование
});
*/

//form number of goods in cart
$(document).ready(function () {
    $('body').on('click', '.number-minus, .number-plus', function () {
        var $row = $(this).closest('.number');
        var $input = $row.find('.number__text');
        var step = $row.data('step');
        var val = parseFloat($input.val());
        if ($(this).hasClass('number-minus')) {
            val -= step;
        } else {
            val += step;
        }
        $input.val(val);
        $input.change();
        return false;
    });

    $('body').on('change', '.number__text', function () {
        var $input = $(this);
        var $row = $input.closest('.number');
        var step = $row.data('step');
        var min = parseInt($row.data('min'));
        var max = parseInt($row.data('max'));
        var val = parseFloat($input.val());
        if (isNaN(val)) {
            val = step;
        } else if (min && val < min) {
            val = min;
        } else if (max && val > max) {
            val = max;
        }
        $input.val(val);
    });
});


//show mobile menu and filter
$(document).ready(function () {
    $('.menu-catalog').click(function (event) {
        event.preventDefault();
        $('.home-page-menu-wrap').addClass('mobile_show');
    })

    $('[data-target="hidden-filters"]').click(function (event) {
        event.preventDefault();
        $('.home-page-menu-wrap').removeClass('mobile_show');
    })

    $('.js-show-filter-mobile').click(function (event) {
        event.preventDefault();
        $('.filter-wrap').addClass('mobile_show');
    })

    $('[data-target="hidden-filters"]').click(function (event) {
        event.preventDefault();
        $('.filter-wrap').removeClass('mobile_show');
    })
});

$('select').selectpicker();