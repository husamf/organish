(function() {

    function addSeparator(nStr) {
        nStr += '';
        var x = nStr.split('.');
        var x1 = x[0];
        var x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + '.' + '$2');
        }
        return x1 + x2;
    }

    function rangeInputChangeEventHandler(e) {
        var rangeGroup = $(this).attr('name'),
            minBtn = $(this).parent().children('.min'),
            maxBtn = $(this).parent().children('.max'),
            range_min = $(this).parent().children('.range_min'),
            range_max = $(this).parent().children('.range_max'),
            minVal = parseInt($(minBtn).val()),
            maxVal = parseInt($(maxBtn).val()),
            origin = $(this).context.className;

        if (origin === 'min' && minVal > maxVal - 5) {
            $(minBtn).val(maxVal - 5);
        }
        var minVal = parseInt($(minBtn).val());
        $(range_min).html(addSeparator(minVal * 1000) + ' €');


        if (origin === 'max' && maxVal - 5 < minVal) {
            $(maxBtn).val(5 + minVal);
        }
        var maxVal = parseInt($(maxBtn).val());
        $(range_max).html(addSeparator(maxVal * 1000) + ' €');
    }

    $('input[type="range"]').on('input', rangeInputChangeEventHandler);
})();
$(function() {

    var tree = new treefilter($("#my-tree"), {
        searcher: $("input#my-search"),
        multiselect: false
    });
});
$(".slider-nav-1-1").owlCarousel({
    loop: true,
    dots: false,
    autoplay: false,
    nav: false,
    responsiveClass: true,
    responsive: true,
    responsive: {
        0: {
            items: 1,
        },
        767: {
            items: 1,
        }

    }

});

$(".slider-nav-1-products").owlCarousel({
    loop: true,
    dots: false,
    autoplay: false,
    nav: true,
    responsiveClass: true,
    responsive: true,
    responsive: {
        0: {
            items: 1,
        },
        767: {
            items: 1,
        }

    }

});
$(".slider-nav-6").owlCarousel({
    loop: true,
    dots: false,
    autoplay: false,
    nav: true,
    items: 6
});
$(".slider-nav-5").owlCarousel({
    loop: true,
    dots: true,
    autoplay: true,
    nav: true,
    responsiveClass: true,
    responsive: true,
    responsive: {
        0: {
            items: 1,
        },
        767: {
            items: 5,
        }

    }

});
$(".slider-nav-1").owlCarousel({
    loop: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    nav: false,
    responsiveClass: true,
    responsive: true,
    responsive: {
        0: {
            items: 1,
        },
        767: {
            items: 1,
        }

    }

});
$(".slider-nav-1-3000").owlCarousel({
    loop: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    nav: false,
    responsiveClass: true,
    responsive: true,
    responsive: {
        0: {
            items: 1,
        },
        767: {
            items: 1,
        }

    }

});
$(".slider-nav-3").owlCarousel({
    loop: true,
    dots: true,
    nav: true,
    autoplay: true,
    responsiveClass: true,
    responsive: true,
    responsive: {
        0: {
            items: 1,
        },
        767: {
            items: 3,
        }

    }

});

$(document).ready(function() {
    $(".check-keep-me-sign-in").click(function() {
        $(".fa-check-sign-in").toggleClass("display-none");
        $(".keep-me-sign-in").toggleClass("keep-me-sign-in-2");

    });


});
$(document).ready(function() {
    $(".check-keep-creams").click(function() {
        $(".fa-check-creams").toggleClass("display-none");
        $(".keep-creams").toggleClass("keep-creams-2");

    });


});
$(document).ready(function() {
    $(".check-keep-perfumes").click(function() {
        $(".fa-check-perfumes").toggleClass("display-none");
        $(".keep-perfumes").toggleClass("keep-perfumes-2");

    });


});
$(document).ready(function() {
    $(".check-keep-beuty").click(function() {
        $(".fa-check-beuty").toggleClass("display-none");
        $(".keep-beuty").toggleClass("keep-beuty-2");

    });


});
$(document).ready(function() {
    $(".check-keep-sale").click(function() {
        $(".fa-check-sale").toggleClass("display-none");
        $(".keep-sale").toggleClass("keep-sale-2");

    });


});
$(document).ready(function() {
    $(".check-keep-offer").click(function() {
        $(".fa-check-offer").toggleClass("display-none");
        $(".keep-offer").toggleClass("keep-offer-2");

    });


});
$(document).ready(function() {
    $(".check-keep-stock").click(function() {
        $(".fa-check-stock").toggleClass("display-none");
        $(".keep-stock").toggleClass("keep-stock-2");

    });


});
$(document).ready(function() {
    $(".collapse-mobile").click(function() {
        $(".navbar-toggler-icon-border-1").toggleClass("navbar-toggler-icon-border-1-1");
        $(".navbar-toggler-icon-border-2").toggleClass("navbar-toggler-icon-border-1-2");

    });
});
$(document).ready(function() {
    $(".collapse-mobile").dblclick(function() {
        $(".navbar-toggler-icon-border-1").toggleClass("navbar-toggler-icon-border-1-1");
        $(".navbar-toggler-icon-border-2").toggleClass("navbar-toggler-icon-border-1-2");

    });
});
$(document).ready(function() {
    $(".btn-heart-item").click(function() {
        $(this).toggleClass("btn-heart-item-2");
        $(this).toggleClass("btn-heart-item-level");

    });
});


document.addEventListener("click", function(evt) {
    var flyoutElement = document.getElementById('for-lang'),
        targetElement = evt.target; // clicked element

    do {
        if (targetElement == flyoutElement) {
            // This is a click inside. Do nothing, just return.
            $(".all-language").slideToggle();
            return;
        }
        // Go up the DOM
        targetElement = targetElement.parentNode;
    } while (targetElement);

    // This is a click outside.
    $(".all-language").slideUp();
});
// $(document).ready(function() {
//     $(".all-language").mouseleave(function() {
//         $(".all-language").slideUp();
//     });
// });
// carousels
$(document).ready(function() {
    var bigimage = $("#big");
    var thumbs = $("#thumbs");
    //var totalslides = 10;
    var syncedSecondary = true;

    bigimage
        .owlCarousel({
            items: 1,
            nav: true,
            // autoplay: true,
            dots: false,
            loop: true,
            responsiveRefreshRate: 200,
            navText: [
                '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
                '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
            ]
        })
        .on("changed.owl.carousel", syncPosition);

    thumbs
        .on("initialized.owl.carousel", function() {
            thumbs
                .find(".owl-item")
                .eq(0)
                .addClass("current");
        })
        .owlCarousel({
            items: 4,
            dots: true,
            nav: true,
            navText: [
                '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
                '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
            ],
            slideBy: 4,
            responsiveRefreshRate: 100
        })
        .on("changed.owl.carousel", syncPosition2);

    function syncPosition(el) {
        //if loop is set to false, then you have to uncomment the next line
        //var current = el.item.index;

        //to disable loop, comment this block
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }
        //to this
        thumbs
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = thumbs.find(".owl-item.active").length - 1;
        var start = thumbs
            .find(".owl-item.active")
            .first()
            .index();
        var end = thumbs
            .find(".owl-item.active")
            .last()
            .index();

        if (current > end) {
            thumbs.data("owl.carousel").to(current, 100, true);
        }
        if (current < start) {
            thumbs.data("owl.carousel").to(current - onscreen, 100, true);
        }
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            bigimage.data("owl.carousel").to(number, 100, true);
        }
    }

    thumbs.on("click", ".owl-item", function(e) {
        e.preventDefault();
        var number = $(this).index();
        bigimage.data("owl.carousel").to(number, 300, true);
    });
});