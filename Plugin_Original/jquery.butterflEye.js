/**
 * Created by Alastair on 28/10/2014.
 * Copyright 2014-2015 Alastair Chetcuti, UoM
 */

jQuery.noConflict();
(function ($) {

    // USE THIS TO CHECK IF THE FUNCTION IS ALREADY RUNNING
    var functionRunning = 0;
    var butterflEyeLocation = urlofdoc("jquery.butterflEye.js");

    /* ========================================================================
     *
     *						MAIN FUNCTION OF BUTTERFLEYE
     *
     * ======================================================================== */

    jQuery.fn.butterflEye = function (options) {

        // This function will change the cursor image into an Eye
        mouseCursor();

        // The default colors, positions and timers
        var defaults = {
                timerColor: '#00ff00',
                exitButton: {
                    exitButtonColor: '#d9534f', // rgb(217,83,79)
                    exitButtonTime: 1000
                },
                inputButton: {
                    inputButtonColor: '#ffffff', // rgb(255,255,255)
                    inputButtonTime: 1000
                },
                backButton: {
                    backButtonColor: '#d9534f', // rgb(217,83,79)
                    backButtonTime: 1000
                },
                actionButton: {
                    actionButtonColor: '#428bca', // rgb(66,139,202)
                    actionButtonTime: 1500
                },
                navLinkL1Button: {
                    navLinkL1ButtonColor: '#ffffff', // rgb(255,255,255)
                    navLinkL1ButtonTime: 1000
                },
                navLinkL2Button: {
                    navLinkL2ButtonColor: '#ffffff', // rgb(255,255,255)
                    navLinkL2ButtonTime: 1000
                },
                scrollButton: {
                    scrollButtonColor: '#5cb85c', // rgb(92,184,92)
                    scrollButtonTime: 800,
                    scrollButtonInterval: 500
                },
                formHoverTime: 1000,
                navHoverTime: 1000,
                initButterflEyeModalTime: 3000,
                loadingTime: 1000,
                startButterflEyeYNTime: 1000,
                overlayColor: 'rgba(0,0,0,0.9)',
                initializaButterflEyePos: 'topLeft',
                initializeButterflEyeTime: 2000,
                playPauseButterflEyeTime: 2000,
                keyboardDesign: {
                    keyboardBackgroundContrast: false,
                    keyboardButtonTime: 1000,
                    keyboardButtonColor: null
                },
                restContainerColor: '#CEA3EC',
                pieTimer: {
                    buttonCornerLocation: true,
                    pieTimerColor: "#cccccc"
                },
                startButterflEyeYNShow: true

            },
            settings = $.extend(true, defaults, options);

        jQuery(window).resize(function () {

            if (jQuery('.prepended').length) {
                jQuery('.prepended').remove();

            } else {
                if (jQuery('.displayScroll').length) {

                } else {
                    prependedScrollContainer(settings);
                }
            }


        });

        /*getScriptFile("http://code.jquery.com/ui/1.9.0/jquery-ui.min.js");
         getScriptFile("http://code.jquery.com/jquery-migrate-1.2.1.js");
         getScriptFile("js/bootstrap.js");
         getScriptFile("keyboard/js/jquery.keyboard.js");
         getScriptFile("jquery-cookie/src/jquery.cookie.js"); // TODO: not getting cookie
         getScriptFile("keyboard/js/jquery.mousewheel.js");
         getScriptFile("keyboard/js/jquery.keyboard.extension-typing.js");
         getScriptFile("keyboard/js/jquery.keyboard.extension-autocomplete.js");

         */

        var myOuterTimeout;

        var selection = userSelected();

        if (selection == null || selection == 0) {

            if (functionIsRunning === 0) {
                // Calls the function to show the start button of ButterflEye
                butterflEyeStart(settings);
            }else {}
        } else {
            // Initializes ButterflEye Functions
            initButterflEye(settings);
        }
    };

    /* ========================================================================
     *
     *				Function to show the Start Button for ButterflEye
     *
     * ======================================================================== */

    function butterflEyeStart(settings){
        if(jQuery(".start").length){
            jQuery(this).remove();
        }
        var checkingUser = userSelected();

        var butterflEyeLocation = urlofdoc("jquery.butterflEye.js");

        var pieTimerColor = settings.pieTimer.pieTimerColor;
        var startButterflEyeTime = settings.initializeButterflEyeTime;

        var initPos = settings.initializaButterflEyePos.toLowerCase();
        var top;
        var left;
        var bottom;
        var right;

        var btnColor = $('.start').css("backgroundColor");

        jQuery("<button type='button' class='eye start'><img class='imageBtn' src='" + butterflEyeLocation + "butterflEyePlayRealLarge.png' alt='startButterflEye'</img></button>").insertBefore('body');

        jQuery('.start').css({
            position: 'fixed',
            'z-index': 15500,
            'height': '15em',
            'width': '15em',
            'opacity': 0.2
        });

        switch (initPos) {
            case "topleft":
                jQuery('.start').css({
                    'top': 0,
                    'left': 0,
                    'margin-left': '1em',
                    'margin-top': '1em'
                });
                break;
            case "topright":
                jQuery('.start').css({
                    'top': 0,
                    'right': 0,
                    'margin-right': '1em',
                    'margin-top': '1em'
                });
                break;
            case "bottomleft":
                jQuery('.start').css({
                    'bottom': 0,
                    'left': 0,
                    'margin-left': '1em',
                    'margin-bottom': '1em'
                });
                break;
            case "bottomright":
                jQuery('.start').css({
                    'bottom': 0,
                    'right': 0,
                    'margin-right': '1em',
                    'margin-bottom': '1em'
                });
                break;
            default:
                alert("That position is not available");
                break;
        }
        var activityTimer;

        var startButterflEyeYNShow = settings.startButterflEyeYNShow;
        var startButterflEyeStyle;

        jQuery('.start').mouseenter(function () {

            var startPosition = $('.start').offset();
            var pieTimerStart = startButterflEyeTime / 1000;
            $('<span id="timer" style="z-index: 9999999;padding: 5px 2px 2px;color: #FFF;position: fixed;"></span>').insertAfter('.start');

            $('#timer').css({
                'top': startPosition.top - 20,
                'left': startPosition.left + 80,
                'margin': '20px',
                'width': '50px'
            });

            $('#timer').pietimer({
                timerSeconds: pieTimerStart,
                color: pieTimerColor,
                fill: pieTimerColor,
                showPercentage: true,
                callback: function () {
                    $('#timer').pietimer('reset');
                    $this.find('.percent').html(0);
                }
            });
            startButterflEyeStyle = $("<style />", {
                id  : 'newCursorStyle',
                type: 'text/css',
                html: "*{ cursor: none !important}"
            }).appendTo("head");

            $("<img class='butterflEyeCursor' src='" + butterflEyeLocation + "mouse_eye_blue_large.png' alt='ButterflEye Cursor' >").appendTo($('.start'));

            var startWidth = $('.start').width() / 2;
            var startHeight = $('.start').height() / 2;

            $('.butterflEyeCursor').css({
                'top': startPosition.top + startHeight - 20 - $(window).scrollTop(),
                'left': startPosition.left + startWidth - 20,
                'z-index': 9999999,
                'position': 'fixed'
            });
            $(this).animate({
                'opacity': 0.8
            }, startButterflEyeTime, "linear", function () {
                activityTimer = setTimeout(function () {
                    if(startButterflEyeYNShow){
                        askUser(settings);
                        initButterflEye(settings);
                    }else{
                        writeCookie(1);
                        butterflEyePlayPause(settings);
                        initButterflEye(settings);
                    }

                }, 100);
            });
        }).mouseleave(function () {

            $('#timer').remove();
            $(this).stop(true).animate({
                'opacity': 0.2
            }, 100, "linear", function () {
                clearTimeout(activityTimer);
            });
            if($('#newCursorStyle').length){
                $('#newCursorStyle').remove();
            }
            $('#newCursorStyle').remove();

            $('.butterflEyeCursor').remove();
        });
    }

    /* ========================================================================
     *
     *				Function to change the Cursor to the Eye Image
     *
     * ======================================================================== */

    function mouseCursor(){

        var style = $("<style />", {
            id  : 'cursorStyle',
            type: 'text/css',
            html: "*{ cursor: url(" + butterflEyeLocation + "mouse_eye_blue_large.png) 25 15, auto !important}"
        }).appendTo("head");

        $('p,a').on('mouseover', function(){
            var style = $("<style />", {
                id  : 'cursorStyleOpacity',
                type: 'text/css',
                html: "*{ cursor: url(" + butterflEyeLocation + "mouse_eye_blue_large_transparent.png) 25 15, auto !important}"
            }).appendTo("head");
        });

        $('p,a').on('mouseleave', function(){
            $('#cursorStyleOpacity').remove();
        });

        $('p,a').on('mouseout', function(){
            $('#cursorStyleOpacity').remove();
        });
    }

    /* ========================================================================
     *
     *			Function to add Functionality to the Scroll Buttons
     *
     * ======================================================================== */

    function scrollingFunctions(settings) {
        var incr = 0;
        var scrollTimer;
        var scrollInterval;

        var scrollButtonTime = settings.scrollButton.scrollButtonTime;
        var scrollButtonInterval = settings.scrollButton.scrollButtonInterval;
        var pieTimerColor = settings.pieTimer.pieTimerColor;

        var scrollUpStyle;
        var scrollDownStyle;
        var scrollUpPosition = $('.scroll_up').offset();
        var scrollDownPosition = $('.scroll_down').offset();

        jQuery(".scroll_up").mouseenter(function () {
            var scrollPosition = $('.scroll_up').offset();
            var pieTimerStart = scrollButtonTime / 1000;
            $('<span id="timer" style="z-index: 9999999;padding: 5px 2px 2px;color: #FFF;position: fixed;"></span>').appendTo('.scrollContainer');

            $('#timer').css({
                'top': scrollPosition.top - 20 - $(window).scrollTop(),
                'left': scrollPosition.left + 200,
                'margin': '20px',
                'width': '50px'
            });

            $('#timer').pietimer({
                timerSeconds: pieTimerStart,
                color: pieTimerColor,
                fill: pieTimerColor,
                showPercentage: true,
                callback: function () {
                    $('#timer').pietimer('reset');
                    $this.find('.percent').html(0);
                }
            });
            if($('#newCursorStyle').length){
                $('#newCursorStyle').remove();
            }
            scrollUpStyle = $("<style />", {
                id  : 'newCursorStyle',
                type: 'text/css',
                html: "*{ cursor: none !important}"
            }).appendTo("head");

            $("<img class='butterflEyeCursor' src='" + butterflEyeLocation + "mouse_eye_blue_large.png' alt='ButterflEye Cursor' >").appendTo($('.scroll_up').children());

            var scrollUpWidth = $('.scroll_up').width() / 2;
            var scrollUpHeight = $('.scroll_up').height() / 2;
            var position = $(window).scrollTop();

            $('.butterflEyeCursor').css({
                'top': scrollUpPosition.top + scrollUpHeight - 20 ,
                'left': scrollUpPosition.left + scrollUpWidth - 10,
                'z-index': 9999999,
                'position': 'fixed'
            });

            jQuery('.scroll_up').animate({
                'opacity': 0.8
            }, scrollButtonTime, "linear", function () {
                scrollInterval = setInterval(function () {

                    position = $(window).scrollTop();
                    jQuery("html, body").animate({ scrollTop: position - 100 }, 'slow');

                }, scrollButtonInterval);
            });
        }).mouseleave(function () {
            $('#timer').remove();

            jQuery('.scroll_up').stop(true).animate({
                'opacity': 1
            }, 500, "linear", function () {
                clearTimeout(scrollTimer);
                clearInterval(scrollInterval);
            });
            if($('#newCursorStyle').length){
                $('#newCursorStyle').remove();
            }
            $('#newCursorStyle').remove();

            $('.butterflEyeCursor').remove();
        });

        jQuery(".scroll_down").mouseenter(function () {
            var scrollPosition = $('.scroll_down').offset();
            var pieTimerStart = scrollButtonTime / 1000;
            $('<span id="timer" style="z-index: 9999999;padding: 5px 2px 2px;color: #FFF;position: fixed;"></span>').appendTo('.scrollContainer');

            $('#timer').css({
                'top': scrollPosition.top - 20 - $(window).scrollTop(),
                'left': scrollPosition.left + 200,
                'margin': '20px',
                'width': '50px'
            });

            $('#timer').pietimer({
                timerSeconds: pieTimerStart,
                color: pieTimerColor,
                fill: pieTimerColor,
                showPercentage: true,
                callback: function () {
                    $('#timer').pietimer('reset');
                    $this.find('.percent').html(0);
                }
            });
            if($('#newCursorStyle').length){
                $('#newCursorStyle').remove();
            }
            scrollDownStyle = $("<style />", {
                id  : 'newCursorStyle',
                type: 'text/css',
                html: "*{ cursor: none !important}"
            }).appendTo("head");

            $("<img class='butterflEyeCursor' src='" + butterflEyeLocation + "mouse_eye_blue_large.png' alt='ButterflEye Cursor' >").appendTo($('.scroll_down').children());

            var scrollDownWidth = $('.scroll_down').width() / 2;
            var scrollDownHeight = $('.scroll_down').height() / 2;
            var position = $(window).scrollTop();

            $('.butterflEyeCursor').css({
                'top': scrollDownPosition.top + scrollDownHeight - 20,
                'left': scrollDownPosition.left + scrollDownWidth - 10,
                'z-index': 9999999,
                'position': 'fixed'
            });

            jQuery('.scroll_down').animate({
                'opacity': 0.8
            }, scrollButtonTime, "linear", function () {
                scrollInterval = setInterval(function () {
                    position = $(window).scrollTop();
                    jQuery("html, body").animate({ scrollTop: position + 100 }, 'slow');
                }, scrollButtonInterval);
            });
        }).mouseleave(function () {
            $('#timer').remove();
            jQuery('.scroll_down').stop(true).animate({
                'opacity': 1
            }, 500, "linear", function () {
                clearTimeout(scrollTimer);
                clearInterval(scrollInterval);
            });
            if($('#newCursorStyle').length){
                $('#newCursorStyle').remove();
            }
            $('#newCursorStyle').remove();

            $('.butterflEyeCursor').remove();
        });
    }

    /* ========================================================================
     *
     *			Function to check if the browser has scroll bar visible
     *
     * ======================================================================== */

    function hasScrollbar() {
        // The Modern solution
        if (typeof window.innerWidth === 'number')
            return window.innerWidth > document.documentElement.clientWidth

        // rootElem for quirksmode
        var rootElem = document.documentElement || document.body

        // Check overflow style property on body for fauxscrollbars
        var overflowStyle

        if (typeof rootElem.currentStyle !== 'undefined')
            overflowStyle = rootElem.currentStyle.overflow

        overflowStyle = overflowStyle || window.getComputedStyle(rootElem, '').overflow

        // Also need to check the Y axis overflow
        var overflowYStyle

        if (typeof rootElem.currentStyle !== 'undefined')
            overflowYStyle = rootElem.currentStyle.overflowY

        overflowYStyle = overflowYStyle || window.getComputedStyle(rootElem, '').overflowY

        var contentOverflows = rootElem.scrollHeight > rootElem.clientHeight
        var overflowShown    = /^(visible|auto)$/.test(overflowStyle) || /^(visible|auto)$/.test(overflowYStyle)
        var alwaysShowScroll = overflowStyle === 'scroll' || overflowYStyle === 'scroll'

        return (contentOverflows && overflowShown) || (alwaysShowScroll)
    }

    /* ========================================================================
     *
     *				Add Prepended Scroll Buttons (for whole website)
     *
     * ======================================================================== */

    function prependedScrollContainer(settings) {

        var hContent = document.body.scrollHeight;
        var hWindow = $(window).height();
        var scroll;
        var navHeight;
        var scrollButtonColor = settings.scrollButton.scrollButtonColor;
        var scrollButtonTextColor = getContrastYIQ(scrollButtonColor);
        var restPosition = $('.restContainer').outerHeight() + 20;

        if (detectIE()) {
            jQuery("<div class='scrollContainer prepended' ></div>").prependTo('body');
            jQuery("<button class='btn btn-success scroll_up'  clear='both'><span class='glyphicon glyphicon-arrow-up iconUp'  aria-hidden='true'></span><br/><span class='spanUp' >UP</span></button>").appendTo('.scrollContainer');
            jQuery("<button class='btn btn-success scroll_down' clear='both'><span class='spanDown' >DOWN</span><br/><span class='glyphicon glyphicon-arrow-down iconDown' aria-hidden='true'></span></button>").appendTo('.scrollContainer');

            scroll = jQuery('.scrollContainer');

            scroll.css({
                float: 'right',
                right: '0',
                'top': restPosition
            });

            if (jQuery('nav').length) {
                navHeight = jQuery(this).outerHeight();

                scroll.css({
                    top: navHeight
                });
            }
            else if (jQuery('.nav').length) {
                navHeight = jQuery(this).outerHeight();

                scroll.css({
                    top: navHeight
                });
            }
            jQuery('.scroll_up, .scroll_down').css({
                'background-color': scrollButtonColor,
                'color': scrollButtonTextColor
            });
            jQuery('.spanUp, .spanDown').css({
                'color': scrollButtonTextColor
            });
        }
        else {
            if (hasScrollbar()) {
                jQuery("<div class='scrollContainer prepended col-md-offset-3 col-md-6' ></div>").prependTo('body');
                jQuery("<button class='btn btn-success scroll_up'  clear='both'><span class='glyphicon glyphicon-arrow-up iconUp'  aria-hidden='true'></span><br/><span class='spanUp' >UP</span></button>").appendTo('.scrollContainer');
                jQuery("<button class='btn btn-success scroll_down' clear='both'><span class='spanDown' >DOWN</span><br/><span class='glyphicon glyphicon-arrow-down iconDown' aria-hidden='true'></span></button>").appendTo('.scrollContainer');

                scroll = jQuery('.scrollContainer');

                scroll.css({
                    'bottom': 0
                });

                if (jQuery('nav').length) {
                    navHeight = jQuery('nav').outerHeight();
                }
                else if (jQuery('.nav').length) {
                    navHeight = jQuery('.nav').outerHeight();
                }

                jQuery('.scroll_up, .scroll_down').css({
                    display: 'inline-block',
                    width: '20em',
                    height: '9em',
                    'background-color': scrollButtonColor,
                    'color': scrollButtonTextColor
                });
                jQuery('.spanUp, .spanDown').css({
                    'color': scrollButtonTextColor
                });
            }
        }

        scrollingFunctions(settings);
    }

    /* ========================================================================
     *
     *			Function to add Scroll Buttons (for ButterflEye Layout)
     *
     * ======================================================================== */

    function scrollAccessibility(settings) {
        var hContent = document.body.scrollHeight;
        var hWindow = $(window).height();
        var scroll;

        var scrollButtonColor = settings.scrollButton.scrollButtonColor;
        var scrollButtonTextColor = getContrastYIQ(scrollButtonColor);

        if (detectIE()) {
            jQuery("<div class='scrollContainer displayScroll col-md-offset-3 col-md-6' ></div>").insertAfter('.utilityContainer');
            jQuery("<button class='btn btn-success scroll_up'  clear='both'><span class='glyphicon glyphicon-arrow-up iconUp'  aria-hidden='true'></span><br/><span class='spanUp' >UP</span></button>").appendTo('.scrollContainer');
            jQuery("<button class='btn btn-success scroll_down' clear='both'><span class='spanDown' >DOWN</span><br/><span class='glyphicon glyphicon-arrow-down iconDown' aria-hidden='true'></span></button>").appendTo('.scrollContainer');

            scroll = jQuery('.scrollContainer');

            scroll.css({
                bottom: 0
            });

            jQuery('.scroll_up, .scroll_down').css({
                display: 'inline-block',
                width: '20em',
                height: '9em',
                'background-color': scrollButtonColor,
                'color': scrollButtonTextColor
            });
            jQuery('.spanUp, .spanDown').css({
                'color': scrollButtonTextColor
            });
        }
        else {
            if (hasScrollbar()) {

                if ($('.scrollContainer').length) { //IF THE BROWSER HAS SCROLLBAR AND BUTTERFLEYE IS ACTIVE SCROLLS ARE AVAILABLE ON THE SIDE
                    $('.prepended').remove();

                    $("<div class='scrollContainer displayScroll col-md-offset-3 col-md-6' ></div>").insertAfter('.utilityContainer');
                    $("<button class='btn btn-success scroll_up'  clear='both'><span class='glyphicon glyphicon-arrow-up iconUp'  aria-hidden='true'></span><br/><span class='spanUp' >UP</span></button>").appendTo('.scrollContainer');
                    $("<button class='btn btn-success scroll_down' clear='both'><span class='spanDown' >DOWN</span><br/><span class='glyphicon glyphicon-arrow-down iconDown' aria-hidden='true'></span></button>").appendTo('.scrollContainer');

                    scroll = jQuery('.scrollContainer');

                    scroll.css({
                        bottom: 0
                    });
                    scroll.addClass('col-md-offset-3 col-md-6');

                    jQuery.each(jQuery('button', scroll), function () {
                        jQuery(this).css({
                            display: 'inline-block',
                            width: '20em',
                            height: '9em',
                            'background-color': scrollButtonColor,
                            'color': scrollButtonTextColor
                        });
                        jQuery('.spanUp, .spanDown').css({
                            'color': scrollButtonTextColor
                        });
                    });
                }
                else {
                    jQuery("<div class='scrollContainer displayScroll col-md-offset-3 col-md-6' ></div>").insertAfter('.utilityContainer');
                    jQuery("<button class='btn btn-success scroll_up'  clear='both'><span class='glyphicon glyphicon-arrow-up iconUp'  aria-hidden='true'></span><br/><span class='spanUp' >UP</span></button>").appendTo('.scrollContainer');
                    jQuery("<button class='btn btn-success scroll_down' clear='both'><span class='spanDown' >DOWN</span><br/><span class='glyphicon glyphicon-arrow-down iconDown' aria-hidden='true'></span></button>").appendTo('.scrollContainer');

                    scroll = jQuery('.scrollContainer');

                    scroll.css({
                        bottom: 0
                    });

                    jQuery('.scroll_up, .scroll_down').css({
                        display: 'inline-block',
                        width: '20em',
                        height: '9em',
                        'background-color': scrollButtonColor,
                        'color': scrollButtonTextColor
                    });
                    jQuery('.spanUp, .spanDown').css({
                        'color': scrollButtonTextColor
                    });
                }
            }
        }
        scrollingFunctions(settings);
    }

    /* ========================================================================
     *
     *				Function to get the current Url of Document
     *
     * ======================================================================== */
    function urlofdoc ( jsfile ) {

        var scriptElements = document.getElementsByTagName('script');
        var i, element, myfile;

        for( i = 0; element = scriptElements[i]; i++ ) {

            myfile = element.src;

            if( myfile.indexOf( jsfile ) >= 0 ) {
                var myurl = myfile.substring( 0, myfile.indexOf( jsfile ) );
            }
        }
        return myurl;
    }

    var playPause = 0;

    /* ========================================================================
     *
     *			Function to add the Play/Pause Button for ButterflEye
     *
     * ======================================================================== */

    function butterflEyePlayPause(settings){
        if($('.start').length){
            $('.start').remove();
        }
        if(jQuery(".play").length){
            jQuery(this).remove();
        }
        var butterflEyeLocation = urlofdoc("jquery.butterflEye.js");

        jQuery("<button type='button' class='activity play'><img class='imageBtn' src='" + butterflEyeLocation +"butterflEyePlayRealLarge.png' alt='play/pause'</img></button>").insertBefore('body');
        jQuery('.activity').css({
            top: 0,
            right: 0,
            position: 'fixed',
            'z-index': 15500,
            'height': '15em',
            'width': '15em'
        });

        var playSource = butterflEyeLocation +"butterflEyePlayRealLarge.png";
        var pauseSource = butterflEyeLocation +"butterflEyePauseRealLarge.png";

        var activityTimer;

        var pieTimerColor = settings.pieTimer.pieTimerColor;
        var playPauseButterflEyeTime = settings.playPauseButterflEyeTime;

        var activityBtnColor = $('.activity').css("backgroundColor");
        var activityPlayPauseEyeStyle;

        jQuery('.activity').mouseenter(function(){
            var startPosition = $('.activity').offset();
            var pieTimerStart = playPauseButterflEyeTime / 1000;
            $('<span id="timer" style="z-index: 9999999;padding: 5px 2px 2px;color: #FFF;position: fixed;"></span>').insertAfter('.activity');

            $('#timer').css({
                'top': startPosition.top - 20 - $(window).scrollTop(),
                'left': startPosition.left + 80,
                'margin': '20px',
                'width': '50px'
            });

            $('#timer').pietimer({
                timerSeconds: pieTimerStart,
                color: pieTimerColor,
                fill: pieTimerColor,
                showPercentage: true,
                callback: function () {
                    $('#timer').pietimer('reset');
                    $this.find('.percent').html(0);
                }
            });

            activityPlayPauseEyeStyle = $("<style />", {
                id  : 'newCursorStyle',
                type: 'text/css',
                html: "*{ cursor: none !important}"
            }).appendTo("head");

            $("<img class='butterflEyeCursor' src='" + butterflEyeLocation + "mouse_eye_blue_large.png' alt='ButterflEye Cursor' >").appendTo($('.activity'));

            var activityWidth = $('.activity').width() / 2;
            var activityHeight = $('.activity').height() / 2;

            $('.butterflEyeCursor').css({
                'top': startPosition.top + activityHeight - 20 - $(window).scrollTop(),
                'left': startPosition.left + activityWidth - 20,
                'z-index': 9999999,
                'position': 'fixed'
            });
            $('.activity').animate({
                'backgroundColor': 'green'
            }, playPauseButterflEyeTime, "linear", function(){
                if($('.imageBtn').attr('src') === playSource){
                    $('.activity').removeClass("play").addClass("pause");
                    $('.imageBtn').attr('src', pauseSource);
                    playPause = 1;
                }else{
                    $('.activity').removeClass("pause").addClass("play");
                    $('.imageBtn').attr('src', playSource);
                    playPause = 0;
                }
            });
        }).mouseleave(function(){
            $('#timer').remove();
            $(this).stop(true).animate({
                'backgroundColor': activityBtnColor
            }, 100, "linear", function () {
            });
            if($('#newCursorStyle').length){
                $('#newCursorStyle').remove();
            }
            $('#newCursorStyle').remove();

            $('.butterflEyeCursor').remove();
        });
    }

    var functionIsRunning = 0;

    function initButterflEye(settings) {

        var myTimeout;
        functionIsRunning = 1;
        var selection = userSelected();
        prependedScrollContainer(settings);


        if(selection == 1){
            butterflEyePlayPause(settings);
        }

        var restContainerColor = settings.restContainerColor;
        var restSpanTextColor = getContrastYIQ(restContainerColor);

        if($('.overlay').length){

        }else{
            jQuery("<div class='overlay'></div>").insertAfter('body');
        }

        jQuery('.overlay').css({
            'background': settings.overlayColor
        });

        var body = jQuery('body')[0];
        var target;

        /*---------------------------------------------------------
         *
         *						Form Function
         *
         ---------------------------------------------------------*/

        jQuery('form').on('mouseenter', function (e) {

            target = jQuery(e.target);
            myTimeout = setTimeout(function () {
                var selection1 = userSelected();
                target.closest('form').parent('div').addClass("expose");

                if (selection1 == null || selection1 == 0) {
                }
                else {
                    if (selection1 == 1) {
                        if (functionRunning == 0) {
                            prepScreen(target, settings);
                        }
                        else {
                        }
                    }
                }
            }, settings.formHoverTime);
        });
        jQuery('form').on('mouseleave', function () {
            clearTimeout(myTimeout);
        });

        /*---------------------------------------------------------
         *
         *					Navbar Function (nav)
         *
         ---------------------------------------------------------*/

        var navTimeout;


        jQuery('nav').on('mouseenter', function (e) {

            target = jQuery(e.target);

            navTimeout = setTimeout(function () {

                var selection2 = userSelected();
                if (selection2 == null || selection2 == 0) {

                }
                else {
                    if (selection2 == 1) {
                        if (functionRunning == 0) {
                            prepScreen(target, settings);
                        }
                        else {
                        }
                    }
                }
            }, settings.navHoverTime);
        });
        jQuery('nav').on('mouseleave', function () {
            clearTimeout(navTimeout);
        });

        /*---------------------------------------------------------
         *
         *					Navbar Function (.nav)
         *
         ---------------------------------------------------------*/

        jQuery('.nav').on('mouseenter', function (e) {

            target = jQuery(e.target);
            navTimeout = setTimeout(function () {

                var selection3 = userSelected();
                if (selection3 == null || selection3 == 0) {

                }
                else {
                    if (selection3 == 1) {
                        if (functionRunning == 0) {
                            prepScreen(target, settings);
                        }
                        else {
                        }
                    }
                }
            }, settings.navHoverTime);
        });

        jQuery('.nav').on('mouseleave', function () {
            clearTimeout(navTimeout);
        });

    }

    /* ========================================================================
     *
     *					Function to get Script from current URL
     *
     * ======================================================================== */

    function getScriptFile(url) {
        jQuery.getScript(url)
            .done(function (script, textStatus) {
                //console.log(textStatus);
            })
            .fail(function (jqxhr, settings, exception) {
                //console.log("Error in getting: " + jqxhr);
            });
        jQuery.ajaxSetup({
            cache: true
        });
    }

    /* ========================================================================
     *
     *		Function to check if the User selected Yes to start ButterflEye
     *
     * ======================================================================== */

    function userSelected(){ //CHECK COOKIE

        var cookieCheck = $.cookie('userSelectedYes');

        if(cookieCheck == 'yes'){
            return 1;
        }
        return null;
    }

    /* ========================================================================
     *
     *				Function to ask the User to start ButterflEye
     *
     * ======================================================================== */

    function askUser(settings) { //MODAL

        var modalContent =
            "<div class='modal fade forget-modal myModal' tabindex=-1 role=dialog aria-labelledby=myForgetModalLabel aria-hidden=true>" +
            "<div class='modal-dialog'>" +
            "<div class=modal-content>" +
            "<div class=modal-header>" +
            "<button type=button class=close data-dismiss=modal>" +
            "<span class='closeModal' aria-hidden=true>×</span><span class=sr-only>Close</span></button>" +
            "<h2 class=modal-title style='text-align: center;'><img src='http://localhost/butterfleye/ButterflEye.png' alt='ButterflEye Logo' style='width:70px;height:70px;left:0;'>Start ButterflEye?</h2></div>" +
            "<div class=modal-body>" +
            "<button class='btn btn-success yes' ><span class='spanYes' >YES</span></button>" +
            "<button class='btn btn-danger no' ><span class='spanNo' >NO</span></button></div>";

        jQuery(modalContent).appendTo('body');
        jQuery('.myModal').modal({
            backdrop: 'static'
        });
        jQuery(".myModal").modal('show');

        var timeout;
        var yesStyle;
        var noStyle;
        jQuery('.yes').mouseenter(function () {
            var yesPosition = $('.yes').offset();
            var pieTimerStart = settings.startButterflEyeYNTime / 1000;
            $('<span id="timer" style="z-index: 9999999;padding: 5px 2px 2px;color: #FFF;position: fixed;"></span>').insertAfter('.myModal');

            $('#timer').css({
                'top': yesPosition.top - 20,
                'left': yesPosition.left + 180,
                'margin': '20px',
                'width': '50px'
            });

            $('#timer').pietimer({
                timerSeconds: pieTimerStart,
                color: settings.pieTimer.pieTimerColor,
                fill: settings.pieTimer.pieTimerColor,
                showPercentage: true,
                callback: function () {
                    $('#timer').pietimer('reset');
                    $this.find('.percent').html(0);
                }
            });
            yesStyle = $("<style />", {
                id  : 'newCursorStyle',
                type: 'text/css',
                html: "*{ cursor: none !important}"
            }).appendTo("head");

            $("<img class='butterflEyeCursor' src='" + butterflEyeLocation + "mouse_eye_blue_large.png' alt='ButterflEye Cursor' >").appendTo($('.yes'));

            var yesWidth = $('.yes').width() / 2;
            var yesHeight = $('.yes').height() / 2;

            $('.butterflEyeCursor').css({
                'top': yesPosition.top + yesHeight - 80,
                'left': yesPosition.left - yesWidth - 170,
                'z-index': 9999999,
                'position': 'fixed'
            });
            timeout = setTimeout(function () {

                jQuery(".myModal").modal('hide');
                writeCookie(1);
                butterflEyePlayPause(settings);
            }, settings.startButterflEyeYNTime);

        }).mouseleave(function () {
            $('#timer').remove();
            clearTimeout(timeout);
            if($('#newCursorStyle').length){
                $('#newCursorStyle').remove();
            }
            $('#newCursorStyle').remove();

            $('.butterflEyeCursor').remove();
        });
        jQuery('.no, .closeModal').mouseenter(function () {
            var noPosition = $('.no').offset();
            var pieTimerStart = settings.startButterflEyeYNTime / 1000;
            $('<span id="timer" style="z-index: 9999999;padding: 5px 2px 2px;color: #FFF;position: fixed;"></span>').insertAfter('.myModal');

            $('#timer').css({
                'top': noPosition.top - 20,
                'left': noPosition.left + 180,
                'margin': '20px',
                'width': '50px'
            });

            $('#timer').pietimer({
                timerSeconds: pieTimerStart,
                color: settings.pieTimer.pieTimerColor,
                fill: settings.pieTimer.pieTimerColor,
                showPercentage: true,
                callback: function () {
                    $('#timer').pietimer('reset');
                    $this.find('.percent').html(0);
                }
            });
            noStyle = $("<style />", {
                id  : 'newCursorStyle',
                type: 'text/css',
                html: "*{ cursor: none !important}"
            }).appendTo("head");

            $("<img class='butterflEyeCursor' src='" + butterflEyeLocation + "mouse_eye_blue_large.png' alt='ButterflEye Cursor' >").appendTo($('.no'));

            var noWidth = $('.no').width() / 2;
            var noHeight = $('.no').height() / 2;

            $('.butterflEyeCursor').css({
                'top': noPosition.top + noHeight - 80,
                'left': noPosition.left - noWidth - 170,
                'z-index': 9999999,
                'position': 'fixed'
            });
            timeout = setTimeout(function () {
                jQuery(".myModal").modal('hide');
                writeCookie(0);


            }, settings.startButterflEyeYNTime);
        }).mouseleave(function () {
            $('#timer').remove();
            clearTimeout(timeout);
            if($('#newCursorStyle').length){
                $('#newCursorStyle').remove();
            }
            $('#newCursorStyle').remove();

            $('.butterflEyeCursor').remove();
        });
    }

    /* ========================================================================
     *
     *		Function to write Cookie representing the descision of the user
     *
     * ======================================================================== */

    function writeCookie(yesno) {
        if (yesno == 1) {
            $.cookie("userSelectedYes", 'yes', { expires: 1 });
            if($('#newCursorStyle').length){
                $('#newCursorStyle').remove();
            }
            $('#timer').remove();
        }
        else {
            $('.myModal').remove();
            $('.modal-backdrop').remove();

            if($('.prepended ').length){
                $('.prepended ').remove();
            }
            if($('#newCursorStyle').length){
                $('#newCursorStyle').remove();
            }
            $('#timer').remove();
        }

    }


function timedMouseenter() {
    var timer;

    timer = setTimeout(function () {
        return 'mouseenter';
    }, 2000);

}

/* ========================================================================
 *
 *				Function to detect if the browser is an IE
 *
 * ======================================================================== */

function detectIE() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf('MSIE ');
    var trident = ua.indexOf('Trident/');

    if (msie > 0 || trident > 0) {
        // IE 10 or older => return version number
        return true;
    }

    // other browser
    return false;
}

/* ========================================================================
 *
 *			Function to add clicking sound to the keyboard buttons
 *
 * ======================================================================== */

var addClickSound = function (kb) {
    // only need to run this code once per keyboard
    if (!kb.$keyboard.find('.mute').length) {
        var clicky = jQuery('#clicky')[0];
        kb.isMuted = false;
        // add mute button inside keyboard, but outside of the keysets
        jQuery('<button class="mute">mute</button>').appendTo(kb.jQuerykeyboard);
        kb.$keyboard.find('.mute').on('click', function () {
            // toggle clicky noise
            kb.isMuted = !kb.isMuted;
            clicky.muted = kb.isMuted;
            jQuery(this).text(kb.isMuted ? 'unmute' : 'mute');
        });
        // target ALL keys for clicky time!
        kb.$allKeys.on('click.audio', function () {
            // play clicky noise
            clicky.pause();
            clicky.play();
        });
    }
};

/* ========================================================================
 *
 *			Function to get the Contrast Color for button text
 *
 * ======================================================================== */

function getContrastYIQ(hexcolor){
    var checkColor = hexcolor.substr(0, 3);
    var hex;
    var temp;
    if(checkColor === "rgb"){
        temp = rgb2hex(hexcolor);
        hex = temp.substr(1, temp.length-1);
    }
    else{
        hex = hexcolor.substr(1, hexcolor.length-1);
    }
    var r = parseInt(hex.substr(0,2),16);
    var g = parseInt(hex.substr(2,2),16);
    var b = parseInt(hex.substr(4,2),16);
    var yiq = ((r*299)+(g*587)+(b*114))/1000;
    return (yiq >= 128) ? 'black' : 'white';
}

var hexDigits = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];

/* ========================================================================
 *
 *				Function to convert rgb to hex color
 *
 * ======================================================================== */

function rgb2hex(rgb) {
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

function hex(x) {
    return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
}

/* ========================================================================
 *
 *		Function to Prepare the screen and represent the Form/Navbar
 *
 * ======================================================================== */

function prepScreen(target, settings) {

    var loadingTimeout;

    if (jQuery('.play').length) {

        var loadingContent =
            "<div class='modal fade forget-modal loadingModal' tabindex=-1 role=dialog aria-labelledby=myForgetModalLabel aria-hidden=true>" +
            "<div class='modal-dialog loadingDialog'>" +
            "<div class=modal-content>" +
            "<div class=modal-header>" +
            "<h2 class=modal-title style='text-align: center;'><img src='http://localhost/butterfleye/ButterflEye.png' alt='ButterflEye Logo' style='width:70px;height:70px;left:0;'>Please Wait...</h2></div>" +
            "<div class=modal-body>" +
            "<h3 class='loadingModalInfo' style='text-align: center;'><img src='http://localhost/butterfleye/busy.gif' /></h3></div>";

        jQuery(loadingContent).appendTo('body');
        jQuery('.loadingModal').modal('show');

        jQuery('.loadingDialog').css({
            'padding-top': '10%'
        });
        jQuery('.loadingModal').css({
            'z-index': 99999
        });

        jQuery('.modal-backdrop').css({
            'z-index': 99998
        });

        loadingTimeout = setTimeout(function () {
            jQuery('.loadingModal').modal('hide');

        }, settings.loadingTime);

        var inputLinks;
        var buttonLinks;
        var inputContainerClass = ".inputContainer";
        var btnContainerClass = ".btnContainer";
        var helperContainerClass = '.helperContainer';
        var navLinkContainerClass = '.navLinkContainer';
        var scrollContainerClass = '.scrollContainer';
        var utility = ".utilityContainer";

        jQuery('.overlay').empty();
        var bodyTextColor = jQuery('body').css('color');
        jQuery('body').css({
            color: '#000'
        });

        jQuery("body").wrapInner("<div class='butterfleyeWrapper forContainers col-md-8' />");

        var inputBtnColor = settings.inputButton.inputButtonColor;
        var inputBtnTime = settings.inputButton.inputButtonTime;

        var actionBtnColor = settings.actionButton.actionButtonColor;
        var actionBtnTime = settings.actionButton.actionButtonTime;

        var exitBtnColor = settings.exitButton.exitButtonColor;
        var exitBtnTime = settings.exitButton.exitButtonTime;

        var backBtnColor = settings.backButton.backButtonColor;
        var backBtnTime = settings.backButton.backButtonTime;

        var navLinkL1BtnColor = settings.navLinkL1Button.navLinkL1ButtonColor;
        var navLinkL1BtnTime = settings.navLinkL1Button.navLinkL1ButtonTime;

        var navLinkL2BtnColor = settings.navLinkL2Button.navLinkL2ButtonColor;
        var navLinkL2BtnTime = settings.navLinkL2Button.navLinkL2ButtonTime;

        var keyboardBackgroundContrast = settings.keyboardDesign.keyboardBackgroundContrast;
        var keyboardButtonTime = settings.keyboardDesign.keyboardButtonTime;
        var keyboardButtonColor = settings.keyboardDesign.keyboardButtonColor;

        var timerBtnColor = settings.timerColor;

        var buttonCornerLocation = settings.pieTimer.buttonCornerLocation;

        var pieTimerColor = settings.pieTimer.pieTimerColor;

        var inputBtnTextColor = getContrastYIQ(inputBtnColor);
        var actionBtnTextColor = getContrastYIQ(actionBtnColor);
        var exitBtnTextColor = getContrastYIQ(exitBtnColor);
        var backBtnTextColor = getContrastYIQ(backBtnColor);
        var navLinkL1BtnTextColor = getContrastYIQ(navLinkL1BtnColor);
        var navLinkL2BtnTextColor = getContrastYIQ(navLinkL2BtnColor);

        var activityHeight = $('.activity').outerHeight() + 20;

        functionRunning = 1;
        while (functionRunning == 1) {

            /*---------------------------------------------------------
             *
             *							Form Render
             *
             ---------------------------------------------------------*/

            if (target.is('form') || target.is('.form-control') || target.parent().is('form') || target.parents('form').length) {

                jQuery('.overlay').css({
                    top: 0,
                    left: 0,
                    height: '100%'
                });
                jQuery('.expose').css('position', 'relative');
                return jQuery(this).each(function () {

                    target.closest('form').addClass('access');
                    $('.access').css({
                        'opacity': 0.5
                    });

                    target.closest('form').parent('div').wrapAll("<div class='formWrapper'/>");
                    jQuery('.formWrapper').css({
                        'position': 'fixed',
                        'top': 0,
                        'left': '40%',
                        'z-index': 16000
                    });

                    var myNewTimeout;

                    myNewTimeout = setTimeout(function () {

                        jQuery('.expose').css('z-index', '15500');
                        jQuery('.overlay').fadeIn(300);
                        if (jQuery(btnContainerClass).length) {
                            jQuery('.btnContainer').remove();
                        }
                        if (jQuery(helperContainerClass).length) {
                            jQuery('.helperContainer').remove();
                        }

                        var domElement;
                        var k = 0;
                        var overlay = ".overlay";

                        if (jQuery('.access').length) {
                            jQuery("<div class='inputContainer expose col-md-2'></div>").insertBefore('.forContainers');
                            jQuery("<div class='utilityContainer expose col-md-2'></div>").insertAfter('.forContainers');
                            jQuery("<div class='btnContainer expose'></div>").appendTo('.utilityContainer');
                            jQuery("<div class='helperContainer expose'></div>").appendTo('.utilityContainer');
                        }

                        jQuery('.expose').closest('div.container').addClass('col-md-12');

                        jQuery.each(jQuery('input', '.access'), function () {

                            jQuery(this).addClass("input" + ++k);

                            var content;

                            if (jQuery(this).is(':checkbox')) {
                                content = jQuery(this).parent().text().toUpperCase(); // TODO: RE-CHECK DUE TO NO LABELS PRESENT
                                jQuery("<button  clear='both' class='btn btn-default inputCls input" + k + " '><span class='inputSpan' style='font-size:160%;white-space: normal;font-weight: bold; '>" + content + "</span></button>").appendTo(inputContainerClass);
                                jQuery(".inputCls").css({
                                    "background-color": inputBtnColor
                                });
                                jQuery(".inputSpan").css({
                                    "color": inputBtnTextColor
                                });
                            }
                            else {
                                if (jQuery(this).attr('placeholder')) {
                                    content = jQuery(this).attr('placeholder').toUpperCase();
                                }
                                else {
                                    content = jQuery(this).parent().children('label').text().toUpperCase();
                                }

                                jQuery("<button clear='both' class='btn btn-default inputCls input" + k + "'><span class='inputSpan' style='font-size:160%;white-space: normal; font-weight: bold;'>" + content + "</span></button>").appendTo(inputContainerClass);
                                jQuery(".inputCls").css({
                                    "background-color": inputBtnColor
                                });
                                jQuery(".inputSpan").css({
                                    "color": inputBtnTextColor
                                });
                            }
                            domElement = jQuery(this).get(0);
                        });

                        jQuery.each(jQuery('textarea', '.access'), function () {
                            jQuery(this).addClass("input" + ++k);

                            var content;

                            if (jQuery(this).attr('placeholder')) {
                                content = jQuery(this).attr('placeholder').toUpperCase();
                            }
                            else {
                                content = jQuery(this).parent().children('label').text().toUpperCase();
                            }

                            jQuery("<button clear='both' class='btn btn-default inputCls input" + k + "'><span class='inputSpan' style='font-size:160%;white-space: normal; font-weight: bold;'>" + content + "</span></button>").appendTo(inputContainerClass);
                            jQuery(".inputCls").css({
                                "background-color": inputBtnColor
                            });
                            jQuery(".inputSpan").css({
                                "color": inputBtnTextColor
                            });

                        });

                        jQuery.each(jQuery('button', '.access'), function () {
                            if (jQuery(this).is(':submit')) {

                                jQuery(this).addClass("sub");

                                var btnClass = jQuery(this).attr('class');

                                jQuery("<button class='btn btn-primary submitBtn' type=submit id=\"inp" + k + "\" ><span class='spanBtn' >" + jQuery(this).html().toUpperCase() + "</span></button>").appendTo(btnContainerClass);

                                jQuery(".submitBtn").css({
                                    "background-color": actionBtnColor
                                });

                                jQuery(".spanBtn").css({
                                    "color": actionBtnTextColor
                                })
                            }
                            domElement = jQuery(this).get(0);
                        });

                        var btnContainerHeight = jQuery(".submitBtn").outerHeight() + 20;
                        var btnContainerWidth = jQuery(".submitBtn").outerWidth() + 20;

                        jQuery('.activity').css({
                            'top': 20,
                            'right': btnContainerWidth + 20
                        });

                        jQuery("<button class='btn btn-danger exit' ><span class='spanExit' >EXIT!</span></button>").appendTo(helperContainerClass);
                        jQuery(".exit").css({
                            'background-color': exitBtnColor
                        });
                        jQuery(".spanExit").css({
                            "color": exitBtnTextColor
                        });

                        var myNewTimeout2;
                        var submitButtonColor = jQuery('.submitBtn').css('backgroundColor');
                        var submitEyeStyle;

                        jQuery.each(jQuery('button', btnContainerClass), function () {
                            jQuery(this).mouseenter(function () {
                                if(playPause == 0) {
                                    var actionButton = $(this);
                                    var utilityContainerWidth = $('.utilityContainer').outerWidth();
                                    var actionPosition = actionButton.offset();
                                    var pieTimerAction = actionBtnTime / 1000;
                                    $('<span id="timer" style="z-index: 9999999;padding: 5px 2px 2px;color: #FFF;position: absolute;"></span>').insertAfter('.utilityContainer');
                                    if (buttonCornerLocation) {
                                        $('#timer').css({
                                            'top': actionPosition.top - 20,
                                            'left': actionPosition.left + 120,
                                            'margin': '20px',
                                            'width': '50px'
                                        });
                                    } else {
                                        $('#timer').css({
                                            'top': actionPosition.top,
                                            'left': actionPosition.left - utilityContainerWidth + 50
                                        });
                                    }

                                    $('#timer').pietimer({
                                        timerSeconds: pieTimerAction,
                                        color: pieTimerColor,
                                        fill: pieTimerColor,
                                        showPercentage: true,
                                        callback: function () {
                                            $('#timer').pietimer('reset');
                                            $this.find('.percent').html(0);
                                        }
                                    });
                                    if($('#newCursorStyle').length){
                                        $('#newCursorStyle').remove();
                                    }

                                    submitEyeStyle = $("<style />", {
                                        id  : 'newCursorStyle',
                                        type: 'text/css',
                                        html: "*{ cursor: none !important}"
                                    }).appendTo("head");

                                    $("<img class='butterflEyeCursor' src='" + butterflEyeLocation + "mouse_eye_blue_large.png' alt='ButterflEye Cursor' >").appendTo(actionButton.children());

                                    var submitWidth = actionButton.width() / 2;
                                    var submitHeight = actionButton.height() / 2;

                                    $('.butterflEyeCursor').css({
                                        'top': actionPosition.top + submitHeight - 20 - $(window).scrollTop(),
                                        'left': actionPosition.left + submitWidth - 10,
                                        'z-index': 9999999,
                                        'position': 'fixed'
                                    });

                                    $(this).animate({
                                        "backgroundColor": "green"
                                    }, actionBtnTime, "linear", function () {
                                        myNewTimeout2 = setTimeout(function () {
                                            jQuery('.sub').trigger('click');
                                        }, 100);
                                    });
                                }else{}
                            }).mouseleave(function () {
                                $('#timer').remove();
                                $(this).stop(true).animate({
                                    'backgroundColor': submitButtonColor,
                                    'width': '14em'
                                }, 100, "linear", function () {
                                    clearTimeout(myNewTimeout2);
                                });
                                if($('#newCursorStyle').length){
                                    $('#newCursorStyle').remove();
                                }
                                $('#newCursorStyle').remove();

                                $('.butterflEyeCursor').remove();
                            });
                            $('#timer').remove();

                        });

                        var keyBoard;
                        scrollAccessibility(settings);

                        var exitButtonColor = jQuery('.exit').css('backgroundColor');
                        var exitEyeStyle;
                        var exitButton = $('.exit');
                        jQuery(".exit").mouseenter(function () {

                            var utilityContainerWidth = $('.utilityContainer').outerWidth();
                            var exitPosition = exitButton.offset();
                            var pieTimerExit = exitBtnTime / 1000;
                            $('<span id="timer" style="z-index: 9999999;padding: 5px 2px 2px;color: #FFF;position: absolute;"></span>').insertAfter('.utilityContainer');

                            if(buttonCornerLocation) {
                                $('#timer').css({
                                    'top': exitPosition.top - 20,
                                    'left': exitPosition.left + 120,
                                    'margin': '20px',
                                    'width': '50px'
                                });
                            }else{
                                $('#timer').css({
                                    'top': exitPosition.top,
                                    'left': exitPosition.left - utilityContainerWidth + 50
                                });
                            }
                            $('#timer').pietimer({
                                timerSeconds: pieTimerExit,
                                color: pieTimerColor,
                                fill: pieTimerColor,
                                showPercentage: true,
                                callback: function() {
                                    $('#timer').pietimer('reset');
                                    $this.find('.percent').html(0);
                                }
                            });
                            if($('#newCursorStyle').length){
                                $('#newCursorStyle').remove();
                            }
                            exitEyeStyle = $("<style />", {
                                id  : 'newCursorStyle',
                                type: 'text/css',
                                html: "*{ cursor: none !important}"
                            }).appendTo("head");

                            $("<img class='butterflEyeCursor' src='" + butterflEyeLocation + "mouse_eye_blue_large.png' alt='ButterflEye Cursor' >").appendTo(exitButton.children());

                            var exitWidth = exitButton.width() / 2;
                            var exitHeight = exitButton.height() / 2;

                            $('.butterflEyeCursor').css({
                                'top': exitPosition.top + exitHeight - 20 - $(window).scrollTop(),
                                'left': exitPosition.left + exitWidth - 10,
                                'z-index': 9999999,
                                'position': 'fixed'
                            });
                            $('.exit').animate({
                                'background-color': "green"
                            }, exitBtnTime, "linear", function () {
                                myNewTimeout2 = setTimeout(function () {

                                    jQuery('.overlay').fadeOut(300, function () {
                                        jQuery('.expose').css('z-index', '1');
                                        jQuery('.overlay').css('top', '');
                                        jQuery('.overlay').css('left', '');
                                        jQuery('.overlay').css('height', '');
                                        jQuery('.inputContainer').remove();
                                        jQuery('.btnContainer').remove();
                                        jQuery('.helperContainer').remove();
                                        jQuery('.restContainer').css({
                                            'right': 0,
                                            'top': activityHeight
                                        });
                                        jQuery('.activity').css({
                                            top: 0,
                                            right: 0,
                                            position: 'fixed',
                                            'z-index': 15500,
                                            'height': '15em',
                                            'width': '15em'
                                        });
                                        jQuery('.expose').parents('.container').removeClass('col-md-12');
                                        var inputClasses;
                                        jQuery.each(jQuery('input', '.access'), function () {
                                            inputClasses = jQuery(this);
                                            inputClasses.removeClass('inputCls');
                                            inputClasses.removeClass(inputClasses.attr('class').match(/\b(input\d+)\b/)[1]);
                                        });
                                        $('.access').css({
                                            'opacity': 1
                                        });
                                        jQuery('form').removeClass('access');
                                        jQuery('.butterfleyeWrapper').removeClass('forContainers');
                                        jQuery('form').parent('div').removeClass("expose");
                                        jQuery('.utilityContainer').remove();
                                        jQuery(".butterfleyeWrapper").contents().unwrap();
                                        jQuery(".formWrapper").contents().unwrap();
                                        jQuery('.audio').remove();
                                        jQuery('.scrollContainer').remove();
                                        prependedScrollContainer(settings);
                                        $('#timer').remove();
                                        jQuery('body').css({
                                            color: bodyTextColor
                                        });
                                        if($('#newCursorStyle').length){
                                            $('#newCursorStyle').remove();
                                        }

                                        $('.ui-autocomplete').remove();
                                        jQuery('.loadingModal').remove();
                                    });

                                    functionRunning = 0;
                                    target.removeClass('expose');
                                }, 100);
                            });

                        }).mouseleave(function () {
                            $('#timer').remove();
                            jQuery('.exit').stop(true).animate({
                                'backgroundColor': exitButtonColor,
                                'width': '14em'
                            }, 100, "linear", function () {
                                clearTimeout(myNewTimeout2);
                            });
                            if($('#newCursorStyle').length){
                                $('#newCursorStyle').remove();
                            }
                            $('#newCursorStyle').remove();

                            $('.butterflEyeCursor').remove();

                        });
                        $('#timer').remove();

                        var textAreaRows;
                        var className;
                        var inputTimer;
                        var inputContainerButtons = jQuery('.inputCls').css('backgroundColor');
                        var newStyle;
                        jQuery.each(jQuery('button', '.inputContainer'), function () {
                            var input = $(this);
                            jQuery(this).mouseenter(function () {
                                className = jQuery(this).attr('class').match(/\b(input\d+)\b/)[1];

                                var pieTimerInput = inputBtnTime / 1000;

                                if(playPause == 0) {

                                    var inputWidth = input.width() / 2;
                                    var inputHeight = input.height() / 2;
                                    var inputPosition = input.offset();
                                    var inputContainerWidth = $('.inputContainer').outerWidth();

                                    $('<span id="timer" style="z-index: 9999999;padding: 5px 2px 2px;color: #FFF;position: fixed;"></span>').insertAfter('.inputContainer');
                                    if (buttonCornerLocation) {
                                        $('#timer').css({
                                            'top': inputPosition.top - 20 - $(window).scrollTop(),
                                            'left': inputPosition.left + 120,
                                            'margin': '20px',
                                            'width': '50px'
                                        });
                                    } else {
                                        $('#timer').css({
                                            'top': inputPosition.top - $(window).scrollTop(),
                                            'left': inputPosition.left + inputContainerWidth - 50
                                        });
                                    }
                                    $('#timer').pietimer({
                                        timerSeconds: pieTimerInput,
                                        color: pieTimerColor,
                                        fill: pieTimerColor,
                                        showPercentage: true,
                                        callback: function () {
                                            $('#timer').pietimer('reset');
                                            $this.find('.percent').html(0);
                                        }
                                    });
                                    if($('#newCursorStyle').length){
                                        $('#newCursorStyle').remove();
                                    }
                                    newStyle = $("<style />", {
                                        id  : 'newCursorStyle',
                                        type: 'text/css',
                                        html: "*{ cursor: none !important}"
                                    }).appendTo("head");

                                    $("<img class='butterflEyeCursor' src='" + butterflEyeLocation + "mouse_eye_blue_large.png' alt='ButterflEye Cursor' >").appendTo(input.children());
                                    $('.butterflEyeCursor').css({
                                        'top': inputPosition.top + inputHeight - 20 - $(window).scrollTop(),
                                        'left': inputPosition.left + inputWidth - 10,
                                        'z-index': 9999999,
                                        'position': 'fixed'
                                    });
                                    $(this).animate({
                                        'background-color': "green"
                                    }, inputBtnTime, "linear", function () {

                                        inputTimer = setTimeout(function () {

                                            jQuery.each(jQuery('input', '.access'), function () {
                                                if (jQuery(this).hasClass(className)) {
                                                    if (jQuery(this).is(":checkbox")) {

                                                        jQuery(this).trigger('click');
                                                        $('#timer').remove();
                                                    }
                                                    else {

                                                        jQuery(this).focus();
                                                        jQuery(this).focus();
                                                        $('#timer').remove();
                                                    }
                                                }
                                            });

                                            $.each(jQuery('textarea', '.access'), function () {
                                                if (jQuery(this).hasClass(className)) {
                                                    jQuery(this).focus();
                                                    jQuery(this).focus();
                                                    textAreaRows = jQuery(this).attr("rows");
                                                    $('#timer').remove();
                                                }
                                            });
                                        }, 100);
                                    });
                                }else{}

                            }).mouseleave(function () {
                                $('#timer').remove();
                                $(this).stop(true).animate({
                                    'backgroundColor': inputContainerButtons,
                                    'width': '14em'
                                }, 100, "linear", function () {
                                    clearTimeout(inputTimer);

                                });
                                if($('#newCursorStyle').length){
                                    $('#newCursorStyle').remove();
                                }
                                $('#newCursorStyle').remove();

                                $('.butterflEyeCursor').remove();
                            });
                            $('#timer').remove();

                        });
                        var classnm;
                        var textareaRowNos = 0;
                        var keyBoardWidth;
                        var keyBoardHeight;
                        var keyBoardLeft;

                        jQuery('input, textarea', '.access').on('focus', function () {

                            var timer;
                            var inputThis = $(this);
                            var inputType = inputThis.attr("type");

                            var value;
                            var arr = [];

                            var availableTags =
                                ["the","be","to","of","and","a","in","that","have","I","it","for","not","on","with","he","as","you","do","at","this","but","his","by",
                                    "from","they","we","say","her","she","or","an","will","my","one","all","would","there","their","what","so","up","out","if","about","who",
                                    "get","which","go","me","when","make","can","like","time","no","just","him","know","take","person","into","year","your","good","some",
                                    "could","them","see","other","than","then","now","look","only","come","its","over","think","also","back","after","use","two","how","our",
                                    "work","first","well","way","even","new","want","because","any","these","give","day","most","us",
                                    "James","David","Christopher","George","Ronald",
                                    "John","Richard","Daniel","Kenneth","Anthony",
                                    "Robert","Charles","Paul","Steven","Kevin",
                                    "Michael","Joseph","Mark","Edward","Jason",
                                    "William","Thomas","Donald","Brian","Jeff",
                                    "Mary","Jennifer","Lisa","Sandra","Michelle",
                                    "Patricia","Maria","Nancy","Donna","Laura",
                                    "Linda","Susan","Karen","Carol","Sarah",
                                    "Barbara","Margaret","Betty","Ruth","Kimberly",
                                    "Elizabeth","Dorothy","Helen","Sharon","Deborah"];

                            var audio = '<div class="audio" style="display: none;"><audio id="clicky" controls>' +
                                '<source src="data:audio/mpeg;base64,//uQBAAAAjszTU0UoABEwVm6oZgATc1FrbkoMBG6onU3JzYCCgAABJE+RlEwAAgcJOc5xQhCEIRhMAAIKNQjHDgo35CfznyEJ/85zn/8hPqc53IHxc9iwQg+8vy4IHMEwfUCDgQOFw+XP8MOgAZYlEERohbu7oiIidAwAEIAHxwAQYH5v/8A9//mH/AM+OPgc6H8AA8//wd///+Iwd+GYA7gBgZHP/+ADogB8fge/ofsOB4/H6OBxfpwOBoIAViCPx1gGj4GdgMWq6An0QTqrLoXJAF7eDYsPcLh7/DV4yZgQwqfWbNrIaKDKw0w5DtT68TgxfTKJLjMf/4asJYvjJiEg4AuEFyiCf//4ucrqHIIgXyPFzmyBD+///5uXG2Hw4XA+H44H44HowAALY6TdPDlw/ehgaegdx64kIdbwGiA3XC0eyuNMSgVHvfyXNSJhqgf//EfhdQVRmx2jN12R/nxwJplQskH//wCpimEVA9GEKhc2BsADZgYitDZf/kFFlnwy2LLL6JwZgWYPCprX0BXSTSFOHoy4TzfIHoraea6//uSBAmAAs1L3+8YYAhbqZu94wwAC8mfbbQygCl7s632hiAEqCMKJMwbbMR8HNYb9VTDGYUBE5xjEkzd/M9jWMBDw6x6hSjM0pfV1y//y6Sl+3M8E1KOv5KDNu/GYm9VCgq+uv/4NA0CoKh0sgBJRtsuc9GbQZ2naamEwdQCoIcKJPBgR5Ls1NZav0wwE0XzXhRjL2LjH3zjdbuszLZRucy/+w43+zGwYtvFHK3VWiVXv5/hgzGtVRIiCiP7qwFw0E4dalOGAhgnk5G4kS6A50bcMsAhQEB6geysLRIWLR1Iecwq1zD5R7C6ZyI97mVHu5FZEcpTfUVblo+hnrK323NqUiHKW48lnKS5WlKUtHtbdBJEmEnZH95S/9yf1pT/+984YnEPhRMcjqhVtVqNoAQFDpBxNWYwpBQMBKpbysyHLcxjTFaYUZ24VitaoC1OV1VlUpWKj2aWiJKUKQzIrWZeYMKMaWizlLdHdfihyao7lK9RKC2KCHcpUT/6t9P///4JdSAAAAQLBIKxYLA2JBgBZSU8wQhZfMCZV8PC/gMH2P/7kgQPAALBUtfuIKAAYwpbvcKgAIYUhs+8EYA5G43WN4aQALL3EhIPtR/CYKBw8LaFT42LDFYWM6y/zDRUODjtpMb/Ua0UGBMd8yGf/lIr7iIdTcvmN//TqK+///W2LA2LRoNRqNhaLRqNwBil4ABIWNjA2XIIyvB4ORltf4Dgai58xc/+ZJAcszLX/41CxCX5X//5d0OyeaKWp//yhKOyRUgUXVf4a///wiIglCYCGhHXr/hp////2jxjeWsI6RGAAA23JJEAAP/4Qhkqrxj1ZmwoCJgYKJXZm6GAhWFAV2CgICQYCFYUCAhRgrgkVwb0AAAlqW2AkAalxj9mYwoCJ2FIVFMEQqasKhYEg1MKgBDKgWBEERTAiDRNZCRCpFqElZpEhBUsDQlDv+JToieJgaWGlAq4RWpMQU1FMy45OC40qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqo="' +
                                'controls></source>' +
                                '<source src="data:audio/ogg;base64,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"' +
                                'controls></source>' +
                                '</audio></div>';

                            jQuery('body').append(audio);

                            if (inputType == 'number') {
                                inputThis.keyboard({
                                    keyBinding: 'click',
                                    stayOpen: false,
                                    layout: 'custom',
                                    customLayout: {
                                        'default': [
                                            '/ ( ) {b}',
                                            '7 8 9 *',
                                            '4 5 6 +',
                                            '1 2 3 -',
                                            '0 . {a} {c}'
                                        ]
                                    },
                                    position: {
                                        of: 'body', // null (attach to input/textarea) or a jQuery object (attach elsewhere)
                                        my: '0',
                                        at: '0',
                                        collision: 'fit fit'
                                    },
                                    visible: function (e, keyboard, el) {
                                        var keyboardBtnColor;

                                        jQuery('.activity').css({
                                            'top': btnContainerHeight,
                                            'width': '12em',
                                            'right': 0
                                        });
                                        jQuery('.imageBtn').css({
                                            'width': '5em',
                                            'height': '5em'
                                        });

                                        keyBoard = keyboard;

                                        if(keyboardBackgroundContrast === true){
                                            jQuery('.ui-keyboard-keyset').css({
                                                'background-color': '#000000'
                                            });
                                        }
                                        else{
                                            jQuery('.ui-keyboard-keyset').css({
                                                'background-color': '#ffffff'
                                            });
                                        }
                                        jQuery('button.ui-keyboard-accept').css({
                                            'background-color': submitButtonColor
                                        });
                                        var uiKeyboardAcceptButtonColor = $('button.ui-keyboard-accept').css('background-color');
                                        var textAcceptColor = getContrastYIQ(uiKeyboardAcceptButtonColor);

                                        $('button.ui-keyboard-accept').children().css({
                                            'color': textAcceptColor
                                        });

                                        jQuery('button.ui-keyboard-cancel').css({
                                            'background-color': exitButtonColor
                                        });

                                        var uiKeyboardCancelButtonColor = $('button.ui-keyboard-cancel').css('background-color');
                                        var textCancelColor = getContrastYIQ(uiKeyboardCancelButtonColor);

                                        $('button.ui-keyboard-cancel').children().css({
                                            'color': textCancelColor
                                        });
                                        jQuery.each(jQuery('.ui-keyboard-button', '.ui-keyboard-keyset'), function () {

                                            var btn = jQuery(this);

                                            keyboardBtnColor = jQuery(btn).css('background-color');

                                            btn.mouseenter(function (e) {

                                                keyboardBtnColor = jQuery(this).css('background-color');
                                                btn.css({
                                                    'background-color': keyboardButtonColor
                                                });

                                                if (btn.has('.ui-state-hover')) {

                                                    jQuery(this).animate({
                                                        'background-color': "green"
                                                    }, keyboardButtonTime, "linear", function () {

                                                        btn.on("click",function(){
                                                            btn.stop(true).animate({
                                                                'backgroundColor': keyboardBtnColor
                                                            },10);
                                                        });
                                                        btn.click();

                                                        timer = setInterval(function () {

                                                            btn.animate({
                                                                'backgroundColor': 'green'
                                                            }, keyboardButtonTime, "linear", function(){
                                                                btn.click();
                                                            });

                                                        }, keyboardButtonTime);

                                                        console.log("Pressed: " + btn.text() + "at: " + new Date(jQuery.now()));

                                                    });
                                                }
                                            }).mouseleave(function () {
                                                jQuery(btn).css({
                                                    'background-color': keyboardBtnColor
                                                });
                                                jQuery(btn).stop(true).animate({
                                                    'backgroundColor': keyboardBtnColor
                                                }, 100, "linear", function () {
                                                    clearTimeout(timer);
                                                });
                                            });
                                        });
                                        addClickSound(keyboard);
                                    },
                                    hidden: function (e, keyboard, el) {
                                        $('.audio').remove();
                                    },
                                    beforeClose: function (e, keyboard, el, accepted) {
                                        $('.audio').remove();
                                        keyboard.destroy();
                                        jQuery('.activity').css({
                                            'top': 20,
                                            'width': '15em',
                                            'right': btnContainerWidth + 20
                                        });
                                        jQuery('.imageBtn').css({
                                            'width': '',
                                            'height': ''
                                        });

                                    }

                                });
                            }
                            else {
                                if (inputType == "password") {
                                    inputThis.keyboard({
                                        stayOpen: false,
                                        keyBinding: 'click',
                                        layout: 'custom',
                                        customLayout: {
                                            'default': [
                                                'q w e r t y u i o p {bksp}',
                                                'a s d f g h j k l {enter}',
                                                '{s} z x c v b n m , . {s}',
                                                '{meta1} {accept} {space} {cancel} '
                                            ],
                                            'shift': [
                                                'Q W E R T Y U I O P {bksp}',
                                                'A S D F G H J K L {enter}',
                                                '{s} Z X C V B N M ! ? {s}',
                                                '{meta1} {accept} {space} {cancel}'
                                            ],
                                            'meta1': [
                                                '1 2 3 4 5 6 7 8 9 0 {bksp}',
                                                '- / : ; ( ) \u20ac & @ {enter}',
                                                '{meta2} . , ? ! \' " {meta2}',
                                                '{default} {accept} {space} {cancel}'
                                            ],
                                            'meta2': [
                                                '[ ] { } # % ^ * + = {bksp}',
                                                '_ \\ | ~ < > jQuery \u00a3 \u00a5 {enter}',
                                                '{meta1} . , ? ! \' " {meta1}',
                                                '{default} {accept} {space} {cancel}'
                                            ]
                                        },
                                        display: {
                                            'default': 'ABC',
                                            'meta1': '.?123',
                                            'meta2': '#+='
                                        },
                                        position: {
                                            of: 'body', // null (attach to input/textarea) or a jQuery object (attach elsewhere)
                                            my: '0',
                                            at: '0',
                                            collision: 'fit fit'
                                        },
                                        visible: function (e, keyboard, el) {

                                            keyBoard = keyboard;
                                            jQuery('.activity').css({
                                                'top': btnContainerHeight,
                                                'width': '12em',
                                                'right': 0
                                            });
                                            jQuery('.imageBtn').css({
                                                'width': '10em',
                                                'height': '10em'
                                            });
                                            if (inputThis.is("textarea")) {
                                                textareaRowNos = textAreaRows;
                                                while (textareaRowNos >= 6) {
                                                    textareaRowNos = textareaRowNos / 2;
                                                }
                                            }
                                            if (keyboardBackgroundContrast === true) {
                                                jQuery('.ui-keyboard-keyset').css({
                                                    'background-color': '#000000'
                                                });
                                            }
                                            else {
                                                jQuery('.ui-keyboard-keyset').css({
                                                    'background-color': '#ffffff'
                                                });
                                            }

                                            jQuery('button.ui-keyboard-accept').css({
                                                'background-color': submitButtonColor
                                            });

                                            var uiKeyboardAcceptButtonColor = $('button.ui-keyboard-accept').css('background-color');
                                            var textAcceptColor = getContrastYIQ(uiKeyboardAcceptButtonColor);

                                            $('button.ui-keyboard-accept').children().css({
                                                'color': textAcceptColor
                                            });

                                            jQuery('button.ui-keyboard-cancel').css({
                                                'background-color': exitButtonColor
                                            });

                                            var uiKeyboardCancelButtonColor = $('button.ui-keyboard-cancel').css('background-color');
                                            var textCancelColor = getContrastYIQ(uiKeyboardCancelButtonColor);

                                            $('button.ui-keyboard-cancel').children().css({
                                                'color': textCancelColor
                                            });

                                            var keyboardInterval;

                                            var keyboardBtnColor;

                                            jQuery('.ui-keyboard-preview-wrapper').children('textarea').attr("rows", textareaRowNos);
                                            jQuery.each(jQuery('.ui-keyboard-button', '.ui-keyboard-keyset'), function () {

                                                var btn = jQuery(this);
                                                var btnClass = btn.attr('class');

                                                btn.mouseenter(function (e) {

                                                    keyboardBtnColor = jQuery(this).css('background-color');

                                                    btn.css({
                                                        'background-color': keyboardButtonColor
                                                    });

                                                    if (btn.has('.ui-state-hover')) {

                                                        $(this).animate({
                                                            'background-color': "green"
                                                        }, keyboardButtonTime, "linear", function () {

                                                            btn.on("click",function(){
                                                                btn.stop(true).animate({
                                                                    'backgroundColor': keyboardBtnColor
                                                                },10);
                                                            });
                                                            btn.click();

                                                            timer = setInterval(function () {

                                                                btn.animate({
                                                                    'backgroundColor': 'green'
                                                                }, keyboardButtonTime, "linear", function(){
                                                                    btn.click();
                                                                });

                                                            }, keyboardButtonTime);

                                                            console.log("Pressed: " + btn.text() + "at: " + new Date(jQuery.now()));
                                                        });
                                                    }
                                                }).mouseleave(function () {
                                                    $(btn).css({
                                                        'background-color': keyboardBtnColor
                                                    });
                                                    $(btn).stop(true).animate({
                                                        'backgroundColor': keyboardBtnColor
                                                    }, 100, "linear", function () {
                                                        clearTimeout(timer);
                                                    });
                                                });
                                            });
                                            addClickSound(keyboard);
                                        },
                                        hidden: function (e, keyboard, el) {
                                            jQuery('.audio').remove();
                                        },
                                        beforeClose: function (e, keyboard, el, accepted) {
                                            jQuery('.audio').remove();

                                            jQuery('.activity').css({
                                                'top': 20,
                                                'width': '15em',
                                                'right': btnContainerWidth + 20
                                            });
                                            jQuery('.imageBtn').css({
                                                'width': '',
                                                'height': ''
                                            });

                                        },
                                        beforeVisible: function (e, keyboard, el) {
                                        },
                                        canceled: function (e, keyboard, el) {
                                        }
                                    }).addTyping({
                                        showTyping: true,
                                        delay: 50
                                    });
                                } else {
                                    inputThis.keyboard({
                                        stayOpen: false,
                                        keyBinding: 'click',
                                        layout: 'custom',
                                        customLayout: {
                                            'default': [
                                                'q w e r t y u i o p {bksp}',
                                                'a s d f g h j k l {enter}',
                                                '{s} z x c v b n m , . {s}',
                                                '{meta1} {accept} {space} {cancel} '
                                            ],
                                            'shift': [
                                                'Q W E R T Y U I O P {bksp}',
                                                'A S D F G H J K L {enter}',
                                                '{s} Z X C V B N M ! ? {s}',
                                                '{meta1} {accept} {space} {cancel}'
                                            ],
                                            'meta1': [
                                                '1 2 3 4 5 6 7 8 9 0 {bksp}',
                                                '- / : ; ( ) \u20ac & @ {enter}',
                                                '{meta2} . , ? ! \' " {meta2}',
                                                '{default} {accept} {space} {cancel}'
                                            ],
                                            'meta2': [
                                                '[ ] { } # % ^ * + = {bksp}',
                                                '_ \\ | ~ < > jQuery \u00a3 \u00a5 {enter}',
                                                '{meta1} . , ? ! \' " {meta1}',
                                                '{default} {accept} {space} {cancel}'
                                            ]
                                        },
                                        display: {
                                            'default': 'ABC',
                                            'meta1': '.?123',
                                            'meta2': '#+='
                                        },
                                        position: {
                                            of: 'body', // null (attach to input/textarea) or a jQuery object (attach elsewhere)
                                            my: '0',
                                            at: '0',
                                            collision: 'fit fit'
                                        },
                                        visible: function (e, keyboard, el) {
                                            keyBoardWidth = $('.ui-keyboard').width() + 5;

                                            var availableTags2 =
                                                ["the", "and", "to", "of", "a", "I", "in", "was", "he",
                                                    "that", "it", "his", "her", "you", "as", "had", "with",
                                                    "for", "she", "not", "at", "but", "be", "my", "on", "have",
                                                    "him", "is", "said", "me", "which", "by", "so", "this", "all",
                                                    "from", "they", "no", "were", "if", "would", "or", "when",
                                                    "what", "there", "been", "one", "could", "very", "an"];
                                            $('.ui-keyboard').css({
                                                'top': 0
                                            });

                                            keyBoard = keyboard;
                                            jQuery('.activity').css({
                                                'top': btnContainerHeight,
                                                'width': '12em',
                                                'right': 0
                                            });
                                            jQuery('.imageBtn').css({
                                                'width': '10em',
                                                'height': '10em'
                                            });
                                            if (inputThis.is("textarea")) {
                                                textareaRowNos = textAreaRows;
                                                while (textareaRowNos >= 6) {
                                                    textareaRowNos = textareaRowNos / 2;
                                                }
                                            }
                                            if (keyboardBackgroundContrast === true) {
                                                jQuery('.ui-keyboard-keyset').css({
                                                    'background-color': '#000000'
                                                });
                                            }
                                            else {
                                                jQuery('.ui-keyboard-keyset').css({
                                                    'background-color': '#ffffff'
                                                });
                                            }

                                            jQuery('button.ui-keyboard-accept').css({
                                                'background-color': submitButtonColor
                                            });
                                            var uiKeyboardAcceptButtonColor = $('button.ui-keyboard-accept').css('background-color');
                                            var textAcceptColor = getContrastYIQ(uiKeyboardAcceptButtonColor);

                                            $('button.ui-keyboard-accept').children().css({
                                                'color': textAcceptColor
                                            });

                                            jQuery('button.ui-keyboard-cancel').css({
                                                'background-color': exitButtonColor
                                            });

                                            var uiKeyboardCancelButtonColor = $('button.ui-keyboard-cancel').css('background-color');
                                            var textCancelColor = getContrastYIQ(uiKeyboardCancelButtonColor);

                                            $('button.ui-keyboard-cancel').children().css({
                                                'color': textCancelColor
                                            });

                                            var keyboardInterval;

                                            var keyboardBtnColor;

                                            jQuery('.ui-keyboard-preview-wrapper').children('textarea').attr("rows", textareaRowNos);
                                            jQuery.each(jQuery('.ui-keyboard-button', '.ui-keyboard-keyset'), function () {

                                                var btn = jQuery(this);
                                                var btnClass = btn.attr('class');

                                                btn.mouseenter(function (e) {

                                                    keyboardBtnColor = jQuery(this).css('background-color');

                                                    btn.css({
                                                        'background-color': keyboardButtonColor
                                                    });

                                                    if (btn.has('.ui-state-hover')) {

                                                        $(this).animate({
                                                            'background-color': "green"
                                                        }, keyboardButtonTime, "linear", function () {
                                                            btn.on("click",function(){
                                                                btn.stop(true).animate({
                                                                    'backgroundColor': keyboardBtnColor
                                                                },10);
                                                            });
                                                            btn.click();

                                                            timer = setInterval(function () {
                                                                btn.animate({
                                                                    'backgroundColor': 'green'
                                                                }, keyboardButtonTime, "linear", function(){
                                                                    btn.click();
                                                                });

                                                            }, keyboardButtonTime);
                                                        });
                                                    }
                                                }).mouseleave(function () {
                                                    $(btn).css({
                                                        'background-color': keyboardBtnColor
                                                    });
                                                    $(btn).stop(true).animate({
                                                        'backgroundColor': keyboardBtnColor
                                                    }, 100, "linear", function () {
                                                        clearInterval(timer);

                                                    });
                                                });
                                            });
                                            addClickSound(keyboard);
                                        },
                                        hidden: function (e, keyboard, el) {
                                            jQuery('.audio').remove();
                                        },
                                        beforeClose: function (e, keyboard, el, accepted) {
                                            jQuery('.audio').remove();
                                            jQuery('.activity').css({
                                                'top': 20,
                                                'width': '15em',
                                                'right': btnContainerWidth + 20
                                            });
                                            jQuery('.imageBtn').css({
                                                'width': '',
                                                'height': ''
                                            });
                                        },
                                        change      : function(e, keyboard, el) {

                                            if($('ul.myAutoComplete').length){
                                                $('ul.myAutoComplete').remove();
                                            }

                                            if(arr.length == 0){
                                                $('.myAutoComplete').empty();
                                            }else{
                                                arr = [];
                                            }
                                            var tempValue = [];
                                            var inputVal;

                                            var val = keyboard.$preview.val();
                                            if(val != "") {
                                                var splitValue = [];

                                                var temp;
                                                var wordCounts = {};
                                                var matches = val.match(/\b/g);
                                                wordCounts[val.id] = matches ? matches.length / 2 : 0;
                                                var finalCount = 0;
                                                $.each(wordCounts, function(k, v) {
                                                    finalCount += v;
                                                });

                                                if (finalCount > 1) {
                                                    if($('ul.myAutoComplete').length){
                                                        $('ul.myAutoComplete').remove();
                                                    }
                                                    temp = val.split(" ");
                                                    for(j in temp){
                                                        splitValue.push(temp[j]);
                                                        tempValue.push(temp[j]);
                                                    }
                                                } else {

                                                    if($('ul.myAutoComplete').length){
                                                        $('ul.myAutoComplete').remove();
                                                    }
                                                    splitValue.push(val);
                                                    tempValue.push(val);
                                                }

                                                if(splitValue.length > 1) {
                                                    var splitValueLength = splitValue.length - 1;
                                                    for (var z = 0; z < splitValueLength; z++) {
                                                        splitValue.shift();
                                                    }
                                                }

                                                var avTags;

                                                for (var i = 0; i <= splitValue.length - 1; i++) {
                                                    for (var j = 0; j <= availableTags.length - 1; j++) {

                                                        avTags = availableTags[j];

                                                        inputVal = splitValue[i];

                                                        if(inputVal != "") {
                                                            if(inputVal.length > 1 && inputVal.length < 3){
                                                                var size = inputVal.length;

                                                                if(avTags.length >= size){
                                                                    if (((avTags[0].toLowerCase().indexOf(inputVal[0])) > -1) && ((avTags[1].toLowerCase().indexOf(inputVal[1])) > -1)) {
                                                                        arr.push(avTags);
                                                                    }
                                                                }
                                                            }else {
                                                                if ((avTags[0].toLowerCase().indexOf(inputVal)) > -1) {
                                                                    arr.push(avTags);
                                                                }
                                                            }
                                                            if(arr.length < 1){
                                                                if($('ul.myAutoComplete').length){
                                                                    $('ul.myAutoComplete').remove();
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }

                                            if(arr.length > 0){

                                                if($('ul.myAutoComplete').length){
                                                    $('ul.myAutoComplete').remove();
                                                }

                                                $('<ul class="myAutoComplete"></ul>').appendTo('.ui-keyboard');

                                                for(var j = 0; j < arr.length; j++){
                                                    $('ul.myAutoComplete').append('<li class="myAutoComplete-menu-item"><button class="myAutoComplete-button ui-class-' + j + '">' + arr[j] + '</button></li>' )
                                                }

                                                arr = [];

                                                $('.myAutoComplete').css({
                                                    'top': '',
                                                    'left': '',
                                                    'z-index': 9999999,
                                                    'position': 'relative',
                                                    'display': 'block',
                                                    'width': keyBoardWidth
                                                });

                                                if($('ul.myAutoComplete').length){
                                                    var myAutoCompleteBtnColor = $('li.myAutoComplete-menu-item').children('button').css('background-color');

                                                    jQuery.each(jQuery('li.myAutoComplete-menu-item', 'ul.myAutoComplete'), function () {

                                                        var listBtn = $('li.myAutoComplete-menu-item').children('button');
                                                        var stoplistBtnAnimate;
                                                        listBtn.mouseenter(function () {
                                                            stoplistBtnAnimate = $(this);
                                                            $(this).animate({
                                                                'background-color': "green"
                                                            }, keyboardButtonTime, "linear", function () {
                                                                var btnText = $(this).html();

                                                                var newText = "";

                                                                var found = tempValue.indexOf(inputVal);

                                                                if(~found){
                                                                    tempValue[found] = btnText;

                                                                }

                                                                for(var i = 0; i < tempValue.length; i++){
                                                                    newText += tempValue[i] + " ";
                                                                }

                                                                var clicky = jQuery('#clicky')[0];

                                                                clicky.pause();
                                                                clicky.play();
                                                                keyboard.$preview.val(newText);
                                                                var time = setTimeout(function(){
                                                                    $('ul.myAutoComplete').remove();
                                                                }, 500);
                                                            });

                                                        }).mouseleave(function(){
                                                            stoplistBtnAnimate.css({
                                                                'background-color': myAutoCompleteBtnColor
                                                            });
                                                            stoplistBtnAnimate.stop(true).animate({
                                                                'backgroundColor': myAutoCompleteBtnColor
                                                            }, 100, "linear", function () {
                                                            });
                                                        });
                                                    });
                                                }
                                            }
                                        },
                                        beforeVisible: function (e, keyboard, el) {
                                        },
                                        canceled: function (e, keyboard, el) {
                                            $('.ui-autocomplete').appendTo("body");
                                        }
                                    }).addTyping({
                                        showTyping: true,
                                        delay: 50
                                    });
                                }
                            }
                        });
                    }, 1000);
                });
            }

            /*---------------------------------------------------------
             *
             *						Navbar Render
             *
             ---------------------------------------------------------*/

            if (target.is('nav') || target.is('a') || target.is('.navbar') || target.parent().is('nav') || target.parent().parent().is('nav') || target.parents('.nav').length || target.is('.nav')) { //|| target.closest('.nav')

                return jQuery(this).each(function () {
                    var navbarHeight;

                    if (jQuery('nav').length) {
                        jQuery('nav').addClass('navAccess');
                        $('.navAccess').css({
                            'opacity': 0.5
                        });
                    }
                    else {
                        if (jQuery('.nav').length) {
                            jQuery('.nav').addClass('navAccess');
                            $('.navAccess').css({
                                'opacity': 0.5
                            });
                        }
                    }

                    jQuery('.navAccess').addClass('expose');
                    jQuery('.expose').css('position', '');

                    var myNavTimeout;
                    var k = 0;
                    var domElement;

                    myNavTimeout = setTimeout(function () {
                        jQuery('.expose').css({
                            'z-index': '15500'
                        });
                        jQuery('.overlay').fadeIn(300);
                        jQuery('.overlay').css({
                            top: 0,
                            height: '100%',
                            position: 'fixed'
                        });

                        var overlay = ".overlay";

                        if (jQuery('.navAccess').length) {
                            jQuery("<div class='utilityContainer expose col-md-2' ></div>").insertAfter('.forContainers');
                            jQuery("<div class='navLinkContainer expose col-md-2' ></div>").insertBefore('.forContainers');
                            jQuery("<div class='navLinkContainerLevel2 col-md-2'></div>").insertBefore('.forContainers');
                            jQuery("<div class='helperContainer' ></div>").appendTo(utility);
                            jQuery('.navAccess').addClass('col-md-4 col-md-offset-4 col-md-6');
                            jQuery('.navAccess').css({
                                'z-index': '16000'
                            });
                        }

                        jQuery('ul.nav').addClass('ul_level_1');

                        var containerClassName;
                        var level2 = 1;

                        jQuery('ul.ul_level_1 > li a').not("ul li ul li a").each(function () {
                            var anchor = jQuery(this);

                            jQuery(this).addClass("navLink" + ++k);

                            var link = jQuery(this).attr('href');
                            var content;
                            content = jQuery(this).text().toUpperCase();
                            jQuery("<a href='" + link + "' clear='both' class='btn btn-default navCls navLink" + k + " navTest" + k + " '><span class='spanNav' >" + content + "</span></a>").appendTo(navLinkContainerClass);
                            jQuery(".navCls").css({
                                'background-color': navLinkL1BtnColor
                            });
                            jQuery(".spanNav").css({
                                "color": navLinkL1BtnTextColor
                            });

                            if (anchor.siblings('ul').size() > 0) {
                                var buttonClass = ".navTest" + k;
                                jQuery(buttonClass).attr('data-toggle', 'popover');

                                jQuery(this).siblings('ul').addClass("ul_level_2_" + level2);
                                jQuery("<div class='navLinkContainer_level2_" + level2 + " navLink" + k + " expose col-md-3' style='display:none;' ></div>").appendTo('.navLinkContainerLevel2');
                                jQuery("<button class='btn btn-danger back'  ><span class='glyphicon glyphicon-arrow-left iconLeft'  aria-hidden='true'></span><br/><span class='spanBack' >BACK</span></button>").appendTo('.navLinkContainer_level2_' + level2);
                                jQuery(".back").css({
                                    'background-color': backBtnColor,
                                    "color": backBtnTextColor
                                });
                                jQuery(".spanBack").css({
                                    "color": backBtnTextColor
                                });
                                var ulLevel2 = 'ul.ul_level_2_' + level2 + ' > li a';
                                jQuery.each(jQuery(ulLevel2, 'ul.ul_level_1'), function () {
                                    var anchor2 = jQuery(this);

                                    jQuery(this).addClass("navLink_lvl2_" + ++k);
                                    var link2;
                                    link2 = anchor2.attr('href');

                                    var content2;
                                    content2 = anchor2.text().toUpperCase();

                                    jQuery("<a href='" + link2 + "' clear='both' class='btn btn-default navCls2 navLink" + k + " '><span class='spanNav2' >" + content2 + "</span></a>").appendTo(".navLinkContainer_level2_" + level2);

                                    jQuery('.navCls2').css({
                                        'background-color': navLinkL2BtnColor
                                    });
                                    jQuery(".spanNav2").css({
                                        "color": navLinkL2BtnTextColor
                                    });

                                });
                                level2++;
                            }
                            else {
                            }
                        });

                        jQuery("<button class='btn btn-danger exit'  ><span class='spanExit' >EXIT!</span></button>").appendTo(helperContainerClass);
                        jQuery(".exit").css({
                            'background-color': exitBtnColor
                        });
                        jQuery(".spanExit").css({
                            "color": exitBtnTextColor
                        });

                        var body = jQuery('body')[0];

                        scrollAccessibility(settings);

                        var checkClassName;
                        var className;
                        var className2;
                        var toggleClass;
                        var myNavTimeout2;
                        var navLinkButtonColor1 = jQuery('.navCls').css('backgroundColor');
                        var navLinkButtonColor2 = jQuery('.navCls2').css('backgroundColor');
                        var navLinkL1EyeStyle;
                        var navLinkL2EyeStyle;
                        jQuery.each(jQuery('a', navLinkContainerClass), function () {
                            var link = jQuery(this);

                            link.mouseenter(function () {
                                if(playPause == 0) {
                                    var navLinkContainerWidth = $(navLinkContainerClass).outerWidth();
                                    var navLinkPosition = link.offset();
                                    var pieTimerNavLinkL1 = navLinkL1BtnTime / 1000;
                                    $('<span id="timer" style="z-index: 9999999;padding: 5px 2px 2px;color: #FFF;position: absolute;"></span>').insertAfter(navLinkContainerClass);
                                    if (buttonCornerLocation) {
                                        $('#timer').css({
                                            'top': navLinkPosition.top - 20,
                                            'left': navLinkPosition.left + 120,
                                            'margin': '20px',
                                            'width': '50px'
                                        });
                                    } else {
                                        $('#timer').css({
                                            'top': navLinkPosition.top,
                                            'left': navLinkPosition.left + navLinkContainerWidth - 50
                                        });
                                    }
                                    $('#timer').pietimer({
                                        timerSeconds: pieTimerNavLinkL1,
                                        color: pieTimerColor,
                                        fill: pieTimerColor,
                                        showPercentage: true,
                                        callback: function () {
                                            $('#timer').pietimer('reset');
                                            $this.find('.percent').html(0);
                                        }
                                    });
                                    if($('#newCursorStyle').length){
                                        $('#newCursorStyle').remove();
                                    }

                                    navLinkL1EyeStyle = $("<style />", {
                                        id  : 'newCursorStyle',
                                        type: 'text/css',
                                        html: "*{ cursor: none !important}"
                                    }).appendTo("head");

                                    $("<img class='butterflEyeCursor' src='" + butterflEyeLocation + "mouse_eye_blue_large.png' alt='ButterflEye Cursor' >").insertAfter(link.children());

                                    var linkWidth = link.width() / 2;
                                    var linkHeight = link.height() / 2;

                                    $('.butterflEyeCursor').css({
                                        'z-index': 9999999,
                                        'position': 'relative'
                                    });

                                    $('.butterflEyeCursor').css({
                                        'top': navLinkPosition.top + linkHeight - 20 - $(window).scrollTop(),
                                        'left': navLinkPosition.left + linkWidth - 20,
                                        'z-index': 9999999,
                                        'position': 'fixed'
                                    });
                                    checkClassName = link.attr('class').match(/\b(navLink\d+)\b/)[1];
                                    link.animate({
                                        'background-color': "green"
                                    }, navLinkL1BtnTime, "linear", function () {

                                        className = "." + link.attr('class').match(/\b(navLink\d+)\b/)[1];

                                        toggleClass = link.attr('class').match(/\b(navLink\d+)\b/)[1];

                                        myNavTimeout2 = setTimeout(function () {

                                            jQuery('ul.ul_level_1 > li a').not("ul li ul li a").each(function () {
                                                if (jQuery(this).hasClass(toggleClass)) {
                                                    $(this).parent().addClass('open');
                                                } else {
                                                }
                                            });

                                            if (link.data('toggle') === 'popover') {
                                                jQuery('.back').css({
                                                    'display': 'block'
                                                })
                                                jQuery(".exit").css({
                                                    'display': 'none'
                                                });
                                                jQuery('.navLinkContainer').css({
                                                    'display': 'none'
                                                });

                                                jQuery.each(jQuery('div', '.navLinkContainerLevel2'), function () {
                                                    if (jQuery(this).hasClass(checkClassName)) {
                                                        jQuery(className).css({
                                                            'display': 'block',
                                                            'z-index': 16000
                                                        });
                                                    }
                                                });
                                                jQuery('.navLinkContainer_level2').css({
                                                    'display': 'block'
                                                });
                                                jQuery.each(jQuery('a', className), function () {
                                                    var link2 = jQuery(this);
                                                    var myInnerNavTimeout2;
                                                    link2.mouseenter(function () {
                                                        if(playPause == 0) {
                                                            var navLink2ContainerWidth = $('.navLinkContainerLevel2').outerWidth();
                                                            var navLink2Position = link2.offset();
                                                            var pieTimerNavLinkL2 = navLinkL2BtnTime / 1000;
                                                            $('<span id="timer" style="z-index: 9999999;padding: 5px 2px 2px;color: #FFF;position: absolute;"></span>').insertAfter('.navLinkContainerLevel2');
                                                            if (buttonCornerLocation) {
                                                                $('#timer').css({
                                                                    'top': navLink2Position.top - 20,
                                                                    'left': navLink2Position.left + 120,
                                                                    'margin': '20px',
                                                                    'width': '50px'
                                                                });
                                                            } else {
                                                                $('#timer').css({
                                                                    'top': navLink2Position.top,
                                                                    'left': navLink2Position.left + navLink2ContainerWidth - 50
                                                                });
                                                            }
                                                            $('#timer').pietimer({
                                                                timerSeconds: pieTimerNavLinkL2,
                                                                color: pieTimerColor,
                                                                fill: pieTimerColor,
                                                                showPercentage: true,
                                                                callback: function () {
                                                                    $('#timer').pietimer('reset');
                                                                    $this.find('.percent').html(0);
                                                                }
                                                            });
                                                            if($('#newCursorStyle').length){
                                                                $('#newCursorStyle').remove();
                                                            }
                                                            navLinkL2EyeStyle = $("<style />", {
                                                                id  : 'newCursorStyle',
                                                                type: 'text/css',
                                                                html: "*{ cursor: none !important}"
                                                            }).appendTo("head");

                                                            $("<img class='butterflEyeCursor' src='" + butterflEyeLocation + "mouse_eye_blue_large.png' alt='ButterflEye Cursor' >").appendTo(link2.children());

                                                            var link2Width = link2.width() / 2;
                                                            var link2Height = link2.height() / 2;

                                                            $('.butterflEyeCursor').css({
                                                                'top': navLink2Position.top + link2Height - 20 - $(window).scrollTop(),
                                                                'left': navLink2Position.left + link2Width - 20,
                                                                'z-index': 9999999,
                                                                'position': 'fixed'
                                                            });
                                                            link2.animate({
                                                                'background-color': "green"
                                                            }, navLinkL2BtnTime, "linear", function () {
                                                                className2 = "." + link2.attr('class').match(/\b(navLink\d+)\b/)[1];
                                                                myInnerNavTimeout2 = setTimeout(function () {
                                                                    jQuery(className2)[0].click();
                                                                }, 100);
                                                            });
                                                        }else{}
                                                    }).mouseleave(function () {

                                                        $('#timer').remove();
                                                        link2.stop(true).animate({
                                                            'backgroundColor': navLinkButtonColor2,
                                                            'width': '14em'
                                                        }, 100, "linear", function () {
                                                            clearTimeout(myInnerNavTimeout2);
                                                        });
                                                        if($('#newCursorStyle').length){
                                                            $('#newCursorStyle').remove();
                                                        }

                                                        $('#newCursorStyle').remove();
                                                        $('.butterflEyeCursor').remove();
                                                    });
                                                    $('#timer').remove();
                                                });
                                            } else {
                                                jQuery(className)[0].click();
                                            }
                                        }, 100);
                                    });
                                }else{}
                            }).mouseleave(function () {
                                $('#timer').remove();
                                link.stop(true).animate({
                                    'backgroundColor': navLinkButtonColor1,
                                    'width': '14em'
                                }, 100, "linear", function () {
                                    clearTimeout(myNavTimeout2);
                                });
                                if($('#newCursorStyle').length){
                                    $('#newCursorStyle').remove();
                                }
                                $('#newCursorStyle').remove();
                                $('.butterflEyeCursor').remove();

                            });
                            $('#timer').remove();
                        });

                        var myNewNavTimeout;
                        var backColor = jQuery('.back').css('backgroundColor');
                        var backEyeStyle;

                        jQuery('.back').on('mouseenter', function () {
                            if(playPause == 0) {
                                var backButton = $(this);
                                var navLink2ContainerWidth = $('.navLinkContainerLevel2').outerWidth();
                                var backPosition = backButton.offset();
                                var pieTimerBack = backBtnTime / 1000;
                                $('<span id="timer" style="z-index: 9999999;padding: 5px 2px 2px;color: #FFF;position: absolute;"></span>').insertAfter('.navLinkContainerLevel2');
                                if (buttonCornerLocation) {
                                    $('#timer').css({
                                        'top': backPosition.top - 20,
                                        'left': backPosition.left + 145,
                                        'margin': '20px',
                                        'width': '50px'
                                    });
                                } else {
                                    $('#timer').css({
                                        'top': backPosition.top,
                                        'left': backButton.left + navLink2ContainerWidth - 50
                                    });
                                }
                                $('#timer').pietimer({
                                    timerSeconds: pieTimerBack,
                                    color: pieTimerColor,
                                    fill: pieTimerColor,
                                    showPercentage: true,
                                    callback: function () {
                                        $('#timer').pietimer('reset');
                                        $this.find('.percent').html(0);
                                    }
                                });
                                if($('#newCursorStyle').length){
                                    $('#newCursorStyle').remove();
                                }
                                backEyeStyle = $("<style />", {
                                    id  : 'newCursorStyle',
                                    type: 'text/css',
                                    html: "*{ cursor: none !important}"
                                }).appendTo("head");

                                $("<img class='butterflEyeCursor' src='" + butterflEyeLocation + "mouse_eye_blue_large.png' alt='ButterflEye Cursor' >").appendTo(backButton.children());

                                var backButtonWidth = backButton.width() / 2;
                                var backButtonHeight = backButton.height() / 2;

                                $('.butterflEyeCursor').css({
                                    'top': backPosition.top + backButtonHeight - 20 - $(window).scrollTop(),
                                    'left': backPosition.left + backButtonWidth - 10,
                                    'z-index': 9999999,
                                    'position': 'fixed'
                                });
                                jQuery(this).animate({
                                    'background-color': "green"
                                }, backBtnTime, "linear", function () {
                                    myNewNavTimeout = setTimeout(function () {
                                        jQuery(".exit").css({
                                            'display': 'block'
                                        });
                                        jQuery('.navLinkContainer').css({
                                            'display': 'block'
                                        });
                                        jQuery.each(jQuery('div', '.navLinkContainerLevel2'), function () {
                                            if (jQuery(this).is(':visible')) {
                                                jQuery(this).css({
                                                    'display': 'none',
                                                    'z-index': 0
                                                });
                                            }
                                        });
                                        jQuery('ul.ul_level_1 > li a').not("ul li ul li a").each(function () {
                                            if (jQuery(this).hasClass(toggleClass)) {
                                                $(this).parent().removeClass('open');
                                            } else {
                                            }
                                        });
                                        jQuery('.back').css({
                                            'display': 'none'
                                        })
                                    }, 100);
                                });
                            }else{}
                        });

                        jQuery('.back').on('mouseleave', function () {
                            $('#timer').remove();
                            jQuery(this).stop(true).animate({
                                'backgroundColor': backColor,
                                'width': '16em'
                            }, 100, "linear", function () {
                                clearTimeout(myNewNavTimeout);
                            });
                            if($('#newCursorStyle').length){
                                $('#newCursorStyle').remove();
                            }
                            $('#newCursorStyle').remove();
                            $('.butterflEyeCursor').remove();
                        });
                        $('#timer').remove();

                        var exitButtonColor = jQuery('.exit').css('backgroundColor');
                        var exitBtnStyle;
                        jQuery(".exit").mouseenter(function () {
                            var exitButton = $('.exit');
                            var utilityContainerWidth = $('.utilityContainer').outerWidth();
                            var exitPosition = exitButton.offset();
                            var pieTimerExit = exitBtnTime / 1000;
                            $('<span id="timer" style="z-index: 9999999;padding: 5px 2px 2px;color: #FFF;position: absolute;"></span>').insertAfter('.utilityContainer');
                            if (buttonCornerLocation) {
                                $('#timer').css({
                                    'top': exitPosition.top - 20,
                                    'left': exitPosition.left + 120,
                                    'margin': '20px',
                                    'width': '50px'
                                });
                            } else {
                                $('#timer').css({
                                    'top': exitPosition.top,
                                    'left': exitPosition.left - utilityContainerWidth + 50
                                });
                            }
                            $('#timer').pietimer({
                                timerSeconds: pieTimerExit,
                                color: pieTimerColor,
                                fill: pieTimerColor,
                                showPercentage: true,
                                callback: function () {
                                    $('#timer').pietimer('reset');
                                    $this.find('.percent').html(0);
                                }
                            });
                            if($('#newCursorStyle').length){
                                $('#newCursorStyle').remove();
                            }
                            exitBtnStyle = $("<style />", {
                                id  : 'newCursorStyle',
                                type: 'text/css',
                                html: "*{ cursor: none !important}"
                            }).appendTo("head");

                            $("<img class='butterflEyeCursor' src='" + butterflEyeLocation + "mouse_eye_blue_large.png' alt='ButterflEye Cursor' >").appendTo(exitButton.children());

                            var exitButtonWidth = exitButton.width() / 2;
                            var exitButtonHeight = exitButton.height() / 2;

                            $('.butterflEyeCursor').css({
                                'top': exitPosition.top + exitButtonHeight - 20 - $(window).scrollTop() ,
                                'left': exitPosition.left + exitButtonWidth - 10,
                                'z-index': 9999999,
                                'position': 'fixed'
                            });

                            jQuery(this).animate({
                                'background-color': "green"
                            }, exitBtnTime, "linear", function () {
                                myNewNavTimeout = setTimeout(function () {

                                    jQuery('.overlay').fadeOut(300, function () {
                                        jQuery('.expose').css('z-index', '1');
                                        jQuery('.overlay').css('top', '');
                                        jQuery('.overlay').css('left', '');
                                        jQuery('.overlay').css('height', '');
                                        target.removeClass('expose');
                                        jQuery('.helperContainer').remove();
                                        jQuery('.navLinkContainer').remove();
                                        jQuery('.navLinkContainerLevel2').remove();
                                        jQuery('.restContainer').css({
                                            'right': 0,
                                            'top': activityHeight
                                        });
                                        jQuery('.container').removeClass('col-md-8');
                                        jQuery('.expose').removeClass('col-md-4 col-md-offset-4');
                                        jQuery('.navAccess').css('z-index', '1');
                                        var link;
                                        jQuery.each(jQuery('a', '.navAccess'), function () {
                                            link = jQuery(this);
                                            link.removeClass('navCls');
                                            link.removeClass("navCls2");
                                        });
                                        $('.navAccess').css({
                                            'opacity': 1
                                        });
                                        jQuery('nav').removeClass('navAccess');
                                        jQuery('.butterfleyeWrapper').removeClass('forContainers');
                                        jQuery('.utilityContainer').remove();
                                        jQuery('nav').removeClass('col-md-6');
                                        jQuery('nav').removeClass('col-md-4 col-md-offset-4');
                                        jQuery('nav').removeClass('expose');

                                        jQuery('.nav').removeClass('forContainers col-md-4 col-md-offset-4 navAccess expose col-md-6');
                                        jQuery(".butterfleyeWrapper").contents().unwrap();

                                        jQuery('.scrollContainer').remove();

                                        prependedScrollContainer(settings);

                                        if($('#newCursorStyle').length){
                                            $('#newCursorStyle').remove();
                                        }

                                        jQuery('body').css({
                                            color: bodyTextColor
                                        });
                                        jQuery('.loadingModal').remove();
                                        jQuery('.navAccess').find('.navAccess').removeClass('navAccess');
                                    });
                                    $('#timer').remove();

                                    target.removeClass('expose');
                                    functionRunning = 0;
                                }, 100);
                            });
                        }).mouseleave(function () {
                            $('#timer').remove();
                            jQuery(this).stop(true).animate({
                                'backgroundColor': exitButtonColor,
                                'width': '14em'
                            }, 100, "linear", function () {
                                clearTimeout(myNewNavTimeout);
                            });

                            if($('#newCursorStyle').length){
                                $('#newCursorStyle').remove();
                            }

                            $('#newCursorStyle').remove();
                            $('.butterflEyeCursor').remove();
                        });

                    }, 1000);
                });
            }
        }
        jQuery('.loadingModal').remove();
    } else{
    }
}


function split(val) {
    return val.split(/,\s*/);
}

})(jQuery);

jQuery(document).ready(function($){

    $(document).butterflEye({
        pieTimer: {
            buttonCornerLocation: true,
            pieTimerColor: "#000000"
        }
    });
});
