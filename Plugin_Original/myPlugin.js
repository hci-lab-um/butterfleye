/**
 * Created by Alastair on 28/10/2014.
 */

jQuery.noConflict();
(function ($) {

    // USE THIS TO CHECK IF THE FUNCTION IS ALREADY RUNNING
    var functionRunning = 0;
    var butterflEyeLocation = urlofdoc("myPlugin.js");

    jQuery.fn.myPlugin = function (options) {

        /*var settings = jQuery.extend({
         inputButtonColor: "white"
         }, options);*/
        mouseCursor();


        var defaults = {
                //inputContainer: [],
                //inputButtonColor: '#ffffff',
                //navLinkL1ButtonColor: '#ffffff',
                //navLinkL2ButtonColor: '#ffffff',
                //actionButtonColor: '#428bca',
                //exitButtonColor: '#d9534f',
                //backButtonColor: '#d9534f',
                //scrollButtonColor: '#5cb85c',
                timerColor: '#00ff00',
                //exitButtonTime: 3000,
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

        /*var axis = [];
         var myXAxis = [];
         var myYAxis = [];
         var currentMousePos = { x: -1, y: -1};
         var diff = 0;
         jQuery("<div class='positionTest'></div>").appendTo('body');
         jQuery(document).mousemove(function(e){
         currentMousePos.x = e.pageX;
         currentMousePos.y = e.pageY;

         myXAxis.push(currentMousePos.x);
         myYAxis.push(currentMousePos.y);

         var xValue;
         var yValue;
         var diff;

         for(var i=0; i<10; i++) {
         xValue = myXAxis[i];
         yValue = myYAxis[i];
         diff = xValue - yValue;
         if(diff < 100){
         axis.push(diff);
         }
         }

         if(axis.length > 5){*/
        //alert("PLUGIN WILL START");
        //var axis = [];


        //jQuery("<div class='positionTest'></div>").appendTo('body');

        /* ---------------------------------------------------------------------------------------
         var xDiff = [];
         var yDiff = [];
         var myXAxis = [];
         var myYAxis = [];
         var myXAxis2 = [];
         var myYAxis2 = [];
         var currentMousePos = { x: -1, y: -1};
         var currentMousePos2 = {x: -1, y: -1};
         jQuery(document).mousemove(function(e) {

         currentMousePos.x = e.pageX;
         currentMousePos.y = e.pageY;

         currentMousePos2.x = e.pageX;
         currentMousePos2.y = e.pageY;

         myXAxis.push(currentMousePos.x);
         myXAxis2.push(currentMousePos2.x);
         myYAxis.push(currentMousePos.y);
         myYAxis2.push(currentMousePos2.y);



         });
         var xValue = 0;
         var yValue = 0;
         var xDiff2 = 0;
         var yDiff2 = 0;
         var test = myXAxis[0];
         for (var i = 0; i < 10; i++) {
         xValue = myXAxis[i];
         yValue = myYAxis[i];
         xDiff2 = xValue - yValue;
         yDiff2 = yValue - xValue;
         if (xDiff2 < 100 && yDiff2 < 100) {
         xDiff.push(xDiff2);
         yDiff.push(yDiff2);
         }
         }
         if (xDiff.length > 5 && yDiff.length > 5) {
         alert("PLUGIN WILL START");
         }

         ---------------------------------------------------------------------------------------  */

        /*getScriptFile("http://code.jquery.com/ui/1.9.0/jquery-ui.min.js");
         getScriptFile("http://code.jquery.com/jquery-migrate-1.2.1.js");
         getScriptFile("js/bootstrap.js");
         getScriptFile("keyboard/js/jquery.keyboard.js");
         getScriptFile("jquery-cookie/src/jquery.cookie.js"); // TODO: not getting cookie
         getScriptFile("keyboard/js/jquery.mousewheel.js");
         getScriptFile("keyboard/js/jquery.keyboard.extension-typing.js");
         getScriptFile("keyboard/js/jquery.keyboard.extension-autocomplete.js");

         */



        /*return this.each(function(){
         //get a reference to the DOM element.
         var obj = $(this);
         //because you extended your options into your defaults, you can use them like this
         var isSwitchable = settings.inputButtonColor;
         });*/

        var currentMousePos = { x: -1, y: -1 };
        /*jQuery("<div class='positionTest'></div>").appendTo('body');*/
        var myOuterTimeout;

        var selection = userSelected();

        if (selection == null || selection == 0) {
            /*jQuery(document).mousemove(function (e) {
                currentMousePos.x = e.pageX;
                currentMousePos.y = e.pageY;
                //console.log("x:" + currentMousePos.x + " y:" + currentMousePos.y);
                //jQuery('.positionTest').append("x: " + currentMousePos.x + " y: " + currentMousePos.y);
                var modalTimeout;
                myOuterTimeout = setTimeout(function () {
                    if (functionIsRunning === 0) {

                        var initPos = settings.initializaButterflEyePos.toLowerCase();
                        var smX;
                        var lgX;
                        var smY;
                        var lgY;

                        switch(initPos){
                            case "topleft":
                                smX = 0;
                                smY = 0;
                                lgX = 100;
                                lgY = 100;
                                break;
                            case "topright":
                                //y < 100   x > 1200
                                smX = 1200;
                                smY = 0;
                                lgX = 2000;
                                lgY = 100;
                                break;
                            case "bottomleft":
                                // y > 500  x < 100
                                smX = 0;
                                smY = 500;
                                lgX = 100;
                                lgY = 1000;
                                break;
                            case "bottomright":
                                // y > 500  x > 1200
                                smX = 1200;
                                smY = 500;
                                lgX = 2000;
                                lgY = 1000;
                                break;
                        }

                        if (currentMousePos.x > smX && currentMousePos.x < lgX && currentMousePos.y > smY && currentMousePos.y < lgY) {

                            *//*var initmodalContent =
                             "<div class='modal fade forget-modal initModal' tabindex=-1 role=dialog aria-labelledby=myForgetModalLabel aria-hidden=true>" +
                             "<div class='modal-dialog'>" +
                             "<div class=modal-content>" +
                             "<div class=modal-header>" +
                             "<h2 class=modal-title style='text-align: center;'><img src='http://localhost/butterfleye/ButterflEye.png' alt='ButterflEye Logo' style='width:70px;height:70px;left:0;'>ButterflEye</h2></div>" +
                             "<div class=modal-body>" +
                             "<h3 class='initModalInfo'>ButterflEye is about to Start.</h3></div>";

                             jQuery(initmodalContent).appendTo('body');
                             jQuery('.initModal').modal('show');
                             butterflEyeStartingCookie();


                             modalTimeout = setTimeout(function () {
                             jQuery('.initModal').modal('hide');
                             //jQuery('.initModal').remove();

                             }, 3000);*//*

                            askUser(settings);

                            //console.log("Plugin_Original will start");
                            //console.log("x-axis: " + currentMousePos.x + " y-axis: " + currentMousePos.y);
                            initButterflEye(settings);
                        }
                    }
                    else { }
                }, settings.initButterflEyeModalTime);

            });*/
            if (functionIsRunning === 0) {
                butterflEyeStart(settings);
            }else {}
        } else {
            //console.log("Plugin_Original will start");
            //console.log("x-axis: " + currentMousePos.x + " y-axis: " + currentMousePos.y);

            initButterflEye(settings);
        }



    };

    function butterflEyeStart(settings){
        if(jQuery(".start").length){
            jQuery(this).remove();
        }
        var checkingUser = userSelected();

        var butterflEyeLocation = urlofdoc("myPlugin.js");

        var pieTimerColor = settings.pieTimer.pieTimerColor;
        var startButterflEyeTime = settings.initializeButterflEyeTime;

        //if(checkingUser == 0) {
        //if (functionIsRunning === 0) {
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
                //url(" + butterflEyeLocation + "mouse_eye_blue_large.png)
                var startWidth = $('.start').width() / 2;
                var startHeight = $('.start').height() / 2;


                /*$('.butterflEyeCursor').hover(function(e){
                 e.preventDefault();
                 });*/

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

        // }
    }

    /*var timer;

     var timerCurrent;

     var timerFinish;

     var timerSeconds;

     function drawTimer(percent, text){

     $('div.timer').html('<div class="percent"></div><div id="slice"'+(percent > 50?' class="gt50"':'')+'><div class="pie"></div>'+(percent > 50?'<div class="pie fill"></div>':'')+'</div>');

     var deg = 360/100*percent;

     $('#slice .pie').css({

     '-moz-transform':'rotate('+deg+'deg)',

     '-webkit-transform':'rotate('+deg+'deg)',

     '-o-transform':'rotate('+deg+'deg)',

     'transform':'rotate('+deg+'deg)'

     });

     $('.percent').html(text);

     }

     function stopWatch(text){

     var seconds = (timerFinish-(new Date().getTime()))/1000;

     if(seconds <= 0){

     drawTimer(100, text);

     clearInterval(timer);

     $('input[type=button]#watch').val('Start');

     //alert('Finished counting down from '+timerSeconds);

     }else{

     var percent = 100-((seconds/timerSeconds)*100);

     drawTimer(percent, text);

     }

     }*/






    function isNear( element, distance, event ) {

        var left = element.offset().left - distance,
            top = element.offset().top - distance,
            right = left + element.width() + 2*distance,
            bottom = top + element.height() + 2*distance,
            x = event.pageX,
            y = event.pageY;

        return ( x > left && x < right && y > top && y < bottom );

    }

    function mouseCursor(){
        //var obj = $('<div style="z-index:9999999;width:50px;height:50px;background:red;position:fixed"></div>');

        //var obj = $("<img style='z-index:9999999;position:fixed' class='mouseImg' src='" + butterflEyeLocation +"mouse_eye_blue.png' alt='mouse'</img>");
        /*$("<style type='text/css'> " +
            "*{ cursor: url(" + butterflEyeLocation + "mouse_eye_blue_large.png) 25 15, auto !important} " +
            "</style>").appendTo("head");*/
        var style = $("<style />", {
            id  : 'cursorStyle',
            type: 'text/css',
            html: "*{ cursor: url(" + butterflEyeLocation + "mouse_eye_blue_large.png) 25 15, auto !important}"
        }).appendTo("head");
        /*obj.appendTo('body');

         $(document).mousemove(function (e){
         obj.css({
         left: e.pageX,
         top: e.pageY
         });
         });*/

        /*$(document).bind('mousemove',function(ev){
         obj.animate({top:ev.pageY,left:ev.pageX},{queue:false,duration:400,easing:'linear'})});*/


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
            //url(" + butterflEyeLocation + "mouse_eye_blue_large.png)
            var scrollUpWidth = $('.scroll_up').width() / 2;
            var scrollUpHeight = $('.scroll_up').height() / 2;
            var position = $(window).scrollTop();

            /*$('.butterflEyeCursor').hover(function(e){
             e.preventDefault();
             });*/

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
                    //scrollTimer = setTimeout(function () {
                    position = $(window).scrollTop();
                    jQuery("html, body").animate({ scrollTop: position - 100 }, 'slow');

                    //}, scrollButtonTime);
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
            //url(" + butterflEyeLocation + "mouse_eye_blue_large.png)
            var scrollDownWidth = $('.scroll_down').width() / 2;
            var scrollDownHeight = $('.scroll_down').height() / 2;
            var position = $(window).scrollTop();

            /*$('.butterflEyeCursor').hover(function(e){
             e.preventDefault();
             });*/

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
                    //scrollTimer = setTimeout(function () {
                    position = $(window).scrollTop();
                    jQuery("html, body").animate({ scrollTop: position + 100 }, 'slow');
                    //}, scrollButtonTime);
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
                /*'z-index': '16000',*/
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
                    /*'z-index': '16000',*/
                    /*float: 'right',
                     right: '0',
                     'top': restPosition*/
                    'bottom': 0
                });

                if (jQuery('nav').length) {
                    navHeight = jQuery('nav').outerHeight();

                    /*scroll.css({
                     top: navHeight
                     });*/
                }
                else if (jQuery('.nav').length) {
                    navHeight = jQuery('.nav').outerHeight();

                    /*scroll.css({
                     top: navHeight
                     });*/
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
                /*'z-index': '16000',*/
                /*float: '',
                 right: '',*/
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
                        /*'z-index': '16000',*/
                        /*float: '',
                         right: '',*/
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
                        /*'z-index': '16000',*/
                        /*float: '',
                         right: '',*/
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

    function butterflEyePlayPause(settings){
        if($('.start').length){
            $('.start').remove();
        }
        if(jQuery(".play").length){
            jQuery(this).remove();
        }
        var butterflEyeLocation = urlofdoc("myPlugin.js");

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
            //if($('#newCursorStyle'))
            activityPlayPauseEyeStyle = $("<style />", {
                id  : 'newCursorStyle',
                type: 'text/css',
                html: "*{ cursor: none !important}"
            }).appendTo("head");

            $("<img class='butterflEyeCursor' src='" + butterflEyeLocation + "mouse_eye_blue_large.png' alt='ButterflEye Cursor' >").appendTo($('.activity'));
            //url(" + butterflEyeLocation + "mouse_eye_blue_large.png)
            var activityWidth = $('.activity').width() / 2;
            var activityHeight = $('.activity').height() / 2;


            /*$('.butterflEyeCursor').hover(function(e){
             e.preventDefault();
             });*/

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
                    //disableButtons();
                    //butterflEyePlayPause();
                    //return 1;
                    playPause = 1;
                }else{
                    $('.activity').removeClass("pause").addClass("play");
                    $('.imageBtn').attr('src', playSource);
                    //enableButtons();
                    //butterflEyePlayPause();
                    //return 0;
                    playPause = 0;
                }
            });
        }).mouseleave(function(){
            $('#timer').remove();
            $(this).stop(true).animate({
                'backgroundColor': activityBtnColor
            }, 100, "linear", function () {
                //clearTimeout(activityTimer);
            });
            if($('#newCursorStyle').length){
                $('#newCursorStyle').remove();
            }
            $('#newCursorStyle').remove();

            $('.butterflEyeCursor').remove();
        });
        //return 1;
    }

    /*function enableButtons(){
        if($('.inputContainer').length){
            $.each(jQuery('button', '.inputContainer, .btnContainer'), function () {
                $(this).show();
            });
            if($('.ui-keyboard').length){
                $('.ui-keyboard').show();
            }
        }
    }

    function disableButtons(){
        if($('.inputContainer').length){
            $.each(jQuery('button', '.inputContainer, .btnContainer'), function () {
                $(this).hide();
            });
            if($('.ui-keyboard').length){
                $('.ui-keyboard').hide();
            }
        }
    }*/

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



        /*jQuery("<div class='restContainer expose'><span class='spanRest'>REST</span></div>").insertBefore('body');
         var activityHeight = $('.activity').outerHeight() + 20;
         jQuery('.restContainer').css({
         'background-color': restContainerColor,
         'right': 0,
         'top': activityHeight
         });
         jQuery(".spanRest").css({
         'color': restSpanTextColor
         });*/


        //if(jQuery('.play').length)
        if($('.overlay').length){

        }else{
            jQuery("<div class='overlay'></div>").insertAfter('body');
        }

        jQuery('.overlay').css({
            'background': settings.overlayColor
        })
        //if(functionRunning == 0) {
        var body = jQuery('body')[0];
        /*if(detectIE()){
         jQuery("<div class='utilityContainer' ></div>").appendTo('body');
         jQuery("<div class='scrollContainer' ></div>").appendTo('.utilityContainer');
         jQuery("<button class='btn btn-success scroll_up'  clear='both'><span class='glyphicon glyphicon-arrow-up iconUp'  aria-hidden='true'></span><br/><span class='spanUp' >UP</span></button>").appendTo('.scrollContainer');
         jQuery("<button class='btn btn-success scroll_down' clear='both'><span class='spanDown' >DOWN</span><br/><span class='glyphicon glyphicon-arrow-down iconDown' aria-hidden='true'></span></button>").appendTo('.scrollContainer');
         }
         else{
         if (body.scrollHeight > body.clientHeight) {
         jQuery("<div class='utilityContainer' ></div>").appendTo('body');
         jQuery("<div class='scrollContainer' ></div>").appendTo('.utilityContainer');
         jQuery("<button class='btn btn-success scroll_up'  clear='both'><span class='glyphicon glyphicon-arrow-up iconUp'  aria-hidden='true'></span><br/><span class='spanUp' >UP</span></button>").appendTo('.scrollContainer');
         jQuery("<button class='btn btn-success scroll_down' clear='both'><span class='spanDown' >DOWN</span><br/><span class='glyphicon glyphicon-arrow-down iconDown' aria-hidden='true'></span></button>").appendTo('.scrollContainer');
         }
         }*/

        var target;

        /*jQuery('body').on('mouseenter', 'form', function(e){
         target = jQuery(e.target);
         //jQuery('form').addClass('found');
         //if(jQuery('form').is('.found')){
         myTimeout = setTimeout(function () {
         jQuery('form').parent('div').addClass("expose");
         //Check cookie for eyeTracker decision
         console.log("Hovered over form for: " + myTimeout);
         var selection = userSelected();
         if (selection == null) {
         askUser();
         }
         else {
         if (selection == 1) {
         //functionRunning = 1;
         if (functionRunning == 0) {
         prepScreen(target);
         }
         else {
         }

         }

         }
         //}
         }, 1000);
         });
         jQuery('body').on('mouseleave', 'form', function(){
         clearTimeout(myTimeout);
         });*/

        /*
         jQuery('body').mouseenter(function(e){
         target = jQuery(e.target);

         if(target.nodeName == 'form'){
         myTimeout = setTimeout(function () {
         jQuery('form').parent('div').addClass("expose");
         //Check cookie for eyeTracker decision
         console.log("Hovered over form for: " + myTimeout);
         var selection = userSelected();
         if (selection == null) {
         askUser();
         }
         else {
         if (selection == 1) {
         //functionRunning = 1;
         if (functionRunning == 0) {
         prepScreen(target);
         }
         else {
         }

         }

         }
         //}
         }, 1000);
         }
         }).mouseleave(function () {
         clearTimeout(myTimeout);
         });
         */

        jQuery('form').on('mouseenter', function (e) {

            target = jQuery(e.target);
            //jQuery('form').addClass('found');
            //if(jQuery('form').is('.found')){
            myTimeout = setTimeout(function () {
                var selection1 = userSelected();
                target.closest('form').parent('div').addClass("expose"); // Was jQuery('form').parent('div').addClass('expose');
                //Check cookie for eyeTracker decision
                //console.log("Hovered over form for: " + myTimeout);

                if (selection1 == null || selection1 == 0) {
                    //askUser(settings);
                }
                else {
                    if (selection1 == 1) {
                        //functionRunning = 1;
                        if (functionRunning == 0) {

                            prepScreen(target, settings);

                        }
                        else {
                        }

                    }

                }
                //}
            }, settings.formHoverTime);
            //e.stopImmediatePropagation();
            // }
        });
        jQuery('form').on('mouseleave', function () {
            clearTimeout(myTimeout);
        });


        // }
        //}
        //else{}

        //diff = currentMousePos.x - currentMousePos.y;
        //if(axis.length > 20){
        /*var newDiff = [];
         for(var j =0; j < 10; j++){
         //jQuery('.positionTest').append("Position" + axis[i]);
         newDiff[k] = Math.max.apply(Math,axis);
         }

         for(var k=0; k<20; k++) {
         if(newDiff < 100){
         alert("PLUGIN WILL START");
         }
         }*/


        //}


        /*if(axis.length > 20){
         jQuery.grep(axis, function(n,i){
         return alert(n > 5);
         });
         }*/
        //});

        //-------------------------------------------------------
        var navTimeout;


        jQuery('nav').on('mouseenter', function (e) {

            target = jQuery(e.target);
            //jQuery('form').addClass('found');
            //if(jQuery('form').is('.found')){
            navTimeout = setTimeout(function () {


                //Check cookie for eyeTracker decision
                //console.log("Hovered over form for: " + navTimeout);
                var selection2 = userSelected();
                if (selection2 == null || selection2 == 0) {
                    //askUser(settings);
                }
                else {
                    if (selection2 == 1) {
                        //functionRunning = 1;
                        if (functionRunning == 0) {

                            prepScreen(target, settings);

                        }
                        else {
                        }

                    }

                }
                //}
            }, settings.navHoverTime);
            //e.stopImmediatePropagation();
            // }
        });
        jQuery('nav').on('mouseleave', function () {
            clearTimeout(navTimeout);
        });

        jQuery('.nav').on('mouseenter', function (e) {
            target = jQuery(e.target);
            //var nav = jQuery(this);
            navTimeout = setTimeout(function () {
                //jQuery(nav).addClass("expose");

                var selection3 = userSelected();
                if (selection3 == null || selection3 == 0) {
                    //askUser(settings);
                }
                else {
                    if (selection3 == 1) {
                        //functionRunning = 1;
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

    function userSelected(){ //CHECK COOKIE

        var cookieCheck = $.cookie('userSelectedYes');

        if(cookieCheck == 'yes'){
            return 1;
        }
        return null;
    }

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

        //CHANGE TO HOVER WITH TIMEOUT
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
            //url(" + butterflEyeLocation + "mouse_eye_blue_large.png)
            var yesWidth = $('.yes').width() / 2;
            var yesHeight = $('.yes').height() / 2;


            /*$('.butterflEyeCursor').hover(function(e){
             e.preventDefault();
             });*/

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
                /*if(functionRunning == 0) {
                 prepScreen();
                 }*/
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
            //url(" + butterflEyeLocation + "mouse_eye_blue_large.png)
            var noWidth = $('.no').width() / 2;
            var noHeight = $('.no').height() / 2;


            /*$('.butterflEyeCursor').hover(function(e){
             e.preventDefault();
             });*/

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

    /*function butterflEyeStartingCookie() {
     //if(shown == 1){
     $.cookie("butterflEyeStarted", 'userKnows', { path: '/' });
     //}
     }*/

    /*function checkButterflEyeStartedCookie() {
     var cookieCheck = $.cookie('userSelectedYes');

     if (cookieCheck == 'yes') {
     return 1;
     }
     return null;
     }*/

    /*function handler(ev){
     var target = jQuery(ev.target);
     var elementType = target.prop('tagname');
     if(target.is('.access')){
     //alert('The mouse was over ' + elementType);
     }
     }*/

    function timedMouseenter() {
        var timer;

        timer = setTimeout(function () {
            return 'mouseenter';
        }, 2000);

    }

    function detectIE() {
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf('MSIE ');
        var trident = ua.indexOf('Trident/');

        if (msie > 0 || trident > 0) {
            // IE 10 or older => return version number
            //return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
            return true;
        }

        /*if (trident > 0) {
         // IE 11 (or newer) => return version number
         */
        /*var rv = ua.indexOf('rv:');
         return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);*/
        /*
         }*/

        // other browser
        return false;
    }

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

    //Function to convert hex format to a rgb color
    function rgb2hex(rgb) {
        rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
        return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
    }

    function hex(x) {
        return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
    }

    /*
     // see if needed to not strict the developer to use rgb colors
     function hexToR(h) {return parseInt((cutHex(h)).substring(0,2),16)}
     function hexToG(h) {return parseInt((cutHex(h)).substring(2,4),16)}
     function hexToB(h) {return parseInt((cutHex(h)).substring(4,6),16)}
     function cutHex(h) {return (h.charAt(0)=="#") ? h.substring(1,7):h}
     */

    function prepScreen(target, settings) {
        //jQuery(".myModal").remove();
        //jQuery('form').removeClass('.found');
        //var element = target.prop('tagname');
        //jQuery(".yes").one("click", function(){
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

            //jQuery('.loadingModal').remove();
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
                if (target.is('form') || target.is('.form-control') || target.parent().is('form') || target.parents('form').length) {


                    //console.log("TARGET = FORM");
                    jQuery('.overlay').css({
                        top: 0,
                        left: 0,
                        height: '100%'
                    });
                    jQuery('.expose').css('position', 'relative');
                    return jQuery(this).each(function () {
                        //if (document.forms.length) {
                        //alert("FORM FOUND");

                        //target.parents('form').addClass('access');
                        target.closest('form').addClass('access');
                        $('.access').css({
                            'opacity': 0.5
                        });
                        //was jQuery('form').addClass('access');
                        //jQuery('.expose').parents('div.container').addClass('forContainers');
                        //jQuery('.access').addClass('expose');       CHECK AGAIN JUST TO BE SURE !!!!!!!!!
                        target.closest('form').parent('div').wrapAll("<div class='formWrapper'/>");
                        jQuery('.formWrapper').css({
                            'position': 'fixed',
                            'top': 0,
                            'left': '40%',
                            'z-index': 16000
                        });

                        var myNewTimeout;
                        //jQuery('.access').mouseleave(handler);
                        //jQuery('form').one('mouseenter', function() {
                        myNewTimeout = setTimeout(function () {
                            /*var t = new Tour({
                             backdrop: true,
                             backdropPadding: 200,
                             //template: "<div class='popover tour'><div class='arrow'></div><h3 class='popover-title'></h3><div class='popover-content'></div><div class='popover-navigation'><button class='btn btn-default' data-role='prev'>« Prev</button><span data-role='separator'>|</span><button class='btn btn-default' data-role='next'>Next »</button></div><button class='end btn btn-default' data-role='end'>End tour</button></nav></div>"
                             template: null,
                             onShown: function(t){

                             }
                             });*/
                            //jQuery('.expose').click(function(e){
                            jQuery('.expose').css('z-index', '15500');
                            jQuery('.overlay').fadeIn(300);
                            //});

                            /*jQuery('.overlay').click(function(e){
                             jQuery('.overlay').fadeOut(300, function(){
                             jQuery('.expose').css('z-index','1');
                             });
                             });*/


                            //jQuery("<div class='btn btn-primary'>TEST</div>").appendTo('.tour-step-background');
                            /* if (jQuery(inputContainerClass).length) {
                             jQuery('.inputContainer').remove();
                             }
                             */
                            /*if(jQuery(inputContainer2Class).length){
                             jQuery('.inputContainer2').remove();
                             }*/
                            /*
                             if (jQuery(btnContainerClass).length) {
                             jQuery('.btnContainer').remove();
                             }
                             if (jQuery(helperContainerClass).length) {
                             jQuery('.helperContainer').remove();
                             }*/

                            var domElement;
                            var k = 0;
                            var overlay = ".overlay";
                            //alert('you hovered over a form');


                            if (jQuery('.access').length) {
                                jQuery("<div class='inputContainer expose col-md-2'></div>").insertBefore('.forContainers');
                                //jQuery("<div class='inputContainer2' style='float:left;'></div>").appendTo(overlay);
                                jQuery("<div class='utilityContainer expose col-md-2'></div>").insertAfter('.forContainers');
                                jQuery("<div class='btnContainer expose'></div>").appendTo('.utilityContainer');

                                jQuery("<div class='helperContainer expose'></div>").appendTo('.utilityContainer');




                            }
                            /*var classNames = jQuery('.expose').parent().attr('class');
                             var regex = /(\s)*(col-md-.*?)(?=\s)/g;*/
                            //jQuery('.expose').parent()[0].className = jQuery('.expose')[0].className.replace(regex, 'col-md-8');

                            //if(target.width() < )
                            jQuery('.expose').closest('div.container').addClass('col-md-12');


                            /*if(detectIE()){
                             jQuery("<div class='utilityContainer' ></div>").appendTo(overlay);
                             jQuery("<div class='scrollContainer' ></div>").appendTo(utility);
                             jQuery("<button class='btn btn-success scroll_up'  clear='both'><span class='glyphicon glyphicon-arrow-up iconUp'  aria-hidden='true'></span><br/><span class='spanUp' >UP</span></button>").appendTo(scrollContainerClass);
                             jQuery("<button class='btn btn-success scroll_down' clear='both'><span class='spanDown' >DOWN</span><br/><span class='glyphicon glyphicon-arrow-down iconDown' aria-hidden='true'></span></button>").appendTo(scrollContainerClass);
                             }
                             else{
                             if (body.scrollHeight > body.clientHeight) {
                             jQuery("<div class='utilityContainer' ></div>").appendTo(overlay);
                             jQuery("<div class='scrollContainer' ></div>").appendTo(utility);
                             jQuery("<button class='btn btn-success scroll_up'  clear='both'><span class='glyphicon glyphicon-arrow-up iconUp'  aria-hidden='true'></span><br/><span class='spanUp' >UP</span></button>").appendTo(scrollContainerClass);
                             jQuery("<button class='btn btn-success scroll_down' clear='both'><span class='spanDown' >DOWN</span><br/><span class='glyphicon glyphicon-arrow-down iconDown' aria-hidden='true'></span></button>").appendTo(scrollContainerClass);
                             }
                             }*/

                            jQuery.each(jQuery('input', '.access'), function () {
                                jQuery(this).addClass("input" + ++k);
                                /*jQuery(this).addClass("ui-keyboard-input");
                                 jQuery(this).addClass("ui-widget-content");
                                 jQuery(this).addClass("ui-corner-all");*/
                                var content;

                                //jQuery(this).addClass("osk-trigger");

                                //<input id="keyboard" type="text" class="ui-keyboard-input ui-widget-content ui-corner-all" aria-haspopup="true" role="textbox">
                                /*
                                 if (jQuery(this).is(':submit')) {
                                 content = jQuery(this).parent().text().toUpperCase();
                                 jQuery.addClass('sub');
                                 jQuery("<button class='btn btn-primary submitBtn' type=submit id=\"inp" + k + "\" ><span class='spanSpan' style='font-size:160%;white-space: normal;font-weight: bold; '>" + content + "</span></button>").appendTo(btnContainerClass);

                                 }*/

                                if (jQuery(this).is(':checkbox')) {
                                    content = jQuery(this).parent().text().toUpperCase(); // TODO: RE-CHECK DUE TO NO LABELS PRESENT
                                    jQuery("<button  clear='both' class='btn btn-default inputCls input" + k + " '><span class='inputSpan' style='font-size:160%;white-space: normal;font-weight: bold; '>" + content + "</span></button>").appendTo(inputContainerClass); //POSITION WILL BE CHANGED IN THE FUTURE
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
                                //console.log(domElement.className);
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
                                    //alert(btnClass);
                                    //<button class="btn btn-lg btn-primary btn-block sub" type="submit">Sign in</button>
                                    //jQuery("<p class=\"submit\" style=\"float:right;\"><input id=\"inp" + k + "\" class=\"inputCls\" type=\"submit\" name=\"commit\" value=\"" + jQuery(this).val() + "\"></p>").appendTo(".tour-step-background");
                                    jQuery("<button class='btn btn-primary submitBtn' type=submit id=\"inp" + k + "\" ><span class='spanBtn' >" + jQuery(this).html().toUpperCase() + "</span></button>").appendTo(btnContainerClass);
                                    jQuery(".submitBtn").css({
                                        "background-color": actionBtnColor
                                    });
                                    jQuery(".spanBtn").css({
                                        "color": actionBtnTextColor
                                    })
                                }
                                domElement = jQuery(this).get(0);
                                //console.log(domElement.className);
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
                                        //url(" + butterflEyeLocation + "mouse_eye_blue_large.png)
                                        var submitWidth = actionButton.width() / 2;
                                        var submitHeight = actionButton.height() / 2;


                                        /*$('.butterflEyeCursor').hover(function(e){
                                         e.preventDefault();
                                         });*/

                                        $('.butterflEyeCursor').css({
                                            'top': actionPosition.top + submitHeight - 20 - $(window).scrollTop(),
                                            'left': actionPosition.left + submitWidth - 10,
                                            'z-index': 9999999,
                                            'position': 'fixed'
                                        });

                                        $(this).animate({
                                            "backgroundColor": "green"/*,
                                             'width': '16em'*/
                                        }, actionBtnTime, "linear", function () {
                                            myNewTimeout2 = setTimeout(function () {
                                                jQuery('.sub').trigger('click');
                                                //functionRunning = 0;
                                                //console.log("FunctionRunning = " + functionRunning);
                                                /*if (jQuery('form').submit(e)) {
                                                 e.preventDefault();
                                                 alert("Submitted");
                                                 }*/
                                                //TODO: CHECK FOR SUCCESS IN SUBMIT FIRST
                                                //TODO: MUST BE CHANGED DUE TO VALIDATION OF FORM
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

                            /*jQuery(".submitBtn").on('mouseenter',function(){
                             myNewTimeout2 = setTimeout(function(){
                             jQuery('.sub').trigger('click');

                             */
                            /*jQuery('.sub').click(function(){
                             jQuery(this).parent('form').submit();
                             })*/
                            /*
                             }, 1000);
                             });*/
                            /*jQuery(".submitBtn").on('mouseleave', function(){
                             clearTimeout(myNewTimeout2);
                             });*/

                            /*var incr = 0;
                             jQuery(".scroll_up").mouseenter(function () {
                             jQuery('html, body').animate({scrollTop: incr - 100}, 'slow');
                             incr -= 100;
                             });

                             jQuery(".scroll_down").mouseenter(function () {
                             jQuery("html, body").animate({scrollTop: 100 + incr}, 'slow');
                             incr += 100;
                             });*/

                            //var body = jQuery('body')[0];
                            var keyBoard;
                            scrollAccessibility(settings); //CALLS FUNCTION TO CREATE SCROLLS
                            var exitButtonColor = jQuery('.exit').css('backgroundColor');
                            var exitEyeStyle;
                            var exitButton = $('.exit');
                            jQuery(".exit").mouseenter(function () {
                                /*var clockCountdown =
                                 '<div class="countdown-container container">' +
                                 '<div class="clock row">' +
                                 '<div class="clock-item clock-seconds countdown-time-value col-sm-6 col-md-3">' +
                                 '<div class="wrap">' +
                                 '<div class="inner">' +
                                 '<div id="canvas_seconds" class="clock-canvas"></div>' +
                                 '<div class="text">' +
                                 '<p class="val">0</p>' +
                                 '<p class="type-seconds type-time">SECONDS</p>' +
                                 '</div>' +
                                 '</div>' +
                                 '</div>' +
                                 '</div>' +
                                 '</div>';*/
                                //jQuery(clockCountdown).appendTo('body');

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
                                //url(" + butterflEyeLocation + "mouse_eye_blue_large.png)
                                var exitWidth = exitButton.width() / 2;
                                var exitHeight = exitButton.height() / 2;


                                /*$('.butterflEyeCursor').hover(function(e){
                                 e.preventDefault();
                                 });*/

                                $('.butterflEyeCursor').css({
                                    'top': exitPosition.top + exitHeight - 20 - $(window).scrollTop(),
                                    'left': exitPosition.left + exitWidth - 10,
                                    'z-index': 9999999,
                                    'position': 'fixed'
                                });
                                $('.exit').animate({
                                    'background-color': "green"/*,
                                     'width': '16em'*/
                                }, exitBtnTime, "linear", function () {
                                    myNewTimeout2 = setTimeout(function () {

                                        /* jQuery('.countdown').final_countdown({
                                         start: '0',
                                         end: '1',
                                         selectors: {
                                         value_seconds: '.clock-seconds .val',
                                         canvas_seconds: 'canvas_seconds'
                                         },
                                         seconds: {
                                         borderColor: '#7995D5',
                                         borderWidth: '6'
                                         }
                                         });*/
                                        /*t.end();

                                         if(t.ended()){
                                         alert("Tour has ended");
                                         }*/

                                        jQuery('.overlay').fadeOut(300, function () {
                                            jQuery('.expose').css('z-index', '1');
                                            jQuery('.overlay').css('top', '');
                                            jQuery('.overlay').css('left', '');
                                            jQuery('.overlay').css('height', '');
                                            jQuery('.inputContainer').remove();
                                            jQuery('.btnContainer').remove();
                                            jQuery('.helperContainer').remove();
                                            //jQuery('.restContainer').remove();
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
                                            //jQuery.each(jQuery(''))
                                            //jQuery('.butterfleyeWrapper').remove();
                                            //keyBoard.destroy();
                                            //keyBoard.remove
                                            jQuery('.audio').remove();
                                            jQuery('.scrollContainer').remove();
                                            /* jQuery('.keyboard').destroy();
                                             jQuery('input').removeClass('.keyboard');*/
                                            // TODO: THESE TWO NOT WORKING :/
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
                                            //console.log("PLUGIN CLASSES AND CONTAINERS REMOVED SUCCESSFULLY");
                                            /*var style = $("<style />", {
                                                id  : 'cursorStyle',
                                                type: 'text/css',
                                                html: "*{ cursor: url(" + butterflEyeLocation + "mouse_eye_blue_large.png) 25 15, auto !important}"
                                            }).appendTo("head");*/
                                        });


                                        functionRunning = 0;
                                        //console.log("FunctionRunning = " + functionRunning);
                                        //jQuery('form').parent('div').removeClass("expose");
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


                            //GET CLASS NAME OF WHICH BUTTON THE MOUSE IS OVER
                            //CHECK IF THAT CLASS EXISTS
                            //IF YES THEN FOCUS ON THAT INPUT
                            //IF NO DO NOTHING
                            var textAreaRows;
                            var className;
                            var inputTimer;
                            var inputContainerButtons = jQuery('.inputCls').css('backgroundColor');
                            var newStyle;
                            jQuery.each(jQuery('button', '.inputContainer'), function () {
                                var input = $(this);
                                jQuery(this).mouseenter(function () {
                                    className = jQuery(this).attr('class').match(/\b(input\d+)\b/)[1];
                                    //jQuery(this).disabled = true;


                                    //url(" + butterflEyeLocation + "mouse_eye_blue_large.png)


                                    /*$('.butterflEyeCursor').hover(function(e){
                                        e.preventDefault();
                                    });*/







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
                                                            /*if(jQuery('div').hasClass('expose')){
                                                             jQuery('div').removeClass('expose');
                                                             }*/
                                                            //jQuery(this).addClass('expose');

                                                            jQuery(this).focus();
                                                            jQuery(this).focus();
                                                            $('#timer').remove();

                                                        }
                                                        //jQuery(this).focus();
                                                        //jQuery(this).trigger('click');
                                                        /*jQuery(this).on('focus',function(){

                                                         jQuery(this).keyboard({
                                                         stayOpen: false
                                                         }).addTyping({
                                                         showTyping : true,
                                                         delay : 50
                                                         });
                                                         });*/

                                                        /*var classNm = jQuery(this).attr('class');
                                                         jQuery(this).onfocus = function() {

                                                         }*/
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
                                    //$('#timer').remove();

                                });
                                $('#timer').remove();

                            });
                            var classnm;
                            //jQuery.each(jQuery('input', '.access'), function() {
                            var textareaRowNos = 0;

                            var keyBoardWidth;
                            var keyBoardHeight;
                            var keyBoardLeft;

                            jQuery('input, textarea', '.access').on('focus', function () {
                                //jQuery(this).trigger('click');
                                //if(jQuery(this).is(':focus')){
                                //jQuery(this).keyboard.init;
                                //jQuery(this).keyboard().destroy();
                                //var input = jQuery(this);

                                /*if(jQuery('input').hasAttr('required')){
                                 alert("HAS REQUIRED");
                                 }else{
                                 alert("DOES NOT HAVE REQUIRED");
                                 }*/
                                /*var input = jQuery(this);
                                 input.addClass('keyboard');*/

                                //var inputId = jQuery(this).attr('id');

                                //TODO: CHECK IF INPUT TYPE IS TEXT/NUMBER TO CHANGE KEYBOARD LAYOUT

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
                                    '<source src="data:audio/ogg;base64,T2dnUwACAAAAAAAAAAAeNgAAAAAAANvW9RoBHgF2b3JiaXMAAAAAAkSsAAD/////APQBAP////+4AU9nZ1MAAAAAAAAAAAAAHjYAAAEAAACqYSsQEUn/////////////////////A3ZvcmJpczkAAABCUzsgTGFuY2VyKFNTRSkgWzIwMDYxMTEwXSAoYmFzZWQgb24gYW9UdVYgYjUgWzIwMDYxMDI0XSkAAAAAAQV2b3JiaXMpQkNWAQAIAACAIkwYxIDQkFUAABAAAKCsN5Z7yL333nuBqEcUe4i9995746xH0HqIuffee+69pxp7y7333nMgNGQVAAAEAIApCJpy4ELqvfceGeYRURoqx733HhmFiTCUGYU9ldpa6yGT3ELqPeceCA1ZBQAAAgBACCGEFFJIIYUUUkghhRRSSCmlmGKKKaaYYsoppxxzzDHHIIMOOuikk1BCCSmkUEoqqaSUUkot1lpz7r0H3XPvQfgghBBCCCGEEEIIIYQQQghCQ1YBACAAAARCCCFkEEIIIYQUUkghpphiyimngNCQVQAAIACAAAAAAEmRFMuxHM3RHM3xHM8RJVESJdEyLdNSNVMzPVVURdVUVVdVXV13bdV2bdWWbddWbdV2bdVWbVm2bdu2bdu2bdu2bdu2bdu2bSA0ZBUAIAEAoCM5kiMpkiIpkuM4kgSEhqwCAGQAAAQAoCiK4ziO5EiOJWmSZnmWZ4maqJma6KmeCoSGrAIAAAEABAAAAAAA4HiK53iOZ3mS53iOZ3map2mapmmapmmapmmapmmapmmapmmapmmapmmapmmapmmapmmapmmapmmapmlAaMgqAEACAEDHcRzHcRzHcRxHciQHCA1ZBQDIAAAIAEBSJMdyLEdzNMdzPEd0RMd0TMmUVMm1XAsIDVkFAAACAAgAAAAAAEATLEVTPMeTPM8TNc/TNM0TTVE0TdM0TdM0TdM0TdM0TdM0TdM0TdM0TdM0TdM0TdM0TdM0TdM0TVMUgdCQVQAABAAAIZ1mlmqACDOQYSA0ZBUAgAAAABihCEMMCA1ZBQAABAAAiKHkIJrQmvPNOQ6a5aCpFJvTwYlUmye5qZibc84555xszhnjnHPOKcqZxaCZ0JpzzkkMmqWgmdCac855EpsHranSmnPOGeecDsYZYZxzzmnSmgep2Vibc85Z0JrmqLkUm3POiZSbJ7W5VJtzzjnnnHPOOeecc86pXpzOwTnhnHPOidqba7kJXZxzzvlknO7NCeGcc84555xzzjnnnHPOCUJDVgEAQAAABGHYGMadgiB9jgZiFCGmIZMedI8Ok6AxyCmkHo2ORkqpg1BSGSeldILQkFUAACAAAIQQUkghhRRSSCGFFFJIIYYYYoghp5xyCiqopJKKKsoos8wyyyyzzDLLrMPOOuuwwxBDDDG00kosNdVWY4215p5zrjlIa6W11lorpZRSSimlIDRkFQAAAgBAIGSQQQYZhRRSSCGGmHLKKaegggoIDVkFAAACAAgAAADwJM8RHdERHdERHdERHdERHc/xHFESJVESJdEyLVMzPVVUVVd2bVmXddu3hV3Ydd/Xfd/XjV8XhmVZlmVZlmVZlmVZlmVZlmUJQkNWAQAgAAAAQgghhBRSSCGFlGKMMcecg05CCYHQkFUAACAAgAAAAABHcRTHkRzJkSRLsiRN0izN8jRP8zTRE0VRNE1TFV3RFXXTFmVTNl3TNWXTVWXVdmXZtmVbt31Ztn3f933f933f933f933f13UgNGQVACABAKAjOZIiKZIiOY7jSJIEhIasAgBkAAAEAKAojuI4jiNJkiRZkiZ5lmeJmqmZnumpogqEhqwCAAABAAQAAAAAAKBoiqeYiqeIiueIjiiJlmmJmqq5omzKruu6ruu6ruu6ruu6ruu6ruu6ruu6ruu6ruu6ruu6ruu6ruu6QGjIKgBAAgBAR3IkR3IkRVIkRXIkBwgNWQUAyAAACADAMRxDUiTHsixN8zRP8zTREz3RMz1VdEUXCA1ZBQAAAgAIAAAAAADAkAxLsRzN0SRRUi3VUjXVUi1VVD1VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVXVNE3TNIHQkJUAABkAAMO05NJyz42gSCpHtdaSUeUkxRwaiqCCVnMNFTSISYshYgohJjGWDjqmnNQaUykZc1RzbCFUiEkNOqZSKQYtCEJDVggAoRkADscBJMsCJEsDAAAAAAAAAEnTAM3zAMvzAAAAAAAAAEDSNMDyNEDzPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJE0DNM8DNM8DAAAAAAAAAM3zAE8UAU8UAQAAAAAAAMDyPMATPcATRQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHE0DNM8DNM8DAAAAAAAAAMvzAE8UAc8TAQAAAAAAAEDzPMATRcATRQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAEOAAABFkKhISsCgDgBAIckQZIgSdA0gGRZ0DRoGkwTIFkWNA2aBtMEAAAAAAAAAAAAQPI0aBo0DaIIkDQPmgZNgygCAAAAAAAAAAAAIGkaNA2aBlEESJoGTYOmQRQBAAAAAAAAAAAA0EwToghRhGkCPNOEKEIUYZoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAgAEHAIAAE8pAoSErAoA4AQCHolgWAAA4kmNZAADgOJJlAQCAZVmiCAAAlqWJIgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACAAQcAgAATykChISsBgCgAAIeiWBZwHMsCjmNZQJIsC2BZAM0DaBpAFAGAAACAAgcAgAAbNCUWByg0ZCUAEAUA4FAUy9I0UeQ4lqVposiRLEvTRJFlaZrnmSY0zfNMEaLneaYJz/M804RpiqKqAlE0TQEAAAUOAAABNmhKLA5QaMhKACAkAMDhOJbleaLoeaJomqrKcSzL80RRFE1TVVWV42iW54miKJqmqqoqy9I0zxNFUTRNVVVdaJrniaIomqaqui48z/NEURRNU1VdF57neaIoiqapqq4LURRF0zRNVVVV1wWiaJqmqaqq6rpAFEXTNFVVVV0XiKIomqaqqq7rAtM0TVVVVdeVXYBpqqqquq7rAlRVVV3XdWUZoKqq6rquK8sA13Vd15VlWQbguq7ryrIsAADgwAEAIMAIOsmosggbTbjwABQasiIAiAIAAIxhSjGlDGMSQgqhYUxCSCFkUlIqKaUKQiollVJBSKWkUjJKLaWWUgUhlZJKqSCkUlIpBQCAHTgAgB1YCIWGrAQA8gAACGOUYowx5yRCSjHmnHMSIaUYc845qRRjzjnnnJSSMeecc05K6ZhzzjknpWTMOeeck1I655xzzkkppXTOOeeklFJC6Bx0UkopnXMOQgEAQAUOAAABNopsTjASVGjISgAgFQDA4DiWpWmeJ4qmaUmSpnme54mmqmqSpGmeJ4qmqao8z/NEURRNU1V5nueJoiiapqpyXVEURdM0TVUly6JoiqapqqoL0zRN01RV14VpmqZpqqrrwrZVVVVd13Vh26qqqq7rysB1Xdd1ZRnIruu6riwLAABPcAAAKrBhdYSTorHAQkNWAgAZAACEMQgphBBSyCCkEEJIKYWQAACAAQcAgAATykChISsBgFQAAIAQa6211lprDWPWWmuttdYS56y11lprrbXWWmuttdZaa6211lprrbXWWmuttdZaa6211lprrbXWWmuttdZaa6211lprrbXWWmuttdZaa6211lprrbXWWmuttdZaa6211lprrbXWWmuttVYAIHaFA8BOhA2rI5wUjQUWGrISAAgHAACMQYgx6CSUUkqFEGPQSUiltRgrhBiDUEpKrbWYPOcchFJaai3G5DnnIKTUWowxJtdCSCmllmKLsbgWQioptdZirMkYlVJqLbYYa+3FqJRKSzHGGGswxubUWowx1lqLMTq3EkuMMcZahBHGxRZjrLXXIowRssXSWq21BmOMsbm12GrNuRgjjK4ttVZrzQUAmDw4AEAl2DjDStJZ4WhwoSErAYDcAAACIaUYY8w555xzDkIIqVKMOecchBBCCKGUUlKlGHPOOQghhFBCKaWkjDHmHIQQQgillFJKaSllzDkIIYRQSimllNJS65xzEEIIpZRSSiklpdQ55yCEUEoppZRSSkothBBCKKGUUkoppZSUUkohhFBKKaWUUkopqaWUQgillFJKKaWUUlJKKYUQQimllFJKKaWklForpZRSSimllFJKSS21lFIopZRSSimllJJaSimlUkoppZRSSiklpdRSSqWUUkoppZRSSkuppZRKKaWUUkoppZSUUkoppVRKKaWUUkopKaXUWkoppZRKKaWUUlprKaWWUiqllFJKKaW01FprLbWUSimllFJKaa21lFJKKZVSSimllFIAANCBAwBAgBGVFmKnGVcegSMKGSagQkNWAgBkAAAMo5RSSS1FgiKlGKSWQiUVc1BSiihzDlKsqULOIOYklYoxhJSDVDIHlVLMQQohZUwpBq2VGDrGmKOYaiqhYwwAAABBAACBkAkECqDAQAYAHCAkSAEAhQWGDhEiQIwCA+Pi0gYAIAiRGSIRsRgkJlQDRcV0ALC4wJAPABkaG2kXF9BlgAu6uOtACEEIQhCLAyggAQcn3PDEG55wgxN0ikodCAAAAACAAwA8AAAkG0BERDRzHB0eHyAhIiMkJU9nZ1MAAQAAAAAAAAAAHjYAAAIAAACOD874ATwmJygCAAAAAMAGAB8AAEkKEBERzRxHh8cHSIjICEmJyQlKAAAggAAAAAAACCAAAQEBAAAAAIAAAAAAAQFPZ2dTAATCBwAAAAAAAB42AAADAAAAmsvasgtRWF1gWVv/j0RfWnwd9zKyYic0V8ib0uaCzcCdfZ9+cb53jjEX0lzysPP8No9t7n1c1/axbev4/XETLA15RZ9/P9vKzOV12d/fl6z8/Su0DZIU2bHCXf/z87NQABwmK8WO+5XdAHrw+eRgq4pjm4pyHT21glmb49zED4yN0zw90DSw97Bf9lGqPu+EnV24jpepoBul2j5PhvHvfJ3pznw6CAxDQPjnJ6Jvf71jiMiK8v2HJQZcVm8ClmaXNJXWRYCpS5uUsbgDbG6Oju4KN3m/AwpApB/uLlEhrExEddzvNoy6YM254cNXV0fzyvu6TIiN67sqTad0N310+CZxqKJmfXVf9DfI4o++kYevMeQxAABsat8IrUoj2ah3eTU09dne8qf3uZdj7xxjbrlxBQWuvr1dFjdxl8bpOi8scnC+nPsb0ec55LiyzDEkHR+uYNx83u/cxHxukfLpO1hyYqt/L08vfQIFMJwwgF/+UkGsjwK0epfKmKOddDL86WkXJZuKEp76trgdHRau3xjj9LWZN22Nl/5oX7++upbHvd/FrfHBMsptMm5rk2R+9of54RfYAQ189xf61p9Y/lwQ/eLLsgTkF8qVcDMaAJxmF06ZIsiJXeq9ibx7vNhL9QHsNeoH+SwL0AewJ6u/I4dsUFE+pqT31U5Ya/zV/+UwWDmzycWs/a3Wn/17vz3ruStpCPyh5Uj4pBfok1fKM5eOPtkXP5hoQgCS+eSk2K9APAgVt13QZ5SLeL8WjpVWoX334+xqny1bV/t2X7Xqxmdd3OeVbXuuVDVmjerwGU35a14bArDzrwfRIAAMZ2Z9/1ITS2wfbO357Oy/9quvXn2OP428mVFAUVWJTnTS+dUDPb0xnd+S2WLwB4sW08hsZW2m7dX1ZihXGeQEa13iVJxQSbrbXjCijvt0adpZ2VTEaFRUVsIzv3/lHcXy4uVthsdM1cG8HF9GsZjHzf5t5mx9iTO9oaw5n3YWdCoOnBX5eaFrG4DpRzEv35MFA3leZ9rQMDx/4ni71izx+vtPrllzuSYUNNGgahvIOyFvTWmNKqnrVJaAw9vNmut+OwNkXrV62AXL2nMSnj3PABRkca4iLcuyxfuAANCnubxfrJfO6eld8a9Ar7+66S3L+vormF1RzCYhsT63ZAEC8VZo81url2plAJDVSnqWjM9Le5n52GZeeQNeyQAAkNTBECyQAQB4/v+2jEGWZaWiiKqIiu48/5yCAOHLgK8rAt/+6gMhYelXkoQAABQGF4HIKbDUY5FoCh70lulf9avRl9Uqxs7AISHUcLnhaPoPExnFyYv1UAVnovVoFlYtrr/CQty/re1cwi8sgNcj8xQA5B3H2a57pI561nr7AS4+mPz266v2iDTWaB9HAr93gPUdcviT9b8vPgXG+2XzYf/QL//8z3tdojdf/yY/z+8MvlHj9V25nmN+WUWVk/ffk/fbH/9ffNGhZv76zV20RQCMDXei8f+aBcGWej+d7aYOClX6x+9CbGtzDG6dB0T9LsmwJiWwnXXqvC/IWqOvT8k2Z2ZZnS9Tmmdkvb99X3dCjyqwXj756v0losbDfzCu189cw8PfUQEe3wA="' +
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

                                            /*$('.ui-keyboard').css({
                                             'top': 0
                                             });*/

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
                                                //jQuery(this).addClass('testing');
                                                //jQuery.each(jQuery('span', 'button'), function(){
                                                var btn = jQuery(this);
                                                keyboardBtnColor = jQuery(btn).css('background-color');
                                                btn.mouseenter(function (e) {
                                                    //if(playPause == 0) {
                                                        keyboardBtnColor = jQuery(this).css('background-color');
                                                        btn.css({
                                                            'background-color': keyboardButtonColor
                                                        });

                                                        //alert("ENTERED");
                                                        //jQuery(this).mouseenter();
                                                        //classnm = "." + jQuery(this).attr('class').match(/\b(ui-keyboard-\d+)\b/)[1];
                                                        if (btn.has('.ui-state-hover')) {
                                                            //alert("ENTERED IN THIS FUNCTION");
                                                            //setInterval(function(){
                                                            jQuery(this).animate({
                                                                'background-color': "green"
                                                            }, keyboardButtonTime, "linear", function () {
                                                                //timer = setTimeout(function () {
                                                                btn.on("click",function(){
                                                                    btn.stop(true).animate({
                                                                        'backgroundColor': keyboardBtnColor
                                                                    },10);
                                                                });
                                                                btn.click();

                                                                timer = setInterval(function () {

                                                                    /* btn.css({
                                                                     'opacity': 10.0
                                                                     });*/
                                                                    btn.animate({
                                                                        'backgroundColor': 'green'
                                                                    }, keyboardButtonTime, "linear", function(){
                                                                        btn.click();
                                                                    });

                                                                    /*btn.mousedown(function(){
                                                                     btn.mouseup();
                                                                     });*/

                                                                    //console.log("Pressed: " + btn.text() + "at: " + new Date(jQuery.now()));
                                                                }, keyboardButtonTime);

                                                                console.log("Pressed: " + btn.text() + "at: " + new Date(jQuery.now()));
                                                                //}, keyboardButtonTime);
                                                                //}, 2000);
                                                            });
                                                        }
                                                        /*jQuery(classnm).on('click', function (e) {
                                                         alert("CLICKED");
                                                         //keyboard.addKey(classnm, eKey.keyBtn.name, true);
                                                         e.preventDefault();
                                                         });*/
                                                    //}else{}
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
                                            //keyboard.destroy();
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
                                            /*customLayout: {
                                             'default': [
                                             'q w e r t y u i o p',
                                             'a s d f g h j k l',
                                             '{shift} z x c v b n m {bksp}',
                                             '{meta1} {accept} {space} {cancel}'
                                             ],
                                             'shift': [
                                             'Q W E R T Y U I O P',
                                             'A S D F G H J K L',
                                             '{shift} Z X C V B N M {bksp}',
                                             '{meta1} {accept} {space} {cancel}'
                                             ],
                                             'meta1': [
                                             '1 2 3 4 5 6 7 8 9 0',
                                             '@ # % & * / - + ( )',
                                             '? ! " \' : ; { } [ ] {b}',
                                             '{default} {accept} {space} {cancel}'
                                             ]
                                             },
                                             display:{
                                             'meta1' : '.?123',
                                             'default': 'ABC'
                                             },*/
                                            //FIRST VERSION
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



                                                /*$('.ui-keyboard-preview').autocomplete({
                                                 source: availableTags2
                                                 });*/


                                                //$('.ui-autocomplete').appendTo('.ui-keyboard');
                                                /*$('.ui-autocomplete').css({
                                                 'top': '',
                                                 'left': ''
                                                 });*/


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
                                                    //alert(textAreaRows);

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
                                                //$(this).css('background-color', '#dddddd');
                                                /*$('.ui-keyboard-button').each(function(){
                                                 $(this).css('background-color', '#dddddd');
                                                 });*/
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

                                                /*$.each($('.ui-keyboard-button', '.ui-keyboard-keyset'), function () {
                                                 //$(this).css('background-color', '#dddddd');


                                                 $(this).children().css({
                                                 'color': textColor
                                                 });
                                                 });*/

                                                var keyboardInterval;

                                                var keyboardBtnColor;

                                                jQuery('.ui-keyboard-preview-wrapper').children('textarea').attr("rows", textareaRowNos);
                                                jQuery.each(jQuery('.ui-keyboard-button', '.ui-keyboard-keyset'), function () {
                                                    //jQuery(this).addClass('testing');
                                                    //jQuery.each(jQuery('span', 'button'), function(){
                                                    var btn = jQuery(this);
                                                    var btnClass = btn.attr('class');

                                                    /*$('.ui-keyboard').mousemove(function(e){
                                                     if( isNear( $(btnClass), 20, e ) ) {
                                                     if (btn.has('.ui-state-hover')) {
                                                     //alert("ENTERED IN THIS FUNCTION");
                                                     //setInterval(function(){

                                                     timer = setTimeout(function () {

                                                     btn.css({
                                                     'opacity': 10.0
                                                     });
                                                     btn.click();
                                                     console.log("Pressed: " + btn.text() + "at: " + new Date(jQuery.now()));

                                                     }, keyboardButtonTime);

                                                     }
                                                     } else {*/

                                                    btn.mouseenter(function (e) {
                                                        //if(playPause == 0) {
                                                            keyboardBtnColor = jQuery(this).css('background-color');


                                                            btn.css({
                                                                'background-color': keyboardButtonColor
                                                            });
                                                            //alert("ENTERED");
                                                            //jQuery(this).mouseenter();
                                                            //classnm = "." + jQuery(this).attr('class').match(/\b(ui-keyboard-\d+)\b/)[1];
                                                            if (btn.has('.ui-state-hover')) {
                                                                //alert("ENTERED IN THIS FUNCTION");
                                                                //setInterval(function(){
                                                                $(this).animate({
                                                                    'background-color': "green"
                                                                }, keyboardButtonTime, "linear", function () {

                                                                    //timer = setTimeout(function () {

                                                                    /* btn.css({
                                                                     'opacity': 10.0
                                                                     });*/
                                                                    btn.on("click",function(){
                                                                        btn.stop(true).animate({
                                                                            'backgroundColor': keyboardBtnColor
                                                                        },10);
                                                                    });
                                                                    btn.click();

                                                                    timer = setInterval(function () {

                                                                        /* btn.css({
                                                                         'opacity': 10.0
                                                                         });*/
                                                                        btn.animate({
                                                                            'backgroundColor': 'green'
                                                                        }, keyboardButtonTime, "linear", function(){
                                                                            btn.click();
                                                                        });

                                                                        /*btn.mousedown(function(){
                                                                         btn.mouseup();
                                                                         });*/

                                                                        //console.log("Pressed: " + btn.text() + "at: " + new Date(jQuery.now()));
                                                                    }, keyboardButtonTime);

                                                                    console.log("Pressed: " + btn.text() + "at: " + new Date(jQuery.now()));

                                                                    //}, keyboardButtonTime);
                                                                });

                                                            }
                                                            /*jQuery(classnm).on('click', function (e) {
                                                             alert("CLICKED");
                                                             //keyboard.addKey(classnm, eKey.keyBtn.name, true);
                                                             e.preventDefault();
                                                             });*/
                                                        //}else{}
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
                                                    /*  }
                                                     });*/

                                                });
                                                addClickSound(keyboard);
                                            },
                                            hidden: function (e, keyboard, el) {
                                                jQuery('.audio').remove();
                                                //keyboard.destroy();
                                            },
                                            beforeClose: function (e, keyboard, el, accepted) {
                                                jQuery('.audio').remove();
                                                //keyboard.destroy();
                                                //inputThis.keyboard().getkeyboard().destroy();
                                                jQuery('.activity').css({
                                                    'top': 20,
                                                    'width': '15em',
                                                    'right': btnContainerWidth + 20
                                                });
                                                jQuery('.imageBtn').css({
                                                    'width': '',
                                                    'height': ''
                                                });
                                                //$('.ui-helper-hidden-accessible').hide();
                                                //$('.ui-autocomplete').empty();
                                            },
                                            beforeVisible: function (e, keyboard, el) {
                                                /*if($('.ui-autocomplete').length){
                                                 $('.ui-autocomplete').remove();
                                                 }else{}*/
                                            },
                                            canceled: function (e, keyboard, el) {
                                                //$('.ui-autocomplete').empty();
                                            }
                                            /*,
                                             visible: function(e, keyboard, el){
                                             jQuery.each(jQuery('.ui-keyboard-button', '.ui-keyboard-keyset'), function () {
                                             */
                                            /*var btn = jQuery(this);
                                             timer = setTimeout(function(){
                                             btn.mouseenter();
                                             }, 2000);*/
                                            /*
                                             jQuery(this).mouseenter(function(){

                                             timer = setTimeout(function(){

                                             }, 2000);
                                             }).mouseleave(function(){
                                             clearTimeout(timer);
                                             });
                                             });
                                             }*/
                                            /*,
                                             visible: function (e, keyboard, el) {
                                             var eKey = e;
                                             */
                                            /*keyboard.addKey();
                                             el.key();
                                             */
                                            /*
                                             */
                                            /*jQuery.each(jQuery('.ui-keyboard-button', '.ui-keyboard-keyset'), function () {
                                             jQuery(this).addClass('testing');
                                             //jQuery.each(jQuery('span', 'button'), function(){
                                             jQuery(this).on('mouseenter', function (e) {
                                             alert("ENTERED");
                                             //jQuery(this).mouseenter();
                                             classnm = "." + jQuery(this).attr('class').match(/\b(ui-keyboard-\d+)\b/)[1];
                                             jQuery(classnm).click();


                                             jQuery(classnm).on('click', function (e) {
                                             alert("CLICKED");
                                             keyboard.addKey(classnm, eKey.keyBtn.name, true);
                                             e.preventDefault();
                                             });

                                             });
                                             //});
                                             });*/
                                            /*
                                             }*/
                                        }).addTyping({
                                            showTyping: true,
                                            delay: 50
                                        });
                                    } else {

                                        inputThis.keyboard({
                                            stayOpen: false,
                                            keyBinding: 'click',
                                            layout: 'custom',
                                            /*customLayout: {
                                             'default': [
                                             'q w e r t y u i o p',
                                             'a s d f g h j k l',
                                             '{shift} z x c v b n m {bksp}',
                                             '{meta1} {accept} {space} {cancel}'
                                             ],
                                             'shift': [
                                             'Q W E R T Y U I O P',
                                             'A S D F G H J K L',
                                             '{shift} Z X C V B N M {bksp}',
                                             '{meta1} {accept} {space} {cancel}'
                                             ],
                                             'meta1': [
                                             '1 2 3 4 5 6 7 8 9 0',
                                             '@ # % & * / - + ( )',
                                             '? ! " \' : ; { } [ ] {b}',
                                             '{default} {accept} {space} {cancel}'
                                             ]
                                             },
                                             display:{
                                             'meta1' : '.?123',
                                             'default': 'ABC'
                                             },*/
                                            //FIRST VERSION
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

                                                /*if($('button.pause').length){
                                                 jQuery.each(jQuery('.ui-keyboard-button', '.ui-keyboard-keyset'), function () {
                                                 $(this).prop("disabled");
                                                 });
                                                 }*/

                                                keyBoardWidth = $('.ui-keyboard').width() + 5;
                                                /*$('.ui-menu-item').on("mouseenter", function(){
                                                 $(this).children('a').click();
                                                 });*/
                                                /*$('.ui-menu-item').on("mouseenter", function(){
                                                 value = $(this).children('a').html();
                                                 });*/

                                                //$('.ui-autocomplete-input').val($('.ui-autocomplete-input').val() + value );


                                                /*if($('.ui-autocomplete').length){
                                                 $( "input.ui-autocomplete-input" ).val( function( index, val ) {
                                                 if(val == "undefined"){
                                                 return "";
                                                 }else {
                                                 return val + value;
                                                 }
                                                 });
                                                 }else{}*/

                                                //keyBoardHeight = $('.ui-keyboard').height();
                                                //keyBoardLeft = $('.ui-keyboard').css("left");


                                                /*if ($('.ui-autocomplete').length) {
                                                 $('.ui-autocomplete').css({
                                                 'display': 'block'
                                                 });
                                                 $('.ui-autocomplete').empty();
                                                 } else {
                                                 }*/
                                                var availableTags2 =
                                                    ["the", "and", "to", "of", "a", "I", "in", "was", "he",
                                                        "that", "it", "his", "her", "you", "as", "had", "with",
                                                        "for", "she", "not", "at", "but", "be", "my", "on", "have",
                                                        "him", "is", "said", "me", "which", "by", "so", "this", "all",
                                                        "from", "they", "no", "were", "if", "would", "or", "when",
                                                        "what", "there", "been", "one", "could", "very", "an"]; // TODO: AUTOCOMPLETE WORDS
                                                $('.ui-keyboard').css({
                                                    'top': 0
                                                });

                                                /*$('.ui-keyboard-preview').autocomplete({
                                                 source: availableTags2
                                                 });*/


                                                //$('.ui-autocomplete').appendTo('.ui-keyboard');
                                                /*$('.ui-autocomplete').css({
                                                 'top': '',
                                                 'left': ''
                                                 });*/


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
                                                    //alert(textAreaRows);

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
                                                //$(this).css('background-color', '#dddddd');
                                                /*$('.ui-keyboard-button').each(function(){
                                                 $(this).css('background-color', '#dddddd');
                                                 });*/
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

                                                /*$.each($('.ui-keyboard-button', '.ui-keyboard-keyset'), function () {
                                                 //$(this).css('background-color', '#dddddd');


                                                 $(this).children().css({
                                                 'color': textColor
                                                 });
                                                 });*/

                                                var keyboardInterval;

                                                var keyboardBtnColor;



                                                jQuery('.ui-keyboard-preview-wrapper').children('textarea').attr("rows", textareaRowNos);
                                                jQuery.each(jQuery('.ui-keyboard-button', '.ui-keyboard-keyset'), function () {
                                                    //jQuery(this).addClass('testing');
                                                    //jQuery.each(jQuery('span', 'button'), function(){
                                                    var btn = jQuery(this);
                                                    var btnClass = btn.attr('class');

                                                    /*$('.ui-keyboard').mousemove(function(e){
                                                     if( isNear( $(btnClass), 20, e ) ) {
                                                     if (btn.has('.ui-state-hover')) {
                                                     //alert("ENTERED IN THIS FUNCTION");
                                                     //setInterval(function(){

                                                     timer = setTimeout(function () {

                                                     btn.css({
                                                     'opacity': 10.0
                                                     });
                                                     btn.click();
                                                     console.log("Pressed: " + btn.text() + "at: " + new Date(jQuery.now()));

                                                     }, keyboardButtonTime);

                                                     }
                                                     } else {*/




                                                    btn.mouseenter(function (e) {
                                                        //if(playPause == 0) {
                                                            keyboardBtnColor = jQuery(this).css('background-color');


                                                            btn.css({
                                                                'background-color': keyboardButtonColor
                                                            });
                                                            //alert("ENTERED");
                                                            //jQuery(this).mouseenter();
                                                            //classnm = "." + jQuery(this).attr('class').match(/\b(ui-keyboard-\d+)\b/)[1];
                                                            if (btn.has('.ui-state-hover')) {
                                                                //alert("ENTERED IN THIS FUNCTION");
                                                                //setInterval(function(){
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

                                                                        /* btn.css({
                                                                         'opacity': 10.0
                                                                         });*/
                                                                        btn.animate({
                                                                            'backgroundColor': 'green'
                                                                        }, keyboardButtonTime, "linear", function(){
                                                                            btn.click();
                                                                        });

                                                                        /*btn.mousedown(function(){
                                                                         btn.mouseup();
                                                                         });*/

                                                                        //console.log("Pressed: " + btn.text() + "at: " + new Date(jQuery.now()));
                                                                    }, keyboardButtonTime);

                                                                    //}, keyboardButtonTime);
                                                                });

                                                            }


                                                            /*jQuery(classnm).on('click', function (e) {
                                                             alert("CLICKED");
                                                             //keyboard.addKey(classnm, eKey.keyBtn.name, true);
                                                             e.preventDefault();
                                                             });*/
                                                        //}else{}
                                                    }).mouseleave(function () {
                                                        $(btn).css({
                                                            'background-color': keyboardBtnColor
                                                        });
                                                        $(btn).stop(true).animate({
                                                            'backgroundColor': keyboardBtnColor
                                                        }, 100, "linear", function () {
                                                            clearInterval(timer);

                                                        });
                                                        //btn.mouseup();

                                                    });
                                                    /*  }
                                                     });*/
                                                    /*if($('ul.myAutoComplete').length){

                                                     jQuery.each(jQuery('li.myAutoComplete-menu-item', 'ul.myAutoComplete'), function () {

                                                     var listBtn = $('li.myAutoComplete-menu-item').children('button');
                                                     listBtn.on('mouseenter', function () {
                                                     $(this).animate({
                                                     'background-color': "green"
                                                     }, keyboardButtonTime, "linear", function () {

                                                     });

                                                     });
                                                     });
                                                     }*/

                                                });
                                                addClickSound(keyboard);
                                            },
                                            hidden: function (e, keyboard, el) {
                                                jQuery('.audio').remove();
                                                //keyboard.destroy();
                                            },
                                            beforeClose: function (e, keyboard, el, accepted) {
                                                jQuery('.audio').remove();
                                                //keyboard.destroy();
                                                //inputThis.keyboard().getkeyboard().destroy();
                                                jQuery('.activity').css({
                                                    'top': 20,
                                                    'width': '15em',
                                                    'right': btnContainerWidth + 20
                                                });
                                                jQuery('.imageBtn').css({
                                                    'width': '',
                                                    'height': ''
                                                });
                                                //$('.ui-autocomplete').appendTo("body");
                                                //$('.ui-helper-hidden-accessible').hide();
                                                //$('.ui-autocomplete').empty();
                                            },
                                            change      : function(e, keyboard, el) {
                                                //alert("Change to " + el.value);
                                                /*inputThis.autocomplete({
                                                 source: availableTags
                                                 }).addAutocomplete();*/
                                                //alert(keyboard.$preview.val());

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
                                                    //console.log(finalCount);
                                                    //splitValue = val.split(" ");
                                                    if (finalCount > 1) {
                                                        if($('ul.myAutoComplete').length){
                                                            $('ul.myAutoComplete').remove();
                                                        }
                                                        temp = val.split(" ");
                                                        for(j in temp){
                                                            splitValue.push(temp[j]);
                                                            tempValue.push(temp[j]);
                                                        }
                                                        //splitValue.push(val.split(" "));
                                                    } else {
                                                        //temp = $.trim(val);
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
                                                        //inputVal = splitValue;
                                                    }



                                                    var avTags;


                                                    for (var i = 0; i <= splitValue.length - 1; i++) {
                                                        for (var j = 0; j <= availableTags.length - 1; j++) {
                                                            avTags = availableTags[j];

                                                            inputVal = splitValue[i];
                                                            /*if($.inArray(splitValue[i], availableTags)){
                                                             alert("found");
                                                             }*/
                                                            /*if(splitValue[i].match(availableTags[j])){
                                                             console.log("found");
                                                             }*/
                                                            if(inputVal != "") {
                                                                if(inputVal.length > 1 && inputVal.length < 3){
                                                                    var size = inputVal.length;

                                                                    if(avTags.length >= size){
                                                                        if (((avTags[0].toLowerCase().indexOf(inputVal[0])) > -1) && ((avTags[1].toLowerCase().indexOf(inputVal[1])) > -1)) {
                                                                            //console.log("Found match: " + avTags);
                                                                            arr.push(avTags);
                                                                        }
                                                                    }/*else{

                                                                    }*/
                                                                    /*else{
                                                                        if (((avTags[0].toLowerCase().indexOf(inputVal[0])) > -1)) {
                                                                            //console.log("Found match: " + avTags);
                                                                            arr.push(avTags);
                                                                        }
                                                                    }*/


                                                                }else {
                                                                    if ((avTags[0].toLowerCase().indexOf(inputVal)) > -1) {
                                                                        //console.log("Found match: " + avTags);
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
                                                        /*if (avTags.indexOf(splitValue[i])) {
                                                         console.log("found: " + availableTags[j]);
                                                         arr.push(availableTags[j]);
                                                         }*/

                                                        /*$.each(availableTags, function(index, value){
                                                         $.each(value, function(key, cell){
                                                         if(val.indexOf(cell) !== -1){
                                                         alert("Found" + cell);
                                                         }
                                                         });
                                                         });*/

                                                        /*for(var j=0; j < availableTags.size(); j++){
                                                         if(splitValue[i].toString() == availableTags[j].toString()){
                                                         arr.push(availableTags[j]);
                                                         }
                                                         */
                                                        /*if($.inArray(splitValue[i].toString(), availableTags)){
                                                         arr.push()
                                                         }*/
                                                        /*
                                                         }*/
                                                    }

                                                    /* var cache = {};
                                                     var drew = false;

                                                     //$("#search").on("keyup", function(event){
                                                     var query = inputThis.val()

                                                     if(inputThis.val().length > 2){

                                                     //Check if we've searched for this term before
                                                     if(query in cache){
                                                     results = cache[query];
                                                     }
                                                     else{
                                                     //Case insensitive search for our people array
                                                     var results = $.grep(availableTags, function(item){
                                                     return item.search(RegExp(query, "i")) != -1;
                                                     });

                                                     //Add results to cache
                                                     cache[query] = results;
                                                     }

                                                     //First search
                                                     if(drew == false){
                                                     //Create list for results
                                                     inputThis.after('<ul class=".ui-autocomplete"></ul>');

                                                     //Prevent redrawing/binding of list
                                                     drew = true;

                                                     //Bind click event to list elements in results
                                                     $(".ui-autocomplete").on("click", "li", function(){
                                                     inputThis.val($(this).text());
                                                     $(".ui-autocomplete").empty();
                                                     });
                                                     }
                                                     //Clear old results
                                                     else{
                                                     $(".ui-autocomplete").empty();
                                                     }

                                                     //Add results to the list
                                                     for(term in results){
                                                     $(".ui-autocomplete").append("<li>" + results[term] + "</li>");
                                                     }
                                                     }
                                                     //Handle backspace/delete so results don't remain with less than 3 characters
                                                     else if(drew){
                                                     $(".ui-autocomplete").empty();
                                                     }*/
                                                    //});
                                                }

                                                if(arr.length > 0){

                                                    /*if($('.myAutoComplete').length){
                                                     $(this).remove();
                                                     }*/

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
                                                        'z-index': 9999999,//16000,
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
                                                                        /*if ((tempValue.indexOf(inputVal)) > -1) {

                                                                         tempValue[i] = btnText;
                                                                         }*/

                                                                        newText += tempValue[i] + " ";
                                                                    }

                                                                    var clicky = jQuery('#clicky')[0];

                                                                    clicky.pause();
                                                                    clicky.play();
                                                                    keyboard.$preview.val(newText);
                                                                    //if($('ul.myAutoComplete').length){
                                                                    var time = setTimeout(function(){
                                                                        $('ul.myAutoComplete').remove();
                                                                    }, 500);

                                                                    //}
                                                                });

                                                            }).mouseleave(function(){
                                                                stoplistBtnAnimate.css({
                                                                    'background-color': myAutoCompleteBtnColor
                                                                });
                                                                stoplistBtnAnimate.stop(true).animate({
                                                                    'backgroundColor': myAutoCompleteBtnColor
                                                                }, 100, "linear", function () {
                                                                    //clearTimeout(timer);

                                                                });
                                                            });


                                                        });
                                                    }
                                                }
                                            },
                                            beforeVisible: function (e, keyboard, el) {
                                                /*if($('.ui-autocomplete').length){
                                                 $('.ui-autocomplete').remove();
                                                 }else{}*/

                                            },
                                            canceled: function (e, keyboard, el) {
                                                //$('.ui-autocomplete').empty();
                                                $('.ui-autocomplete').appendTo("body");
                                            }
                                            /*,
                                             visible: function(e, keyboard, el){
                                             jQuery.each(jQuery('.ui-keyboard-button', '.ui-keyboard-keyset'), function () {
                                             */
                                            /*var btn = jQuery(this);
                                             timer = setTimeout(function(){
                                             btn.mouseenter();
                                             }, 2000);*/
                                            /*
                                             jQuery(this).mouseenter(function(){

                                             timer = setTimeout(function(){

                                             }, 2000);
                                             }).mouseleave(function(){
                                             clearTimeout(timer);
                                             });
                                             });
                                             }*/
                                            /*,
                                             visible: function (e, keyboard, el) {
                                             var eKey = e;
                                             */
                                            /*keyboard.addKey();
                                             el.key();
                                             */
                                            /*
                                             */
                                            /*jQuery.each(jQuery('.ui-keyboard-button', '.ui-keyboard-keyset'), function () {
                                             jQuery(this).addClass('testing');
                                             //jQuery.each(jQuery('span', 'button'), function(){
                                             jQuery(this).on('mouseenter', function (e) {
                                             alert("ENTERED");
                                             //jQuery(this).mouseenter();
                                             classnm = "." + jQuery(this).attr('class').match(/\b(ui-keyboard-\d+)\b/)[1];
                                             jQuery(classnm).click();


                                             jQuery(classnm).on('click', function (e) {
                                             alert("CLICKED");
                                             keyboard.addKey(classnm, eKey.keyBtn.name, true);
                                             e.preventDefault();
                                             });

                                             });
                                             //});
                                             });*/
                                            /*
                                             }*/
                                        }).addTyping({
                                            showTyping: true,
                                            delay: 50
                                        })/*.autocomplete({
                                         source: function( request, response ) {
                                         // delegate back to autocomplete, but extract the last term
                                         response( $.ui.autocomplete.filter(
                                         availableTags, extractLast( request.term ) ) );
                                         },
                                         focus: function () {
                                         // prevent value inserted on focus
                                         return false;
                                         },
                                         open: function (event, ui) {
                                         $('.ui-autocomplete').appendTo('.ui-keyboard');


                                         $('.ui-autocomplete').css({
                                         'top': '',
                                         'left': '',
                                         'z-index': 16000,
                                         'position': 'relative',
                                         'display': '',
                                         'width': keyBoardWidth
                                         });

                                         $('.ui-menu-item').on("mouseenter", function(){
                                         //inputThis.data('ui-autocomplete')._trigger('select', 'autocompleteselect', {item:{value:inputThis.val()}});
                                         //$(this).children('a').click();
                                         if($('.ui-autocomplete-input').val().length < 2){
                                         $('.ui-autocomplete-input').val("");
                                         $('.ui-autocomplete-input').val($(this).children('a').html() + " ");

                                         var time = setTimeout(function(){
                                         $(".ui-autocomplete").empty();
                                         }, 1000);


                                         }else {
                                         $('.ui-autocomplete-input').val("");
                                         $('.ui-autocomplete-input').val($('.ui-autocomplete-input').val() + $(this).children('a').html() + " ");

                                         var time = setTimeout(function(){
                                         $(".ui-autocomplete").empty();
                                         }, 1000);
                                         }
                                         });
                                         },
                                         search: function() {
                                         var term = extractLast(this.value);
                                         if (term.length < 2) {
                                         return false;
                                         }
                                         },
                                         select: function( event, ui ) {

                                         var terms = split( this.value );
                                         // remove the current input
                                         terms.pop();
                                         // add the selected item
                                         terms.push( ui.item.value );
                                         // add placeholder to get the comma-and-space at the end
                                         terms.push( "" );
                                         this.value = terms.join( ", " );
                                         return false;
                                         }
                                         }).addAutocomplete()*/;/*.autocomplete({

                                         source: function( request, response ) {
                                         // delegate back to autocomplete, but extract the last term
                                         response( $.ui.autocomplete.filter(
                                         availableTags, extractLast( request.term ) ) );
                                         },
                                         focus: function () {
                                         // prevent value inserted on focus
                                         return false;
                                         },
                                         multiple: true,//function(request, response) {
                                         *//* $.getJSON( "http://words.bighugelabs.com/api/2/4d2b71bf694806a41c24002971e84d2a/"+ request.term + "/json", function( data ) {
                                         var items = [];
                                         $.each( data, function( key, val ) {
                                         items.push( "<li id='" + key + "'>" + val + "</li>" );
                                         });

                                         $('.ui-autocomplete').html(items.join(""));
                                         });

                                         $.ajax({
                                         url: "http://words.bighugelabs.com/api/2/4d2b71bf694806a41c24002971e84d2a/"+ request.term + "/",
                                         success: function(data) {
                                         //alert(data);
                                         response($.map(data.noun, function(v,i){
                                         alert(v.syn);
                                         return {
                                         label: v.syn
                                         };
                                         }));
                                         }
                                         });*//*
                                         *//*$.ajax({
                                         dataType: 'jsonp',
                                         url: 'http://words.bighugelabs.com/api/2/333bc136682f670f47899fbd36b2706c/' + request.term + '/json',
                                         success: function(json) {
                                         //displayResults(request.term, json);
                                         $.each(json, function(partOfSpeech, wordList) {
                                         if (wordList.syn !== undefined) {
                                         //createList('synonyms', wordList.syn);
                                         var words = wordList.syn;
                                         words.forEach(function(el, i, arr) {
                                         //response(el);
                                         $('.ui-autocomplete').append('<li class="ui-menu-item" role="presentation"><a id="ui-id-' + i + '" class="ui-corner-all" tabindex="-1">' + el + '</a></li>');
                                         });

                                         }
                                         });
                                         $('.ui-autocomplete').appendTo('.ui-keyboard');



                                         $('.ui-autocomplete').css({
                                         'top': '',
                                         'left': '',
                                         'z-index': 16000,
                                         'position': 'relative',
                                         'display': '',
                                         'width': keyBoardWidth
                                         });
                                         }
                                         });*//*
                                         //},
                                         *//*minLength: 1,
                                         position: { my : "right top", at: "right bottom" },*//*
                                         open: function (event, ui) {
                                         $('.ui-autocomplete').appendTo('.ui-keyboard');


                                         $('.ui-autocomplete').css({
                                         'top': '',
                                         'left': '',
                                         'z-index': 16000,
                                         'position': 'relative',
                                         'display': '',
                                         'width': keyBoardWidth
                                         });

                                         $('.ui-menu-item').on("mouseenter", function(){
                                         //inputThis.data('ui-autocomplete')._trigger('select', 'autocompleteselect', {item:{value:inputThis.val()}});
                                         //$(this).children('a').click();
                                         if($('.ui-autocomplete-input').val().length < 2){
                                         $('.ui-autocomplete-input').val("");
                                         $('.ui-autocomplete-input').val($(this).children('a').html() + " ");

                                         var time = setTimeout(function(){
                                         $(".ui-autocomplete").empty();
                                         }, 1000);


                                         }else {
                                         $('.ui-autocomplete-input').val("");
                                         $('.ui-autocomplete-input').val($('.ui-autocomplete-input').val() + $(this).children('a').html() + " ");

                                         var time = setTimeout(function(){
                                         $(".ui-autocomplete").empty();
                                         }, 1000);
                                         }
                                         });
                                         },
                                         search: function() {
                                         var term = extractLast(this.value);
                                         if (term.length < 2) {
                                         return false;
                                         }
                                         },
                                         select: function( event, ui ) {

                                         var terms = split( this.value );
                                         // remove the current input
                                         terms.pop();
                                         // add the selected item
                                         terms.push( ui.item.value );
                                         // add placeholder to get the comma-and-space at the end
                                         terms.push( "" );
                                         this.value = terms.join( ", " );
                                         return false;
                                         }*//*
                                         ,
                                         close: function(event, ui){
                                         if($('.ui-autocomplete').length){
                                         $('.ui-autocomplete').remove();
                                         }
                                         }
                                         *//*
                                         }).addAutocomplete()*/
                                        /*.autocomplete( "instance" )._renderItem = function( ul, item ) {
                                         return $( "<li>" )
                                         .append( "<a>" + item.label + "<br>" + item.desc + "</a>" )
                                         .appendTo( ul );
                                         }*/

                                        /*,
                                         keyBinding: 'click',
                                         focus: function(){

                                         }*/
                                        /*
                                         }).addAutocomplete();*/

                                        //jQuery(this).getkeyboard().reveal();
                                    }

                                }

                            });

                            /*jQuery('input', '.access').on('focusout', function () {
                             jQuery('.keyboard').keyboard.destroy();
                             });*/

                            /*jQuery(this).focusout(function(){
                             alert("NOT FOCUSED");
                             });*/
                            //});
                            /*jQuery.each(jQuery('.ui-keyboard-button', '.ui-keyboard-keyset'), function () {
                             jQuery(this).addClass('testing');
                             //jQuery.each(jQuery('span', 'button'), function(){
                             jQuery(this).on('mouseenter', function (e) {
                             alert("ENTERED");
                             //jQuery(this).mouseenter();
                             classnm = "." + jQuery(this).attr('class').match(/\b(ui-keyboard-\d+)\b/)[1];
                             jQuery(classnm).click();

                             jQuery(classnm).on('click', function (e) {
                             alert("CLICKED");
                             e.preventDefault();
                             });

                             });
                             //});
                             });*/
                            /*jQuery('.ui-state-hover').on('mouseenter',function(){
                             jQuery(this).addClass('ENTERED');
                             });

                             jQuery('.testing').on('mouseenter', function(){
                             alert(jQuery(this) + "hovered");
                             });*/


                            /*jQuery.each(jQuery('input', '.access'), function(){
                             if(jQuery(this).is(':focus')){
                             alert(jQuery(this) + "focused");
                             }
                             });*/

                            //FOR KEYBOARD
                            //object.onfocus=function(){myScript};

                            //var parent = jQuery('.form-signin').parent().parent();

                            //jQuery("<button style=float:left; value=hello>hello</button>").appendTo(".tour-step-background");
                            //var parentClass = parent.attr('class');


                        }, 1000);
                        /*}); // POSSIBLE MOUSELEAVE EVENT
                         jQuery('form').on('mouseleave', function(){
                         clearTimeout(myNewTimeout);
                         });*/
                        //}


                    });
                }
                //jQuery(".myModal").remove();
                //alert("Yes was clicked");

                //------------------------------------------------------------------------------------------------------

                //NAVBARS

                //------------------------------------------------------------------------------------------------------
                //alert(functionRunning);
                if (target.is('nav') || target.is('a') || target.is('.navbar') || target.parent().is('nav') || target.parent().parent().is('nav') || target.parents('.nav').length || target.is('.nav')) { //|| target.closest('.nav')
                    //console.log("TARGET = NAVBAR");
                    //target.addClass('expose');


                    return jQuery(this).each(function () {
                        var navbarHeight;

                        if (jQuery('nav').length) { // OR target.is('nav')){
                            //jQuery('nav div.container').first().addClass('navAccess'); // MAYBE USE .parentsUntil([selector],[,filter]) e.g. jQuery( "li.item-2" ).parentsUntil( jQuery( "ul.level-1" ), ".yes" );
                            //navbarHeight = jQuery('nav').outerHeight(); removed due to change in layout
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
                                //navbarHeight = jQuery('.nav').outerHeight(); removed due to change in layout
                            }
                        }

                        //jQuery('.forContainers div:first-child').addClass('navAccess');
                        //jQuery('.nav').closest('div.container').addClass('navAccess');

                        // if (jQuery('.navbar').length) {

                        jQuery('.navAccess').addClass('expose');
                        jQuery('.expose').css('position', '');
                        //jQuery('.navAccess').addClass('forContainers');

                        //jQuery( "body" ).wrapInner( "<div class='butterfleyeWrapper forContainers' />");


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

                            /*if (jQuery(navLinkContainerClass).length) {
                             jQuery('.navLinkContainer').remove();
                             }
                             if (jQuery(helperContainerClass).length) {
                             jQuery('.helperContainer').remove();
                             }
                             if (jQuery(scrollContainerClass).length) {
                             jQuery(this).remove();
                             }*/
                            /* if(jQuery(btnContainerClass).length){
                             jQuery('.btnContainer').remove();
                             } */
                            var overlay = ".overlay";
                            //alert('You hovered over a NavBar');


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

                            /*if(jQuery('li').has('ul')){
                             //alert("DROPDOWN FOUNDDDDDDDDDDDD");
                             }*/

                            jQuery('ul.nav').addClass('ul_level_1');

                            var containerClassName;
                            var level2 = 1;

                            jQuery('ul.ul_level_1 > li a').not("ul li ul li a").each(function () {
                                var anchor = jQuery(this);

                                jQuery(this).addClass("navLink" + ++k);

                                var link = jQuery(this).attr('href');
                                //console.log(link);

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
                                    //TODO: INSERT k to refer to specific container
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

                                        jQuery(this).addClass("navLink_lvl2_" + ++k); //TODO: CHECK IF NUMBER IS CORRECT
                                        var link2;
                                        link2 = anchor2.attr('href');
                                        //console.log(link2);

                                        var content2;
                                        content2 = anchor2.text().toUpperCase();

                                        //if(jQuery(this).data('toggle') === 'popover'){
                                        jQuery("<a href='" + link2 + "' clear='both' class='btn btn-default navCls2 navLink" + k + " '><span class='spanNav2' >" + content2 + "</span></a>").appendTo(".navLinkContainer_level2_" + level2);
                                        //}

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


                            //COULD BE: li OR ul INSTEAD OF a
                            /*jQuery.each(jQuery('a', '.navAccess'), function () {
                             jQuery(this).addClass("navLink" + ++k);

                             var link = jQuery(this).attr('href');
                             console.log(link);

                             var content;

                             //GET HREF LINK AND STORE IN VARIABLE
                             //GET LINK TEXT
                             content = jQuery(this).text().toUpperCase();

                             jQuery("<a href='" + link + "' clear='both' class='btn btn-default navCls navLink" + k + " '><span class='spanNav' >" + content + "</span></a>").appendTo(navLinkContainerClass);

                             domElement = jQuery(this).get(0);
                             console.log(domElement.className);
                             });*/

                            jQuery("<button class='btn btn-danger exit'  ><span class='spanExit' >EXIT!</span></button>").appendTo(helperContainerClass);
                            jQuery(".exit").css({
                                'background-color': exitBtnColor
                            });
                            jQuery(".spanExit").css({
                                "color": exitBtnTextColor
                            });

                            var body = jQuery('body')[0];

                            /*if ( jQuery.browser.msie ) {
                             if(jQuery(document).height() > jQuery(window).height()){
                             alert("INTERNET EXPLORER");
                             }
                             }*/

                            scrollAccessibility(settings);


                            /* */
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
                                        //url(" + butterflEyeLocation + "mouse_eye_blue_large.png)
                                        var linkWidth = link.width() / 2;
                                        var linkHeight = link.height() / 2;

                                        $('.butterflEyeCursor').css({
                                            'z-index': 9999999,
                                            'position': 'relative'
                                        });

                                        /*$('.butterflEyeCursor').hover(function(e){
                                         e.preventDefault();
                                         });*/

                                        $('.butterflEyeCursor').css({
                                            'top': navLinkPosition.top + linkHeight - 20 - $(window).scrollTop(),
                                            'left': navLinkPosition.left + linkWidth - 20,
                                            'z-index': 9999999,
                                            'position': 'fixed'
                                        });
                                        checkClassName = link.attr('class').match(/\b(navLink\d+)\b/)[1];
                                        link.animate({
                                            'background-color': "green"/*,
                                             'width': '16em'*/
                                        }, navLinkL1BtnTime, "linear", function () {
                                            className = "." + link.attr('class').match(/\b(navLink\d+)\b/)[1];

                                            toggleClass = link.attr('class').match(/\b(navLink\d+)\b/)[1]
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

                                                    //scrollAccessibility(settings);

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
                                                                //url(" + butterflEyeLocation + "mouse_eye_blue_large.png)
                                                                var link2Width = link2.width() / 2;
                                                                var link2Height = link2.height() / 2;


                                                                /*$('.butterflEyeCursor').hover(function(e){
                                                                 e.preventDefault();
                                                                 });*/

                                                                $('.butterflEyeCursor').css({
                                                                    'top': navLink2Position.top + link2Height - 20 - $(window).scrollTop(),
                                                                    'left': navLink2Position.left + link2Width - 20,
                                                                    'z-index': 9999999,
                                                                    'position': 'fixed'
                                                                });
                                                                link2.animate({
                                                                    'background-color': "green"/*,
                                                                     'width': '16em'*/
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

                                                /*jQuery('.overlay').fadeOut(300, function () {
                                                 jQuery('.expose').css('z-index', '1');
                                                 target.removeClass('expose');
                                                 target.css('z-index', 1);
                                                 jQuery('.overlay').css('top', '');
                                                 functionRunning = 0;
                                                 console.log("FunctionRunning = " + functionRunning);
                                                 });*/
                                                //TODO: SEE IF IT IS NEEDED
                                            }, 100);
                                        });

                                        //myNavTimeout2 = setTimeout(function(){
                                        //jQuery(this).click();
                                        /*jQuery(this).on('click', function () {
                                         //alert('Clicked');
                                         });*/


                                        /*className = jQuery(this).attr('class').match(/\b(input\d+)\b/)[1];
                                         jQuery.each(jQuery('a', '.navAccess'), function(){
                                         if(jQuery(this).hasClass(className)){
                                         jQuery(this).trigger('click');
                                         }
                                         });*/
                                        /* myNewTimeout2 = setTimeout(function(){
                                         jQuery('.sub').trigger('click');
                                         ;


                                         }, 1000); */
                                        //functionRunning = 0;
                                        //alert(functionRunning)

                                        //}, 1000);
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
                                    //url(" + butterflEyeLocation + "mouse_eye_blue_large.png)
                                    var backButtonWidth = backButton.width() / 2;
                                    var backButtonHeight = backButton.height() / 2;


                                    /*$('.butterflEyeCursor').hover(function(e){
                                     e.preventDefault();
                                     });*/

                                    $('.butterflEyeCursor').css({
                                        'top': backPosition.top + backButtonHeight - 20 - $(window).scrollTop(),
                                        'left': backPosition.left + backButtonWidth - 10,
                                        'z-index': 9999999,
                                        'position': 'fixed'
                                    });
                                    jQuery(this).animate({
                                        'background-color': "green"/*,
                                         'width': '16em'*/
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
                                //if(playPause == 0) {
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
                                    //url(" + butterflEyeLocation + "mouse_eye_blue_large.png)
                                    var exitButtonWidth = exitButton.width() / 2;
                                    var exitButtonHeight = exitButton.height() / 2;


                                    /*$('.butterflEyeCursor').hover(function(e){
                                     e.preventDefault();
                                     });*/

                                    $('.butterflEyeCursor').css({
                                        'top': exitPosition.top + exitButtonHeight - 20 - $(window).scrollTop() ,
                                        'left': exitPosition.left + exitButtonWidth - 10,
                                        'z-index': 9999999,
                                        'position': 'fixed'
                                    });

                                    jQuery(this).animate({
                                        'background-color': "green"/*,
                                         'width': '16em'*/
                                    }, exitBtnTime, "linear", function () {
                                        myNewNavTimeout = setTimeout(function () {
                                            /*t.end();

                                             if(t.ended()){
                                             alert("Tour has ended");
                                             }*/
                                            /*jQuery('.overlay').fadeOut(300, function () {
                                             jQuery('.expose').css('z-index', '1');

                                             target.css('z-index', 1);
                                             jQuery('.overlay').css('top', '');


                                             });*/

                                            jQuery('.overlay').fadeOut(300, function () {
                                                jQuery('.expose').css('z-index', '1');
                                                jQuery('.overlay').css('top', '');
                                                jQuery('.overlay').css('left', '');
                                                jQuery('.overlay').css('height', '');
                                                target.removeClass('expose');
                                                //jQuery('.inputContainer').remove();
                                                //jQuery('.btnContainer').remove();
                                                jQuery('.helperContainer').remove();
                                                jQuery('.navLinkContainer').remove();
                                                jQuery('.navLinkContainerLevel2').remove();
                                                //jQuery('.restContainer').remove();
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
                                                    //link.removeClass(link.attr('class').match(/\b(navLink\d+)\b/)[1]);
                                                });
                                                $('.navAccess').css({
                                                    'opacity': 1
                                                });
                                                jQuery('nav').removeClass('navAccess');
                                                jQuery('.butterfleyeWrapper').removeClass('forContainers');
                                                //jQuery('nav').parent('div').removeClass("expose");
                                                jQuery('.utilityContainer').remove();
                                                //target.removeClass('navAccess');
                                                //jQuery('ul').removeClass('navAccess');
                                                jQuery('nav').removeClass('col-md-6');
                                                jQuery('nav').removeClass('col-md-4 col-md-offset-4');
                                                //jQuery('nav').removeClass('forContainers');
                                                jQuery('nav').removeClass('expose');

                                                /*jQuery('a').removeClass('navCls');
                                                 jQuery('a').removeClass(jQuery('a').attr('class').match(/\b(navLink\d+)\b/)[1]);*/

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
                                                /*var style = $("<style />", {
                                                    id  : 'cursorStyle',
                                                    type: 'text/css',
                                                    html: "*{ cursor: url(" + butterflEyeLocation + "mouse_eye_blue_large.png) 25 15, auto !important}"
                                                }).appendTo("head");*/
                                            });
                                            $('#timer').remove();

                                            target.removeClass('expose');
                                            functionRunning = 0;
                                            //console.log("FunctionRunning = " + functionRunning);
                                        }, 100);
                                    });
                                //}else{}
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
                        //}
                    });
                }
            }
            //});
            jQuery('.loadingModal').remove();
        } else{

        }
    }
    function displayResults(originalWord, json) {
        $('ul.ui-autocomplete').empty();
        $('input#myWord').val('');
        $('h3#wordHeader').text('Results for: ' + originalWord);

        // http://api.jquery.com/jquery.each/
        $.each(json, function(partOfSpeech, wordList) {

            // display part of speech as a header
            $('ul.ui-autocomplete').append('<h4>' + partOfSpeech + '</h4>');

            // create a list of words based on type
            if (wordList.syn !== undefined) {
                createList('synonyms', wordList.syn);
            }
            if (wordList.ant !== undefined) {
                createList('antonyms', wordList.ant);
            }
            if (wordList.rel !== undefined) {
                createList('related terms', wordList.rel);
            }
            if (wordList.sim !== undefined) {
                createList('similar terms', wordList.sim);
            }
        });
    }
    function split(val) {
        return val.split(/,\s*/);
    }
    function extractLast(term) {
        return split(term).pop();
    }

    function createList(id, words) {
        $('ul.ui-autocomplete').append('<h5>' + id + '</h5>');
        $('ul.ui-autocomplete').append('<ul id="' + id + '"></ul>');

        words.forEach(function(el, i, arr) {
            $('ul#' + id).append('<li>' + el + '</li>');
        });
    }

})(jQuery);



jQuery(document).ready(function($){



    //jQuery('form').myPlugin()

    $(document).myPlugin({
        pieTimer: {
            buttonCornerLocation: true,
            pieTimerColor: "#000000"
        }/*,
         exitButton: {
         exitButtonColor: "#ffff00" // purple
         //exitButtonTime: 10000
         }
         inputButton: {
         inputButtonColor: "#0000ff" // blue
         //inputButtonTime: 10000
         },
         actionButton: {
         actionButtonColor: "#ffff00" // yellow
         //actionButtonTime: 10000
         },
         backButton: {
         backButtonColor: "#ffa500" // orange
         //backButtonTime: 10000
         },
         navLinkL1Button: {
         navLinkL1ButtonColor: "#ff0000" // red
         //navLinkL1ButtonTime: 10000
         },
         navLinkL2Button: {
         navLinkL2ButtonColor: "#00ffff" // aqua
         //navLinkL2ButtonTime: 10000
         },
         scrollButton: {
         scrollButtonColor: "#543210", // brown
         scrollButtonTime: 2000,
         scrollButtonInterval: 1000
         },
         //formHoverTime: 10000,
         //navHoverTime: 10000,
         //initButterflEyeModalTime: 10000,
         //loadingTime: 10000,
         //startButterflEyeYNTime: 5000,
         overlayColor: "rgba(100,200,300,0.9)",
         initializaButterflEyePos: "bottomRight",
         keyboardDesign:{
         keyboardBackgroundContrast: true,
         keyboardButtonTime: 2000,
         keyboardButtonColor: "#ff0000" // red
         }
         //restContainerColor: '#ffa500' // orange*/
    });

    //inputButtonColor: "blue",
    //actionButtonColor: "yellow",
    //backButtonColor: "orange",
    //exitButtonColor: "purple",
    //scrollButtonColor: "#543210",
    //navLinkL1ButtonColor: "red",
    //navLinkL2ButtonColor: "aqua",
    //action time
    //keyboard background color
    //text color contrast (black/white)
    //exitButtonTime: 10000,
    /*scrollInterval: 1000,
     scrollTime: 5000,
     formHoverTime: 3000,
     navHoverTime: 3000,
     inputTime: 10000,
     navLinkL1Time: 10000,
     navLinkL2Time: 10000,
     startButterflEyeYNTime: 5000,
     initButterflEye: 10000*/

    /*$(document).myPlugin({
     inputButtonColor: "blue",
     actionButtonColor: "yellow",
     backButtonColor: "orange",
     exitButtonColor: "purple"
     });*/

    /*jQuery('.form-signin').children('.osk-trigger').onScreenKeyboard({
     rewireReturn : 'submit',
     rewireTab : true
     });*/
});