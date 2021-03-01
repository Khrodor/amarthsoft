(function($) {
    "use strict";
	
	
    // WINDOW.LOAD FUNCTION start
    $(window).load(function() {
		
        // preloader
        $("#preloader").fadeOut(1200);
        $("#preloader-status").delay(200).fadeOut("slow");
		
        // elements.Timeout
        setTimeout(function() {
            $(".introduction").removeClass("OFF");
        }, 1200);
        setTimeout(function() {
            $(".overlay-left").removeClass("left-position");
        }, 1000);
        setTimeout(function() {
            $(".overlay-right").removeClass("right-position");
        }, 1000);
        setTimeout(function() {
            $(".border-top").removeClass("top-position");
        }, 1000);
        setTimeout(function() {
            $(".border-bottom").removeClass("bottom-position");
        }, 1000);
        setTimeout(function() {
            $(".border-left").removeClass("left-position");
        }, 1000);
        setTimeout(function() {
            $(".border-right").removeClass("right-position");
        }, 1000);
	
    });
    // WINDOW.LOAD FUNCTION end
	
	
    // DOCUMENT.READY FUNCTION start
	
    setAnimationFrame();
    // load parallax
    var s = skrollr.init({
        render: function(i) {
            vCenter();
        },
        mobileCheck: function() {
            return false;
        }
    });
    // navigation
    skrollr.menu.init(s, {
        animate: true,
        duration: 1000,
    });
    //
    aHeight();
    vCenter();
	
    // fullscreen
    $('#fullscreen').on('click', function() {
        if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement) {
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            }
            $('.fullscreen').toggleClass('icon-resize-enlarge icon-resize-shrink ');
        } else {
            if (document.cancelFullScreen) {
                document.cancelFullScreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            }
            $('.fullscreen').toggleClass('icon-resize-shrink  icon-resize-enlarge');
        }
        return false;
    });
	
    // kenburnsy
    $("#kenburnsy-bg").kenburnsy({
        fullscreen: true
    });
	
    // magnificPopup
    $(".popup-photo").magnificPopup({
        type: "image",
        gallery: {
            enabled: true,
            tPrev: "",
            tNext: "",
            tCounter: "%curr% / %total%"
        },
        removalDelay: 100,
        mainClass: "mfp-fade",
		preloader: false,
		fixedContentPos: true
    });
	
    // magnificPopup VIDEO
    $('.popup-video').magnificPopup({
        type: 'iframe',
        removalDelay: 100,
		mainClass: 'mfp-fade',
		preloader: false,
		fixedContentPos: true,
		disableOn: 700
    });
	
    // owlCarousel HERO slider SPLIT
    $(".hero-slider-split").owlCarousel({
		autoPlay: true,
        navigation: false,
        pagination: false,
        transitionStyle: false,
        singleItem: false,
        items: 2,
        autoHeight: true,
		autoPlay: 5000,
		stopOnHover: false
    });
	
	// owlCarousel HERO slider SLIDE
    $(".hero-slider-slide").owlCarousel({
		autoPlay: true,
        navigation: false,
        pagination: false,
        transitionStyle: false,
        singleItem: true,
        items: 1,
        autoHeight: true,
		autoPlay: 5000,
		stopOnHover: false
    });
	
	// owlCarousel HERO slider ZOOM
    $(".hero-slider-zoom").owlCarousel({
		autoPlay: true,
        navigation: false,
        pagination: false,
        transitionStyle: "fadeUp", // fade, backSlide, goDown, fadeUp
        singleItem: true,
        items: 1,
        autoHeight: true,
		autoPlay: 5000,
		stopOnHover: false
    });
	
    // owlCarousel HOME slider
    $(".idle-slides").owlCarousel({
		autoPlay: true,
        navigation: false,
        pagination: false,
        transitionStyle: "fade", // fade, backSlide, goDown, fadeUp
        singleItem: true,
        items: 1,
        autoHeight: true,
		autoPlay: 5500,
		stopOnHover: false
    });
	
	// owlCarousel ABOUT slider
    $(".about-gallery-slider").owlCarousel({
		autoPlay: true,
        navigation: true,
        pagination: true,
        transitionStyle: "fade", // fade, backSlide, goDown, fadeUp
        singleItem: true,
        items: 1,
        autoHeight: false,
		autoPlay: 5000,
		stopOnHover: true,
		navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    });
	
	// owlCarousel PHOTOS slider
    $(".photos-gallery-slider").owlCarousel({
		autoPlay: false,
        navigation: true,
        pagination: true,
        transitionStyle: false,
        singleItem: false,
        items: 4,
        autoHeight: true,
		// autoPlay: 5000,
		stopOnHover: true,
		navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    });
	
    // YTPlayer
    $(function() {
        $(".player").mb_YTPlayer();
    });
	
    // Vimeofy
    $('#videoContainment-vimeo').vimeofy({
        'url': 'https://vimeo.com/117405868', // Vimeo VIDEO URL
        'color': '#00D8D8',
        'autoplay': true,
        'loop': true,
        'delay': 5000
    });
	
    // countdown setup start
    $("#countdown").countdown({
        date: "10 October 2017 12:00:00", // countdown target date settings
        format: "on"
    }, function() {});
	
	// menu active state
    $("a.alink").on("click", function() {
        $("a.alink").removeClass("active");
        $(this).addClass("active");
    });
	
    // contact form
    $("form#form").submit(function() {
        $("form#form .error").remove();
        var s = !1;
        if ($(".requiredField").each(function() {
            if ("" === jQuery.trim($(this).val())) $(this).prev("label").text(), $(this).parent().append('<span class="error">This field is required</span>'), $(this).addClass(
                "inputError"), s = !0;
            else if ($(this).hasClass("email")) {
                var r = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                r.test(jQuery.trim($(this).val())) || ($(this).prev("label").text(), $(this).parent().append('<span class="error">Invalid email address</span>'), $(this).addClass(
                    "inputError"), s = !0);
            }
        }), !s) {
            $("form#form input.submit").fadeOut("normal", function() {
                $(this).parent().append("");
            });
            var r = $(this).serialize();
            $.post($(this).attr("action"), r, function() {
                $("form#form").slideUp("fast", function() {
                    $(this).before('<div class="success">Your email was sent successfully.</div>');
                });
            });
        }
        return !1;
    });
	
    // newsletter form
    $("form#subscribe").submit(function() {
        $("form#subscribe .subscribe-error").remove();
        var s = !1;
        if ($(".subscribe-requiredField").each(function() {
            if ("" === jQuery.trim($(this).val())) $(this).prev("label").text(), $(this).parent().append('<span class="subscribe-error">Please enter your Email</span>'),
                $(this).addClass("inputError"), s = !0;
            else if ($(this).hasClass("subscribe-email")) {
                var r = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                r.test(jQuery.trim($(this).val())) || ($(this).prev("label").text(), $(this).parent().append('<span class="subscribe-error">Please enter a valid Email</span>'), $(
                    this).addClass("inputError"), s = !0);
            }
        }), !s) {
            $("form#subscribe input.submit").fadeOut("normal", function() {
                $(this).parent().append("");
            });
            var r = $(this).serialize();
            $.post($(this).attr("action"), r, function() {
                $("form#subscribe").slideUp("fast", function() {
                    $(this).before('<div class="subscribe-success">Thank you for subscribing.</div>');
                });
            });
        }
        return !1;
    });
	
	// snow
    $(function() {
        $("#snow").each(function() {
            snowBind();
        });
    });
	
    // DOCUMENT.READY FUNCTION end
	
	
    // window.RESIZE FUNCTION start
    $(window).resize(function() {
		
        aHeight();
        vCenter();
	
    });
    // window.RESIZE FUNCTION end
	
	
	// window.SCROLL FUNCTION start
    $(window).scroll(function() {
	
        $('.step-1, .step-2, .step-3, .step-4, .step-5').each(function() {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 400) {
                $(this).addClass("animation-element");
            }
        });
	
    });
	// window.SCROLL FUNCTION end


})(jQuery);


// FUNCTIONS start

// vCenter
function vCenter() {
    $('.vcenter').each(function(i) {
        var m = Math.round(($(this).parent().height() - $(this).height()) / 2);
        $(this).css('margin-top', m > 0 ? m : 0);
    });
}

// aHeight
function aHeight() {
    if (window.innerWidth < 979) {
        $('.alink').removeAttr('data-menu-top');
        $('.step-1').css('height', $(window).height());
    } else {
        $('.step-1').css('height', '');
        $('.alink').each(function(i) {
            $(this).attr('data-menu-top', $(this).attr('data-menu'));
        });
    }
}

// mobileCheck
function mobileCheck() {
    if ((/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)) {
        return true;
    } else {
        return false;
    }
}

// animationFrame
function setAnimationFrame() {
    // step 2 - ABOUT - 1500
    $('.step-2').attr({
        'data-500': 'top: 100%',
        'data-1500': 'top: 0%', // 1500
        'data-2500': 'display: block',
        'data-3500': 'top: -100%; display: none' // 3500
    });
    // step 3 - SERVICES - 3500
    $('.step-3').attr({
        'data-0': 'display: none',
        'data-3250': 'display: block; opacity: 0; top: 0px',
        'data-3500': 'opacity: 1; top: 0px', // 3500
        'data-4500': 'opacity: 1',
        'data-5500': 'opacity: 0' // 5500
    });
    // step 4 - WORKS - 5500
    $('.step-4').attr({
        'data-4500': 'top: 100%',
        'data-5500': 'top: 0%', // 5500
        'data-6500': 'display: block',
        'data-7500': 'top: -100%; display: none' // 7500
    });
    // step 5 - CONTACT - 7500
    $('.step-5').attr({
        'data-0': 'display: none',
        'data-7250': 'display: block; opacity: 0; top: 0px',
        'data-7500': 'opacity: 1; top: 0px' // 7500
    });
    // borders
    $('.border-top').attr({
        'data-0': 'opacity: 1; top: 0%',
        'data-500': 'opacity: 1; top: -10%'
    });
    $('.border-bottom').attr({
        'data-0': 'opacity: 1; bottom: 0%',
        'data-500': 'opacity: 1; bottom: -10%'
    });
    $('.border-left').attr({
        'data-0': 'opacity: 1; left: 0%',
        'data-500': 'opacity: 1; left: -10%'
    });
    $('.border-left-2').attr({
        'data-0': 'opacity: 1; left: -10%',
        'data-500': 'opacity: 1; left: 0'
    });
    $('.border-right').attr({
        'data-0': 'opacity: 1; right: 0%',
        'data-500': 'opacity: 1; right: -10%'
    });
    // overlay
    $('.overlay-left').attr({
        'data-0': 'opacity: 1; left: 0%',
        'data-500': 'opacity: 1; left: -100%'
    });
    $('.overlay-right').attr({
        'data-0': 'opacity: 1; left: 0%',
        'data-500': 'opacity: 1; left: 100%'
    });
    // elements
    $('.unveil-time, .scroll-btn').attr({
        'data-0': 'opacity: 1',
        'data-1500': 'opacity: 0'
    });
}

// FUNCTIONS end


// styleswitch [for demonstration purposes only]
$(document).ready(function() {
    $(".corner").on("click", function() {
        $("#customizer").toggleClass("s-open");
    });

    function swapStyleSheet(sheet) {
        document.getElementById("general-css").setAttribute("href", sheet);
    }
});