/*
	Strata by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

    var settings = {

        // Parallax background effect?
        parallax : true,

        // Parallax factor (lower = more intense, higher = less intense).
        parallaxFactor : 20

    };

    skel.breakpoints({
        xlarge : '(max-width: 1800px)',
        large  : '(max-width: 1280px)',
        medium : '(max-width: 980px)',
        small  : '(max-width: 736px)',
        xsmall : '(max-width: 480px)'
    });

    $(function() {

        var $window = $(window),
            $body   = $('body'),
            $header = $('#header');

        // Disable animations/transitions until the page has loaded.
        $body.addClass('is-loading');

        $window.on('load', function() {
            $body.removeClass('is-loading');
        });

        // Touch?
        if(skel.vars.mobile) {

            // Turn on touch mode.
            $body.addClass('is-touch');

            // Height fix (mostly for iOS).
            window.setTimeout(function() {
                $window.scrollTop($window.scrollTop() + 1);
            }, 0);

        }

        // Fix: Placeholder polyfill.
        $('form').placeholder();

        // Prioritize "important" elements on medium.
        skel.on('+medium -medium', function() {
            $.prioritize(
                '.important\\28 medium\\29',
                skel.breakpoint('medium').active
            );
        });

        // Header.

        // Parallax background.

        // Disable parallax on IE (smooth scrolling is jerky), and on mobile platforms (= better performance).
        if(skel.vars.browser == 'ie'
            || skel.vars.mobile) {
            settings.parallax = false;
        }

        if(settings.parallax) {

            skel.on('change', function() {

                if(skel.breakpoint('medium').active) {

                    $window.off('scroll.strata_parallax');
                    $header.css('background-position', 'top left, center center');

                }
                else {

                    $header.css('background-position', 'left 0px');

                    $window.on('scroll.strata_parallax', function() {
                        $header.css('background-position', 'left ' + (-1 * (parseInt($window.scrollTop()) / settings.parallaxFactor)) + 'px');
                    });

                }

            });

        }

        // Main Sections: Two.

        particlesJS('pavi-js-particles',
            {
                "particles": {
                    "number": {
                        "value": 160,
                        "density": {
                            "enable": true,
                            "value_area": 800
                        }
                    },
                    "color": {
                        "value": "#ffffff"
                    },
                    "shape": {
                        "type": "circle",
                        "stroke": {
                            "width": 0,
                            "color": "#000000"
                        },
                        "polygon": {
                            "nb_sides": 5
                        },
                        "image": {
                            "src": "img/github.svg",
                            "width": 100,
                            "height": 100
                        }
                    },
                    "opacity": {
                        "value": 1,
                        "random": true,
                        "anim": {
                            "enable": true,
                            "speed": 1,
                            "opacity_min": 0,
                            "sync": false
                        }
                    },
                    "size": {
                        "value": 3,
                        "random": true,
                        "anim": {
                            "enable": false,
                            "speed": 4,
                            "size_min": 0.3,
                            "sync": false
                        }
                    },
                    "line_linked": {
                        "enable": false,
                        "distance": 150,
                        "color": "#ffffff",
                        "opacity": 0.4,
                        "width": 1
                    },
                    "move": {
                        "enable": true,
                        "speed": 1,
                        "direction": "none",
                        "random": true,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": false,
                        "attract": {
                            "enable": false,
                            "rotateX": 600,
                            "rotateY": 600
                        }
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "bubble"
                        },
                        "onclick": {
                            "enable": true,
                            "mode": "repulse"
                        },
                        "resize": true
                    },
                    "modes": {
                        "grab": {
                            "distance": 400,
                            "line_linked": {
                                "opacity": 1
                            }
                        },
                        "bubble": {
                            "distance": 250,
                            "size": 0,
                            "duration": 2,
                            "opacity": 0,
                            "speed": 3
                        },
                        "repulse": {
                            "distance": 400,
                            "duration": 0.4
                        },
                        "push": {
                            "particles_nb": 4
                        },
                        "remove": {
                            "particles_nb": 2
                        }
                    }
                },
                "retina_detect": true
            }
        );

        // todo: remove
        // Lightbox gallery.
        //$window.on('load', function() {
        //
        //    $('#two').poptrox({
        //        caption                : function($a) { return $a.next('h3').text(); },
        //        overlayColor           : '#2c2c2c',
        //        overlayOpacity         : 0.85,
        //        popupCloserText        : '',
        //        popupLoaderText        : '',
        //        selector               : '.work-item a.image',
        //        usePopupCaption        : true,
        //        usePopupDefaultStyling : false,
        //        usePopupEasyClose      : false,
        //        usePopupNav            : true,
        //        windowMargin           : (skel.breakpoint('small').active ? 0 : 50)
        //    });
        //
        //});

    });

})(jQuery);
